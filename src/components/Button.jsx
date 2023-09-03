import { styled } from "@mui/material";
import { LoadingButton } from "@mui/lab";

const ButtonComponent = (props) => {
  const Button = styled(LoadingButton)({
    textTransform: "capitalize",
    fontSize: "small",
    border: 0,
    fontWeight: 600,
    background: "rgba(211, 47, 47, 0.1)",
    fontFamily: [].join(","),
    "&:hover": {
      border: 0,
      background: "rgba(211, 47, 47, 0.2)",
    },
  });

  return <Button disableElevation {...props} />;
};

export default ButtonComponent;
