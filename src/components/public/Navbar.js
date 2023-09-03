import React, { useState } from "react";

export const Navbar = () => {
  
  const [clicksLogo, setClicksLogo] = useState(0);

  const handleClick = () => {
    setClicksLogo(clicksLogo + 1);
    console.log(clicksLogo);
  }

  return (
    <div>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <span
              
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
              onClick={handleClick}
              
            >
              
              <img
                className="App-logo"
                src="https://static1.squarespace.com/static/52c0055ae4b080d3449455f1/52c2960fe4b060c98f390214/596cdc4b6a4963dc066ec421/1500307756445/imagenes-fotos-sin-copyright.png?format=1500w"
                alt="logoA"
                width="50"
                height="60"
              />
            </span>
           

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" className="nav-link px-2 text-secondary" onClick={handleClick}>
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  About
                </a>
              </li>
            </ul>

            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control form-control-dark text-bg-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">
                Login
              </button>
              <button type="button" className="btn btn-warning">
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
