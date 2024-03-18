import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export function PageLayout() {
  return (
    <div className="h-screen p-4 ">
      <Header />
      <Outlet />
    </div>
  );
}
