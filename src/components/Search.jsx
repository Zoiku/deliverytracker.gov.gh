import "../styles/Search.css";
import { useState } from "react";
import { IconButton, InputBase, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Modal from "./Modal";
import { styles } from "../styles/js/Modal";

const Search = ({ placeholder, yesModal }) => {
  const [openModal, setOpenModal] = useState(false);
  const toggleOpenModal = (open) => () => {
    setOpenModal(open);
  };

  return (
    <>
      <Modal
        heading="Search"
        open={openModal}
        onClose={toggleOpenModal(false)}
        styles={styles}
      ></Modal>

      <Stack
        component="form"
        direction="row"
        alignItems="center"
        padding={"0px 5px"}
        borderRadius={1}
        sx={{ background: "#efefef" }}
      >
        <IconButton disabled>
          <SearchIcon className="search-icon" fontSize="inherit" />
        </IconButton>
        <InputBase
          name="search"
          autoComplete="none"
          sx={{ ml: 1, flex: 1 }}
          placeholder={placeholder}
          onMouseDown={yesModal ? toggleOpenModal(true) : undefined}
          inputProps={{
            style: {
              fontWeight: "600",
              fontSize: "11px",
            },
          }}
        ></InputBase>
      </Stack>
    </>
  );
};

export default Search;
