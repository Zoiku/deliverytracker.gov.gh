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
        size="small"
        variant="text"
        sx={{
          color: "gray",
          borderColor: "gray",
          textTransform: "capitalize",
        }}
      >
        <span>{label}</span>
      </Button>

      <Menu
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
