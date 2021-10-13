// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppLayout from './app-layout';

export default function Router() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
