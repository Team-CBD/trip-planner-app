import React from 'react';

const Banner = ({ appName, token }) => {
  if (token) {
    return null;
  }
  return (
    <div className="banner mt-5">
      <div className="container">
        <h1 className="logo-font">
        Social Trip Planner
        </h1>
      </div>
    </div>
  );
};

export default Banner;
