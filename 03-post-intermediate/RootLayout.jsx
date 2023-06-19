import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div style={{ margin: "0px", padding: "0px", width: "100vh" }}>
      <nav
        style={{
          backgroundColor: "mistyrose",
          padding: "5px",
          margin: "0px 0px 25px 0px",
        }}
      >
        <section
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h1 style={{ color: "midnightblue" }}>Redux Essentials Example</h1>

          <div className="navContent">
            <div className="navLinks">
              <NavLink to="/">Posts</NavLink>
            </div>
            <div className="navLinks">
              <NavLink to="/add">Add Post</NavLink>
            </div>
          </div>
        </section>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
