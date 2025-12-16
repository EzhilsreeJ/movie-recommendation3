import React from 'react';
import './Header.css'; // Assuming you'll create a Header.css file

function Header() {
  return (
    <header className="app-header">
      <div className="logo">MovieRecs</div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/admin">Admin</a></li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;