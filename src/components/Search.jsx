import "../styles/Search.css";
import { useState } from "react";
import { Collapse, IconButton, InputBase, Stack } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Modal from "./Modal";
import Slide from "@mui/material/Slide";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const Search = ({ skeleton, main, placeholder }) => {
  const [openModal, setOpenModal] = useState(false);
  const toggleOpenModal = (open) => () => setOpenModal(open);
  const [searchInput, setSearchInput] = useState(null);
  const onChangeSearchInput = (event) => setSearchInput(event.target.value);

  return (
    <>
      {skeleton && (
        <>
          <Modal
            open={openModal}
            onClose={toggleOpenModal(false)}
            slideDirection="down"
            customStyle={{ padding: "30px 200px" }}
            element={<Search main placeholder="Search" />}
          />
          <Stack
            onClick={toggleOpenModal(true)}
            component="div"
            direction="row"
            alignItems="center"
            padding="12px"
            borderRadius={1}
            sx={{ background: "#efefef", cursor: "pointer" }}
          >
            <Stack
              alignItems="center"
              direction="row"
              width={200}
              sx={{ ml: 1, flex: 1, color: "#888" }}
            >
              <small>Search</small>
            </Stack>
          </Stack>
        </>
      )}

      {main && (
        <>
          <Stack
            component="form"
            direction="row"
            alignItems="center"
            padding={1}
            borderRadius={1}
            sx={{ background: "#fff", overflow: "clip" }}
          >
            <IconButton>
              <SearchRoundedIcon />
            </IconButton>
            <InputBase
              autoFocus
              type="text"
              autoComplete="off"
              name="search"
              placeholder={placeholder}
              sx={{ ml: 2, flex: 1 }}
              onChange={onChangeSearchInput}
            />
            <Slide
              direction="up"
              in={searchInput ? true : false}
              mountOnEnter
              unmountOnExit
            >
              <IconButton>
                <CloseRoundedIcon />
              </IconButton>
            </Slide>
          </Stack>

          <Collapse in={searchInput ? true : false}>
            <Stack
              sx={{
                background: "#fff",
                marginTop: 1,
                padding: 1,
                borderRadius: 1,
                height: 300,
              }}
            ></Stack>
          </Collapse>
        </>
      )}
    </>
  );
};

export default Search;
