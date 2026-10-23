import { NavLink } from "react-router-dom";
import { FiHome, FiUser, FiBookOpen, FiTarget, FiBriefcase, FiTool, FiMessageSquare } from "react-icons/fi";

// Shared side menu: one icon per page, click to navigate.
const items = [
  { to: "/", icon: FiHome, label: "Home" },
  { to: "/about", icon: FiUser, label: "About me" },
  { to: "/eduexp", icon: FiBookOpen, label: "Education & Experience" },
  { to: "/spec", icon: FiTarget, label: "Specializations" },
  { to: "/projects", icon: FiBriefcase, label: "Projects" },
  { to: "/skills", icon: FiTool, label: "Skills" },
  { to: "/contactme", icon: FiMessageSquare, label: "Contact me" },
];

export default function SideMenu() {
  return (
    <nav className="side-menu" aria-label="Main">
      {items.map(({ to, icon: Icon, label }) => (
        <NavLink
          key={to}
          to={to}
          end={to === "/"}
          title={label}
          aria-label={label}
          className={({ isActive }) => "side-menu__item" + (isActive ? " is-active" : "")}
        >
          <Icon />
        </NavLink>
      ))}
    </nav>
  );
}
