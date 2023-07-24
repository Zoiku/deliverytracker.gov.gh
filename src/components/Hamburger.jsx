import { bubble as Menu } from "react-burger-menu";
import "../styles/Hamburger.css";
import { styles } from "../styles/js/Hamburger";
const Hamburger = () => {
  return <Menu noOverlay width={"100%"} styles={styles}></Menu>;
};

export default Hamburger;
