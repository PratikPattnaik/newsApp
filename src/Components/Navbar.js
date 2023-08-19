import React, { Component } from "react";
import { Link } from "react-router-dom";  

export class Navbar extends Component {
  render() {
    return (<>
      <nav className="navbar navbar-expand-lg bg-dark " data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            AbTak!
          </Link>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/business">
                Business
              </Link>
              <Link className="nav-link" to="/health">
                Health
              </Link>
              <Link className="nav-link" to="/science">
                Science
              </Link>
              <Link className="nav-link" to="/sports">
                Sports
              </Link>
              <Link className="nav-link" to="/technology">
                Technology
              </Link>
            </div>
          </div>
        </div>
      </nav>
      </>
    );
  }
}

export default Navbar;
