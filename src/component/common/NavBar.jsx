import React from 'react';
import {NavLink} from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
import './NavBar.css';

function NavBar() {
    const auth=localStorage.getItem("auth");
  return (
      <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container">
          <a class="navbar-brand me-auto" href="#">Class Crest</a>

          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
               aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Class Crect</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <NavLink className="nav-link mx-lg-2" aria-current="page" to="/" end>Home</NavLink>
                </li>
                  {
                      auth=="true"?(
                          <>
                              <li className="nav-item">
                                  <NavLink className="nav-link mx-lg-2" aria-current="page"
                                           to="/view-students">Students</NavLink>
                              </li>
                              <li className="nav-item">
                                  <NavLink className="nav-link mx-lg-2" aria-current="page" to="/add-students">Add
                                      Students</NavLink>
                              </li>
                          </>
                      ) : undefined
                  }

                  <li className="nav-item">
                      <NavLink className="nav-link mx-lg-2" to="/about">About</NavLink>
                  </li>
              </ul>
            </div>


          </div>
            {
                auth == 'true' ? <NavLink className=" login-button" to="/login" onClick={()=>{
                    localStorage.setItem('auth',false);
                }}>Logout</NavLink>:<NavLink className=" login-button" to="/login">Login</NavLink>
            }

        <button className="navbar-toggler pe-0" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

</nav>
  // <section className="hero-section"></section>
)
  ;
}

export default NavBar;
