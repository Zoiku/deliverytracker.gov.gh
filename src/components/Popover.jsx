import Popover from "@mui/material/Popover";
import "../styles/Popover.css";

const PopoverComponent = (props) => {
  const id = props.open ? "simple-popover" : undefined;

  return (
    <Popover
      {...props}
      className="popover-component"
      id={id}
      elevation={0}
      disableScrollLock
      sx={{ marginTop: 1 }}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    ></Popover>
  );
};

export default PopoverComponent;
