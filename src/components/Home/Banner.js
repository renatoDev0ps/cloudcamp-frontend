import React from 'react';

const Banner = ({ appName, token }) => {
  if (token) {
    return null;
  }
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">
          {appName.toLowerCase()}
        </h1>
        <p>Um lugar para compartilhar seu conhecimento</p>
        <br/>
           <p align="center"> <img src="https://treinacloudimages.s3-us-west-2.amazonaws.com/logo.png" alt="CloudPost" width="380" class="center" /> </p>
                      </div>
                 </div>
                 
    
  );
};

export default Banner;
