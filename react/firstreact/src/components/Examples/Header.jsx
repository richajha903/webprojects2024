import React from "react";

const Header = () => {
  return (
    <>
      <header className="header">
        <h1> Welcome to My First React Project</h1>
        <nav className="nav">
          <ul className="nav-links">
            <li>Home</li>
            <li>Gallery</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
