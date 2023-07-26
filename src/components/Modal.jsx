import "../styles/Modal.css";
import { Box, Modal } from "@mui/material";
import Slide from "@mui/material/Slide/Slide";
import { styles } from "../styles/js/Modal";

const ModalComponent = ({
  open,
  onClose,
  children,
  heading,
  customHeading,
  customStyle = {},
  slideDirection,
  element,
}) => {
  return (
    <Modal
      sx={{ ...customStyle }}
      className="modal-component-container"
      onClose={onClose}
      open={open}
    >
      <Slide in={open} direction={slideDirection}>
        <Box sx={{ ...styles }}>
          {heading && <div className="modal-heading">{heading}</div>}
          {customHeading && { customHeading }}
          {children && <div className="modal-content">{children}</div>}
          {element && element}
        </Box>
      </Slide>
    </Modal>
  );
};

export default ModalComponent;
