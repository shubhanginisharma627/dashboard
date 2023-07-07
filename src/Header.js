import React from 'react';

const Header = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <header>
      <div className="header-left">
        <h1>Hi, Jennie Moss</h1>
      </div>
      <div className="header-right">
        <p>Last scanned on {currentDate}</p>
      </div>
    </header>
  );
};

export default Header;
