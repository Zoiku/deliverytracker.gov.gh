import Menu from "@mui/material/Menu";
import { useState } from "react";
import { MenuItem } from "@mui/material";
import "../styles/Menu.css";

const MenuComponent = ({ menuItems, defaultValue }) => {
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
      <div onClick={handleClick}>{defaultValue}</div>

      {menuItems && menuItems.length > 0 && (
        <Menu
          sx={{ marginTop: 1 }}
          disableScrollLock
          elevation={0.2}
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {menuItems.map((menu, index) => (
            <MenuItem onClick={handleClose} key={index}>
              {menu}
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  );
};

export default MenuComponent;
