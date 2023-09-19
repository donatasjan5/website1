import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  return (
    <>
 <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <div className="logo-text">MYSTERIOUS</div>
            <i className="material-symbols-outlined">mystery</i>
          </Link>
          <div className="navbar-menu">
            <div className="material-symbols-outlined">menu</div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
