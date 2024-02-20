import React from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink for active styling

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">ClassCrest</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* Use NavLink for active state styling */}
              <NavLink className="nav-link" aria-current="page" to="/view-students" activeClassName="active">View All Students</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/add-students" activeClassName="active">Add New Student</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
