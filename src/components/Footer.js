// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 fixed-bottom">
      &copy; {new Date().getFullYear()} Package Name Checker All rights reserved.
    </footer>
  );
};

export default Footer;
