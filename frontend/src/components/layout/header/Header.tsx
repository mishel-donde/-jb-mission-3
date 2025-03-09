import { NavLink } from "react-router-dom";
import "./Header.css"; // כולל את הקובץ CSS

export default function Header() {
  return (
    <div className="header">
      <div className="logo">Development App</div> {/* המקום ל-Logo */}
      <div className="navigation">
        <nav>
          <NavLink
            to="/teams"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Development Teams
          </NavLink>
          <NavLink
            to="/meetings"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Meetings
          </NavLink>
          <NavLink
            to="/add-meeting"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Add Meeting
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
