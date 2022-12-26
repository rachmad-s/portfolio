// eslint-disable-next-line no-unused-vars
import React from 'react';
import AppRoutes from './app-routes';
import Navbar from './../components/navbar.component';

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <main>
        <AppRoutes />
      </main>
    </>
  );
}
