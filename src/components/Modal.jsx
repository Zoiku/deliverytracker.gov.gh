import "../styles/Modal.css";
import { Box, Modal } from "@mui/material";

const ModalComponent = ({
  open,
  onClose,
  children,
  styles,
  heading,
  customHeading,
}) => {
  return (
    <Modal className="modal-component-container" onClose={onClose} open={open}>
      <Box sx={styles}>
        {heading && <div className="modal-heading">{heading}</div>}
        {customHeading && { customHeading }}
        <div className="modal-content">{children}</div>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
