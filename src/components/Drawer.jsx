import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Box, Stack } from "@mui/material";
import "../styles/Drawer.css";
import { Puller } from "./Misc";

const DrawerComponent = ({ open, onOpen, onClose, children, title }) => {
  return (
    <SwipeableDrawer
      className=" mobile-only"
      keepMounted
      anchor="bottom"
      open={open}
      onOpen={onOpen}
      onClose={onClose}
      disableScrollLock
    >
      <Box className="drawer-component">
        <div className="drawer-title">
          <Stack>
            <Puller />
            {title}
          </Stack>
        </div>
        <div className="drawer-body">{children}</div>
      </Box>
    </SwipeableDrawer>
  );
};

export default DrawerComponent;
