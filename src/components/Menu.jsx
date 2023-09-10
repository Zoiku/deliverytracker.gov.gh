import Menu from "@mui/material/Menu";

const MenuComponent = (props) => {
  return (
    <Menu
      className="desktop-only"
      open={props.open}
      onClose={props.onClose}
      anchorEl={props.anchorEl}
      transformOrigin={{ horizontal: "left", vertical: "top" }}
      anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      {...props}
      disableScrollLock
      id="lock-menu"
      MenuListProps={{
        "aria-labelledby": "lock-button",
        role: "listbox",
      }}
      slotProps={{
        paper: {
          elevation: 0,
          sx: {
            border: "1px solid #d8dbe0",
            width: 500,
            mt: 1,
            padding: "10px",
          },
        },
      }}
    ></Menu>
  );
};

export default MenuComponent;
