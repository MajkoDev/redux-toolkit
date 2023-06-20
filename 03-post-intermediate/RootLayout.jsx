import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="App">
      <nav>
        <p className="nav-logo">Redux Essentials Example</p>
        <div className="nav-menu">
          <NavLink to="/">
            <p className="nav-link">Posts</p>
          </NavLink>
          <NavLink to="/add">
            <p className="nav-link">
              Add Posts
              </p>
          </NavLink>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
