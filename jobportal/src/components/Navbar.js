
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar({ role, setRole }) {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
        <img src={logo} alt="Job Portal Logo" className="navbar-logo"/></Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/jobs">Jobs</Link>
            </li>
            {/* Job Seeker Links */}
            {role === "jobseeker" && (
              <>
                <li className="nav-item">
                    <Link className="nav-link" to="/profile">Profile</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/applications">Applications</Link>
                </li>
              </>
            )}

            {/* Employer Links */}
            {role === "employer" && (
              <li className="nav-item">
                <Link className="nav-link" to="/employer">Employer Dashboard</Link>
              </li>
            )}

            {/* Admin Links */}
            {role === "admin" && (
              <li className="nav-item">
                <Link className="nav-link" to="/admin">Admin</Link>
              </li>
            )}
            <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="/courses" role="button" data-bs-toggle="dropdown" aria-expanded="false">Courses</Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/">Full Stack Development</Link></li>
              <li><Link className="dropdown-item" to="/">Networks & Communications</Link></li>
            </ul>
          </li>
          </ul>
          
          
          
          
         
          <div className="nav-cta-container">
            <form className="search-form" role="search">
              <span className="search-icon"><i class="bi bi-search"></i></span>
              <input className="search-input" type="search" placeholder="Search" aria-label="Search"/>
            </form>
            <div className="header_vertical_partition"></div>
            <button type="button" className="btn login-btn" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
            <button type="button" className="btn login-btn" data-bs-toggle="modal" data-bs-target="#registerModal">Register</button>
            <div className="header_vertical_partition"></div>
            <Link to="/" className="employer-link" data-bs-toggle="modal" data-bs-target="#employerModal">Employer sign up <span><i className="bi bi-chevron-right"></i></span></Link>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
