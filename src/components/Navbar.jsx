import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header className="masthead">
        <Link to="/" className="magazine-title">
          Velour.
        </Link>
        <p className="magazine-tagline">
          A Quarterly Style Journal &bull; 4 Seasonal Editions &bull; Issue No. 04: The Winter Edit
        </p>
      </header>

      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              The Cover
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/looks"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Lookbook
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/capsule"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Capsule Guide
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/letters"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Letters
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}