import React from "react";
import { Link } from "gatsby";

export default function Header() {
  return (
    <nav className="navbar navbar-expand">
      <div className="navbar-wrapper d-flex">
        {/* <h3><Link className="nav-link" activeClassName="active-nav-link" to="/">Buddha Gurung</Link></h3> */}
        <div className="d-flex">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link nav-link-brand" activeClassName="active-nav-link" to="/">Buddha Gurung</Link>
            </li>
            <li className="nav-item">
              <Link to="/blog/" className="nav-link" activeClassName="active-nav-link">Blog</Link>
            </li>
            <li className="nav-item">
              <Link to="/projects/" className="nav-link" activeClassName="active-nav-link">Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="/about/" className="nav-link" activeClassName="active-nav-link">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}