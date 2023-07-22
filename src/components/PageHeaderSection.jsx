import { Stack } from "@mui/material";
import "../styles/PageHeaderSection.css";

const PageHeaderSection = ({ title, titleHelper }) => {
  return (
    <Stack spacing={1} className="page-header-section-component">
      <div className="page-header-section-title">{title}</div>
      <div className="page-header-section-title-helper">{titleHelper}</div>
    </Stack>
  );
};

export default PageHeaderSection;
