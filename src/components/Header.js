import React from "react";
import { Link } from "gatsby";
// import { MdOutlineDarkMode } from "react-icons/md";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <h3><Link className="navbar-brand" to="/">Buddha Gurung</Link></h3>

        <div className="d-flex">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/blog" className="nav-link">Blog</Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link">Projects</Link>
            </li>
          </ul>
          {/* <MdOutlineDarkMode style={{ color: "white" }} size="30" /> */}
        </div>
      </div>
    </nav>
  );
}