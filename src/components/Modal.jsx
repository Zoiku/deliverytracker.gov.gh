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
  slideDirection,
  customStyles,
}) => {
  return (
    <Modal className="modal-component-container" onClose={onClose} open={open}>
      <Slide in={open} direction={slideDirection}>
        <Box sx={{ ...styles, ...customStyles }}>
          {heading && <div className="modal-heading">{heading}</div>}
          {customHeading && { customHeading }}
          <div className="modal-content">{children}</div>
        </Box>
      </Slide>
    </Modal>
  );
};

export default ModalComponent;
