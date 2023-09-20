import React from 'react'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <h1 className="navbar-brand">Legalix</h1>
        <div className="right-side">
          <a className="nav-link">Learn</a>
          <a className="nav-link">About</a>
          <a className="nav-link">My Profile</a>
          <a className="nav-link">Login</a>

          <a className="btn btn-primary">Signup</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar