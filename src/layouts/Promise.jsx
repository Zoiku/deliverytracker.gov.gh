import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";
import CenteredContainer from "../components/CenteredContainer";
import "../styles/Promise.layout.css";

const Layout = () => {
  return (
    <Stack spacing={8}>
      <CenteredContainer>
        <Outlet />
      </CenteredContainer>

      <CenteredContainer backgroundColor="#f3f5f8">
        <Stack className="promise-footer-section" paddingY={5} spacing={2}>
          <h1 className="promise-footer-section-title">
            Tracking Hon. Frank Annoh-Dompreh
          </h1>
        </Stack>
      </CenteredContainer>
    </Stack>
  );
};

export default Layout;
