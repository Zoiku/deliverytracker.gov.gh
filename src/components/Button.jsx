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
    color: "gray",
    borderColor: "gray",
    fontFamily: [...fontFamily].join(","),
    "&:hover": {
      color: "gray",
      borderColor: "gray",
    },
  });

  return <Button {...props} />;
};

export default ButtonComponent;
