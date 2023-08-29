import { bubble as Menu } from "react-burger-menu";
import "../styles/Hamburger.css";
import { styles } from "../styles/js/Hamburger";

const Hamburger = () => {
  return (
    <Menu noOverlay width={"100%"} styles={styles}>
      <div className="hamburger-container">
        <div></div>
        <div></div>
      </div>
    </Menu>
  );
};

export default Hamburger;
