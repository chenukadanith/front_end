import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa6";

function NavBar() {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
        <div className="container-fluid">
          <div className="d-flex justify-content-center ">
            <NavLink className="navbar-brand" to="/">ClassCrest</NavLink>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/view-students" activeClassName="active">View All
                  Students</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/add-students" activeClassName="active">Add New Student</NavLink>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                   data-bs-toggle="dropdown" aria-expanded="false">
                  <FaRegUser/>
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink className="dropdown-item" to="/profile">View Profile</NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/logout">Logout</NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default NavBar;
