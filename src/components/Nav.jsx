import { Stack } from "@mui/material";
import "../styles/Nav.css";
import NavWebLogo from "../assets/gov-logo.png";
import { NavLink } from "react-router-dom";
import { NavLinksList } from "../lists/Nav";
import Search from "../components/Search";

const Link = ({ label, to }) => (
  <NavLink className="nav-web-link" to={to}>
    <span style={{ color: "inherit" }}>{label}</span>
  </NavLink>
);

const Links = () => (
  <Stack direction="row" spacing={2} className="nav-web-links">
    {NavLinksList.map((link, index) => (
      <Link key={index} to={link.to} label={link.label} end />
    ))}
  </Stack>
);

const Nav = () => {
  return (
    <div className="nav-component">
      <nav className="nav-web-container">
        <Stack
          className="nav-web"
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={5}
        >
          <div className="nav-web-logo-container">
            <div className="nav-web-logo">
              <img src={NavWebLogo} alt="Ghana Beyond Aid Logo" />
            </div>
          </div>
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            className="nav-web-links-container"
          >
            <Links />
            <Search placeholder="SEARCH" />
          </Stack>
        </Stack>
      </nav>
    </div>
  );
};

export default Nav;
