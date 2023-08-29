import "../styles/Nav.css";
import { Stack } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { NavLinksList } from "../lists/Nav";
import Search from "./Search";
import Hamburger from "./Hamburger";
import CenteredContainer from "./CenteredContainer";
import { useEffect, useState } from "react";

const Link = ({ label, to }) => (
  <NavLink className="nav-web-link" to={to}>
    <span style={{ color: "inherit" }}>{label}</span>
  </NavLink>
);

const Links = () => (
  <Stack direction="row" spacing={1} className="nav-web-links">
    {NavLinksList.map((link, index) => (
      <Link key={index} to={link.to} label={link.label} end />
    ))}
  </Stack>
);

const Nav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => setScrollPosition(window.scrollY));
    return window.removeEventListener("scroll", () => setScrollPosition(0));
  }, []);

  return (
    <div className="nav-component">
      <nav
        style={scrollPosition > 50 ? { background: "#fff" } : {}}
        className="nav-web-container"
      >
        <CenteredContainer>
          <Stack
            component="div"
            className="nav-web"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack direction="row" spacing={3}>
              <Stack
                onClick={() => navigate("/")}
                direction="row"
                className="nav-web-logo-container"
              >
                <div className="nav-web-logo-text">
                  <span className="nav-web-logo-text-key">Delivering</span>{" "}
                  Promises
                </div>
              </Stack>

              <Stack direction="row" className="nav-web-links-container">
                <Links />
              </Stack>
            </Stack>

            <Stack component="div">
              <Search skeleton />
            </Stack>
          </Stack>
        </CenteredContainer>
      </nav>

      <nav className="nav-mobile-container">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className="nav-mobile"
          paddingX={2}
        >
          <div onClick={() => navigate("/")}>
            <div className="nav-mobile-logo-text">
              <span className="nav-web-logo-text-key">Promise</span> Tracker
            </div>
          </div>
          <Hamburger />
        </Stack>
      </nav>
    </div>
  );
};

export default Nav;
