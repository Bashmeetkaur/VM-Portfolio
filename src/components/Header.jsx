import React from 'react';

function Header() {
  return (
    <header className="bg-primary text-white text-center py-6 position-relative fade-out" style={{ minHeight: '25vh' }}>
      <div className="parallax"></div>
      <h1 className="display-3 fw-bold text-shadow">Vipul Mehra</h1>
      <p className="lead fw-medium">Web Developer | React Enthusiast</p>
    </header>
  );
}

export default Header;