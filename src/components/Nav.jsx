import "../styles/Nav.css";
import { Stack } from "@mui/material";
// import NavWebLogo from "../assets/Nav/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const navigateTo = (path) => () => navigate(path);

  return (
    <div className="nav-component">
      <nav className="nav-web-container">
        <CenteredContainer>
          <Stack
            className="nav-web"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack
              direction="row"
              alignItems="center"
              className="nav-web-logo-container"
            ></Stack>

            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              className="nav-web-links-container"
            >
              <Links />
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
          <Hamburger />
        </Stack>
      </nav>
    </div>
  );
};

export default Nav;
