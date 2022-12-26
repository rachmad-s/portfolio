import React, { useState, useEffect, useRef } from 'react';

export const PinOnScrollContext = React.createContext(null);

export default function PinOnScroll(props) {
  const TargetElement = useRef();
  const InitStyle = {
    position: 'relative'
  };

  const [scrollTop, setScrollTop] = useState(0);
  const [style, setStyle] = useState(InitStyle);
  const [anchor, setAnchor] = useState(0);
  const [end, setEnd] = useState(0);
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    setAnchor(TargetElement.current.offsetTop);
  }, [TargetElement]);

  useEffect(() => {
    setEnd(anchor + Number(props.stopAfter));
  }, [anchor]);

  const onScroll = (e) => {
    setScrollTop(() => e.target.documentElement.scrollTop);
    if (scrollTop >= anchor && scrollTop <= end) {
      setActive(true);
      document.body.style.paddingTop = `${scrollTop}px`;
      setStyle({
        position: 'fixed',
        top: '0px',
        zIndex: 11,
        bottom: '0px',
        width: '100%'
      });
    } else if (scrollTop > end) {
      document.body.style.paddingTop = `${end - anchor - (scrollTop - end)}px`;
      setStyle(InitStyle);
    } else {
      document.body.style.paddingTop = 'unset';
      setStyle(InitStyle);
    }
  };

  useEffect(() => {
    if (anchor && end) {
      window.addEventListener('scroll', onScroll);
    }
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop, anchor, end]);

  return (
    <div ref={TargetElement} style={style}>
      <PinOnScrollContext.Provider value={{ isActive, scrollTop }}>
        {props.children}
      </PinOnScrollContext.Provider>
    </div>
  );
}

PinOnScroll.defaultProps = {
  start: 'top'
};
