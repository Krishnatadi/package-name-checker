import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate if the user has scrolled down by 50% of the page height
      const scrollPosition = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollPosition > pageHeight * 0.5) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);
    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="text-center mx-auto" style={{ marginTop: "100px", maxWidth:"1000px" }}>
      <h1 className="mb-4">Welcome to the Package Name Checker</h1>
      <p className="lead mb-4">
        Easily check the availability and details of your packages on NPM and PyPi. 
        Our tool provides quick insights to help you choose the perfect package name.
      </p>

      <div className="d-flex flex-column flex-md-row align-items-center justify-content-center mt-4">
        <button 
          className="btn btn-primary d-flex align-items-center mb-3 mb-md-0 mx-2"
          onClick={() => navigate('/npm-checker')}
          title="Check your NPM package"
          style={{ maxWidth: '300px' }}
        >
          <ion-icon name="logo-npm" style={{ fontSize: '26px', marginRight: '8px' }}></ion-icon>
          NPM Checker
        </button>

        <button 
          className="btn btn-success d-flex align-items-center mx-2"
          onClick={() => navigate('/pypi-checker')}
          title="Check your PyPi package"
          style={{ maxWidth: '300px' }}
        >
          <ion-icon name="logo-python" style={{ fontSize: '26px', marginRight: '8px' }}></ion-icon>
          PyPi Checker
        </button>
      </div>

      <br/><br/>

      <h2 className="mt-5">How It Works</h2>
<div className="row mt-4">
  <div className="col-md-4">
    <div className="card text-center shadow h-100">
      <div className="card-body">
        <h5 className="card-title">Step 1: Enter Package Name</h5>
        <p className="card-text">Type in the package name you want to check. This tool will verify its availability instantly.</p>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card text-center shadow h-100">
      <div className="card-body">
        <h5 className="card-title">Step 2: Choose Platform</h5>
        <p className="card-text">Select NPM or PyPi to check availability and view details about the package on your chosen platform.</p>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card text-center shadow h-100">
      <div className="card-body">
        <h5 className="card-title">Step 3: View Results</h5>
        <p className="card-text">Get detailed insights, including current version, dependencies, and availability status.</p>
      </div>
    </div>
  </div>
</div>

      <br/><br/>

      <div className="mt-5">
        <h2>Get Involved</h2>
        <p className="lead">Report issues or contribute to the project:</p>
        <div>
          <a href="https://github.com/Krishnatadi/package-name-checker/issues" target="_blank" rel="noopener noreferrer" className="btn btn-warning mx-2">
            Report Issues
          </a>
          <a href="https://github.com/Krishnatadi/package-name-checker" target="_blank" rel="noopener noreferrer" className="btn btn-info mx-2">
            View Repository
          </a>
        </div>
      </div>

      <br/><br/>

      <h2 className="mt-5">Features</h2>
      <div className="row mt-4">
        {/* Feature Cards */}
        {["Check Availability", "Detailed Insights", "User-Friendly Interface", "Seamless Integration"].map((feature, index) => (
          <div className="col-lg-3 col-md-6 mb-4" key={index}>
            <div className="card text-center shadow h-100">
              <div className="card-body">
                <h5 className="card-title">{feature}</h5>
                <p className="card-text">
                  {/* Description based on feature */}
                  {feature === "Check Availability" && "Instantly check if your desired package name is available on NPM or PyPi."}
                  {feature === "Detailed Insights" && "Get detailed information about existing packages, including their versions and dependencies."}
                  {feature === "User-Friendly Interface" && "Enjoy a clean and intuitive interface for seamless navigation and quick access to information."}
                  {feature === "Seamless Integration" && "Easily integrate this tool into your development workflow to enhance package management."}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <br/><br/>

      <div className="mt-5">
  <h2>Connect With Us</h2>
  <p>Follow us for updates or star us on GitHub to show your support!</p>
  <div>
    <a href="https://github.com/Krishnatadi/package-name-checker" target="_blank" rel="noopener noreferrer" className="btn btn-dark mx-2">
      <ion-icon name="logo-github" style={{ fontSize: '26px', marginRight: '8px' }}></ion-icon> Star on GitHub
    </a>
  </div>
</div>

<br/><br/>

      {/* FAQ Section */}
      <h2 className="mt-5">Frequently Asked Questions</h2>
      <div className="accordion mt-4" id="faqAccordion">
        {[
          { question: "What is Package Name Checker?", answer: "Package Name Checker helps you quickly verify if a package name is available on NPM or PyPi." },
          { question: "Is this tool free to use?", answer: "Yes, this tool is completely free to use for checking package name availability." },
          { question: "What information can I get about existing packages?", answer: "You can get details about the availability of the packages names." },
          { question: "How accurate is the availability check?", answer: "The availability check is updated in real-time with the latest data from NPM and PyPi." },
          { question: "Can I contribute to this tool?", answer: "Absolutely! You can contribute by reporting issues or submitting pull requests on GitHub." },
          { question: "Where can I report issues?", answer: "You can report issues on our GitHub page under the 'Issues' section." }
        ].map((faq, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button 
                className="accordion-button collapsed" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target={`#collapse${index}`} 
                aria-expanded="false" 
                aria-controls={`collapse${index}`}
              >
                {faq.question}
              </button>
            </h2>
            <div 
              id={`collapse${index}`} 
              className="accordion-collapse collapse" 
              aria-labelledby={`heading${index}`} 
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
<br/><br/>


<div className="mt-5">
  <h2>Stay Updated</h2>
  <p className="lead">Get the latest updates on new features and improvements directly to your inbox.</p>
  <form className="d-flex justify-content-center">
    <input type="email" className="form-control w-50" placeholder="Enter your email" />
    <button type="submit" className="btn btn-primary mx-2">Subscribe</button>
  </form>
</div>

<br/><br/>

{/* Back to Top Button */}
{showBackToTop && (
        <button
          className="btn btn-secondary position-fixed"
          style={{ bottom: '20px', right: '20px' }}
          onClick={scrollToTop}
        >
          Back to Top
        </button>
      )}
    </div>
  );
};

export default HomePage;
