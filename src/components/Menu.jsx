import Menu from "@mui/material/Menu";
import { useState } from "react";
import { Button } from "@mui/material";

const MenuComponent = ({ children, label, icon }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        startIcon={icon}
        onClick={handleClick}
        variant="text"
        sx={{
          color: "#24252a",
          fontWeight: 500,
          borderColor: "#24252a",
          textTransform: "capitalize",
          border: "1px solid #c5c5c5",
        }}
      >
        <span>{label}</span>
      </Button>

      <Menu
        sx={{ marginTop: 1 }}
        disableScrollLock
        elevation={1}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {children}
      </Menu>
    </>
  );
};

export default MenuComponent;
