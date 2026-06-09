import { Outlet, NavLink } from "react-router-dom";
import Header from "./Header";
import cvData from "../data/cvData";

function Layout() {
  return (
    <main className="cv">
      <header className="cv-hero">
        <Header name={cvData.name} title={cvData.title} />
      </header>

      <nav className="cv-nav">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/summary">Summary</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/sociallinks">Social Links</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/updatestate">Update State</NavLink>
        <NavLink to="/updatestate/simple-object">Simple Object</NavLink>
        <NavLink to="/updatestate/array-objects">Array Objects</NavLink>
        <NavLink to="/updatestate/nested-array">Nested Array</NavLink>
        <NavLink to="/updatestate/nested-object-array">
          Nested Object Array
        </NavLink>
      </nav>

      <Outlet />

      <footer className="cv-footer">
        <p>Amin Ghaderi — Fullstack Developer</p>
      </footer>
    </main>
  );
}

export default Layout;
