import "../styles/Nav.css";
import { Stack } from "@mui/material";
import NavWebLogo from "../assets/gov-logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { NavLinksList } from "../lists/Nav";
import Search from "../components/Search";

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
        <Stack
          className="nav-web"
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={3}
            className="nav-web-logo-container"
          >
            <div className="nav-web-logo">
              <img
                onClick={navigateTo("/")}
                src={NavWebLogo}
                alt="Ghana Beyond Aid Logo"
              />
            </div>
            <div className="nav-web-logo-text">Promises Delivery Tracker</div>
          </Stack>
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
