import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Web = () => {
  return (
    <main>
      <Nav />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Web;
