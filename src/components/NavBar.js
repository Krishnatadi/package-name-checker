// components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">PackageNameChecker</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/pypi-checker">PyPI Checker</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/npm-checker">NPM Checker</Link>
            </li>
            <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;