import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";
import CenteredContainer from "../components/CenteredContainer";

const Layout = () => {
  return (
    <Stack spacing={8}>
      <CenteredContainer>
        <Outlet />
      </CenteredContainer>

      <CenteredContainer backgroundColor="#efefef">
        <Stack paddingY={5} spacing={2}>
          <h1 style={{ color: "var(--third-text-color)" }}>
            Delivering Promises
          </h1>
        </Stack>
      </CenteredContainer>
    </Stack>
  );
};

export default Layout;
