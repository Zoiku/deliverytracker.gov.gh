import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles/Outlet.css"

const Web = () => {
  return (
    <main>
      <Nav />
      <div className="outlet-body">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default Web;
