import React from 'react';
import { NavHeader } from './Layouts/Header';
import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <NavHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
