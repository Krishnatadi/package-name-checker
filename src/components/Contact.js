// src/components/Contact.js
import React from 'react';

const Contact = () => {
    return (
        <div className="container mt-5 min-vh-100">
        <h2 className="text-center" style={{marginTop: "60px"}}>Contact Us</h2>
        <p className="text-center">Feel free to reach out with any questions or concerns!</p>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="3" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  };
  
  export default Contact;
  