import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h3>Redux Toolkit Docs</h3>
      <Link to="/">Posts</Link>
    </div>
  );
};

export default Navbar;
