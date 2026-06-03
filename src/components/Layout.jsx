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
      </nav>

      <Outlet />

      <footer className="cv-footer">
        <p>Amin Ghaderi — Fullstack Developer</p>
      </footer>
    </main>
  );
}

export default Layout;
