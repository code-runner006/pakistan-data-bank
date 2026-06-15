import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { MdBarChart } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-success px-4 py-3">
      <span className="navbar-brand fw-bold fs-5">
        <MdBarChart size={24} className="me-2" />
        Pakistan Data Bank
      </span>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navMenu"
        aria-controls="navMenu"
        aria-expanded="false"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navMenu">
        <div className="navbar-nav ms-auto gap-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link ${isActive ? `text-white ${styles.active}` : "text-white-50"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/explorer"
            className={({ isActive }) =>
              `nav-link ${isActive ? `text-white ${styles.active}` : "text-white-50"}`
            }
          >
            Explorer
          </NavLink>
          <NavLink
            to="/compare"
            className={({ isActive }) =>
              `nav-link ${isActive ? `text-white ${styles.active}` : "text-white-50"}`
            }
          >
            Compare
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `nav-link ${isActive ? `text-white ${styles.active}` : "text-white-50"}`
            }
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
