import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <nav>
      <ul className="flex justify-between space-x-4">
        <li>
          <NavLink to="/myBlog">My blog</NavLink>
        </li>
        <li>
          <NavLink to="/contactMe">Contact me</NavLink>
        </li>
      </ul>
    </nav>
  );
}
