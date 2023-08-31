import { Stack } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "../styles/Tip.css";

const Tip = ({ message }) => {
  return (
    <Stack
      direction="row"
      spacing={2}
      className="tip-component"
    >
      <InfoOutlinedIcon />
      <div>{message}</div>
    </Stack>
  );
};

export default Tip;
