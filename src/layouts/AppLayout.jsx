import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <div className="bg-background-primary">
      <Outlet />
      <Footer />
    </div>
  );
}
