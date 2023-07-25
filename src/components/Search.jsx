import "../styles/Search.css";
import { useState } from "react";
import { IconButton, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Modal from "./Modal";

const Search = ({ placeholder, yesModal }) => {
  const [openModal, setOpenModal] = useState(false);
  const toggleOpenModal = (open) => () => {
    setOpenModal(open);
  };

  return (
    <>
      {yesModal && (
        <>
          <Modal
            open={openModal}
            heading="Search"
            onClose={toggleOpenModal(false)}
            slideDirection="down"
          ></Modal>

          <Stack
            onClick={toggleOpenModal(true)}
            component="form"
            direction="row"
            alignItems="center"
            padding={"0px 5px"}
            borderRadius={1}
            sx={{ background: "#efefef", cursor: "pointer" }}
          >
            <IconButton disabled>
              <SearchIcon fontSize="small" />
            </IconButton>
            <Stack
              alignItems="center"
              direction="row"
              width={200}
              sx={{ ml: 1, flex: 1, color: "gray" }}
            >
              <small>Search</small>
            </Stack>
          </Stack>
        </>
      )}
    </>
  );
};

export default Search;
