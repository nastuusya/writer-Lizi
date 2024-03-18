import { NavLink } from "react-router-dom";
import { NavBar } from "./Nav";

export function Header() {
  return (
    <header className="bg-white sticky top-0 ">
      <div className="flex justify-between">
        <NavLink to="/mainContent">Logo</NavLink>
        <div>
          <NavBar />
        </div>
      </div>
    </header>
  );
}
