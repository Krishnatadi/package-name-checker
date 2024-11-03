// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  
  return (
    <>
    <div className="container mt-5">
      <h1 className="text-center mb-5" style={{marginTop: "-100px"}}>Welcome to the Package Name Checker</h1>
      <p className="text-center mb-4">Use this tool to check the availability of package names on PyPI and npm.</p>
      <div className="d-flex justify-content-center">
        <Link to="/pypi-checker" className="btn btn-primary btn-lg mx-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Check if a package is available on PyPI">Check PyPI Package</Link>
        <Link to="/npm-checker" className="btn btn-success btn-lg mx-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Check if a package is available on npm">Check NPM Package</Link>
      </div>
      {/* <div className="text-center mt-4">
        <small className="text-muted">Need help? Hover over the buttons for more information.</small>
      </div> */}
    </div>
    </>
  );
}

export default Home;
