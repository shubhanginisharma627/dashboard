import React from 'react';

const Header = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <header>
      <div className="header-left">
        <h1>s</h1>
      </div>
      <div className="header-right">
        <p>{currentDate}</p>
      </div>
    </header>
  );
};

export default Header;
