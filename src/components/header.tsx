import icon from "../assets/logo.svg";
import { NavLink } from "./nav-link";

export function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={icon} />

      <nav className="flex items-center gap-5">
        <NavLink>Events</NavLink>
        <NavLink>Attendees</NavLink>
      </nav>
    </div>
  );
}
