import React from 'react';
import {NavLink} from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
// import './NavBar.css';

function NavBar() {
  return (
      <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container">
          <a class="navbar-brand me-auto" href="#">Class Crest</a>

          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Class Crect</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <NavLink  className="nav-link active mx-lg-2" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link mx-lg-2" aria-current="page" to="/view-students">Students</NavLink>
                </li>

                <li className="nav-item">
                  <a className="nav-link  mx-lg-2" aria-current="page" href="#">Add Students</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-lg-2" href="#">About</a>
                </li>

              </ul>

            </div>
          </div>
          <a href="#" class="login-button">Login</a>
          <button className="navbar-toggler pe-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                  aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

      </nav>
      // <section className="hero-section"></section>
  );
}

export default NavBar;
