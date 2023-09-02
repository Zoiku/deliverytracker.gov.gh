import "../styles/Hamburger.css";
import { slide as Menu } from "react-burger-menu";
import { styles } from "../styles/js/Hamburger";
import CenteredContainer from "./CenteredContainer";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PlusSquare } from "./Misc";
import { useState } from "react";

const Hamburger = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = (open) => () => {
    setOpenMenu(open);
  };
  const navigate = useNavigate();
  const navigateTo = (path) => () => {
    setOpenMenu(false);
    navigate(path);
  };

  return (
    <Menu
      onOpen={toggleMenu(true)}
      onClose={toggleMenu(false)}
      isOpen={openMenu}
      width={"100%"}
      styles={styles}
      noOverlay
    >
      <div className="hamburger-container">
        <CenteredContainer>
          <div className="hamburger-nav">
            <div>
              <div className="nav-mobile-logo-text">
                <span className="nav-web-logo-text-key">Promise</span> Tracker
              </div>
            </div>
          </div>
          <Stack spacing={2} textAlign="left" className="hamburger-content">
            <Stack
              direction="row"
              spacing={2}
              onClick={navigateTo("/")}
              className="hamburger-item"
            >
              <PlusSquare />
              <div className="hamburger-item-text">Home</div>
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              onClick={navigateTo("/promises")}
              className="hamburger-item"
            >
              <PlusSquare />
              <div className="hamburger-item-text">Promises</div>
            </Stack>
          </Stack>
        </CenteredContainer>
        <div className="hamburger-shade">menu</div>
      </div>
    </Menu>
  );
};

export default Hamburger;
