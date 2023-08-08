import "../styles/Nav.css";
import { Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import { NavLinksList } from "../lists/Nav";
import Search from "./Search";
import Hamburger from "./Hamburger";
import CenteredContainer from "./CenteredContainer";

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
  return (
    <div className="nav-component">
      <nav className="nav-web-container">
        <CenteredContainer>
          <Stack
            component="div"
            className="nav-web"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack direction="row" spacing={3}>
              <Stack direction="row" className="nav-web-logo-container">
                <div className="nav-web-logo-text">
                  <span className="nav-web-logo-text-key">Promise</span> Tracker
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
          justifyContent="flex-end"
          alignItems="center"
          className="nav-mobile"
          paddingX={2}
        >
          <Hamburger />
        </Stack>
      </nav>
    </div>
  );
};

export default Nav;
