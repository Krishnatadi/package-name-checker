// App.js
import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './components/Home';
import PyPiChecker from './components/PyPIChecker';
import NpmChecker from './components/NpmChecker';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

const App = () => {

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/package-name-checker" />} />
            <Route path="/package-name-checker" element={<HomePage />} />
            <Route path="/pypi-checker" element={<PyPiChecker />} />
            <Route path="/npm-checker" element={<NpmChecker />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
