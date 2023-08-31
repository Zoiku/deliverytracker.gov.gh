import Menu from "@mui/material/Menu";

const MenuComponent = (props) => {
  return (
    <Menu
      {...props}
      disableScrollLock
      elevation={0}
      id="lock-menu"
      MenuListProps={{
        "aria-labelledby": "lock-button",
        role: "listbox",
      }}
    ></Menu>
  );
};

export default MenuComponent;
