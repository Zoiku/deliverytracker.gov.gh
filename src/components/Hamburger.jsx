import "../styles/Hamburger.css";
import { bubble as Menu } from "react-burger-menu";
import { styles } from "../styles/js/Hamburger";

const Hamburger = () => {
  return (
    <Menu noOverlay width={"100%"} styles={styles}>
      <div className="hamburger-container"></div>
    </Menu>
  );
};

export default Hamburger;
