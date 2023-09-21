import React from 'react'
import Link from "next/link"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <h1 className="navbar-brand">Legalix</h1>
        <div className="right-side">
          <a className="nav-link">Learn</a>
          <a className="nav-link">About</a>
          <a className="nav-link">My Profile</a>
          <Link href="/login" className="nav-link">Login</Link>
          <Link href="/signup" className="btn btn-primary btn-blue">Signup</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar