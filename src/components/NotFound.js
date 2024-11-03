import React from "react";
import { Link } from "react-router-dom";
import NotFoundImage from '../images/404.png';

function NotFound() {
  return (
    <div className="container text-center mt-5 pt-5" style={{marginBottom: "100px"}}>
      <h1>404 - Page Not Found</h1>
      <img src={NotFoundImage} title="404 error" alt="404 error" className="img-fluid mt-2"/>
      <div className="mt-2"><br/><br/>
        <Link to="/" className="btn btn-primary">Go Home</Link>
      </div>
    </div>
  );
}

export default NotFound;
