import React from "react";
import { Link } from "gatsby";

export default function Header() {
  return (
    <nav className="navbar navbar-expand">
      <div className="navbar-wrapper d-flex">
        <div className="d-flex">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" activeClassName="active-nav-link" to="/">HOME</Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link" activeClassName="active-nav-link" partiallyActive={true}>BLOG</Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link" activeClassName="active-nav-link">PROJECTS</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}