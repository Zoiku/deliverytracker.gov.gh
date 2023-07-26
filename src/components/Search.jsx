import "../styles/Search.css";
import { useState } from "react";
import { IconButton, InputBase, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Modal from "./Modal";

const Search = ({ yesModal }) => {
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
            onClose={toggleOpenModal(false)}
            slideDirection="down"
            element={
              <Stack position="relative">
                <Stack
                  sx={{
                    position: "absolute",
                    left: "20px",
                    right: "20px",
                    top: "20px",
                  }}
                >
                  <Search />
                </Stack>
              </Stack>
            }
          />

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

      {/* {!yesModal && (
        <Stack
          onClick={toggleOpenModal(true)}
          component="form"
          direction="row"
          alignItems="center"
          padding={"5px"}
          borderRadius={1}
          sx={{
            background: "#fff",
            cursor: "pointer",
          }}
        >
          <IconButton disabled>
            <SearchIcon />
          </IconButton>
          <InputBase
            placeholder="Search"
            sx={{ ml: 1, flex: 1, color: "gray" }}
          />
        </Stack>
      )} */}
    </>
  );
};

export default Search;
