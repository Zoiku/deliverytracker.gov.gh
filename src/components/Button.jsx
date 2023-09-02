import { styled } from "@mui/material";
import { LoadingButton } from "@mui/lab";

const fontFamily = [
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
];

const ButtonComponent = (props) => {
  const Button = styled(LoadingButton)({
    textTransform: "capitalize",
    fontSize: "small",
    fontFamily: [...fontFamily].join(","),
    "&:hover": {},
  });

  return <Button disableElevation {...props} />;
};

export default ButtonComponent;
