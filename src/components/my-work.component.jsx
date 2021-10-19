import React, { useContext } from 'react';
import { PinOnScrollContext } from './pin-on-scroll.component';

export default function MyWork() {
  const Context = useContext(PinOnScrollContext);
  console.log(Context);
  return (
    <section id="myWork">
      <div className="container">
        <h1
          className="section-title text-center"
          style={{
            opacity: Math.min(1, ((Context.scrollTop / 600) * 100) / 100)
          }}
        >
          My Work
        </h1>
      </div>
    </section>
  );
}
