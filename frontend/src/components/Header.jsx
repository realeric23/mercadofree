import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <>
      <header className="masthead text-center text-white">
        <div className="masthead-content ">
          <div className="container " >


            <h1 className="masthead-heading mb-2 mt-5">Welcome to MercadoFree</h1>
            <h2 className="masthead-subheading mb-5">Your place to search</h2>
            <a href="#" className="btn btn-primary btn-xl rounded-pill mt-5 d-none">
              Start Searching NOW
          </a>
          </div>
        </div>
        <div className="bg-circle-1 bg-circle"></div>
        <div className="bg-circle-2 bg-circle"></div>
        <div className="bg-circle-3 bg-circle"></div>
        <div className="bg-circle-4 bg-circle"></div>
      </header>



    </>

  );
};

export default Header;
