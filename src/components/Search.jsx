import "../styles/Search.css";
import { useState } from "react";
import {
  Collapse,
  IconButton,
  InputBase,
  MenuItem,
  MenuList,
  Stack,
} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Modal from "./Modal";
import Slide from "@mui/material/Slide";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const Search = ({ skeleton, main, simple, placeholder }) => {
  const [openModal, setOpenModal] = useState(false);
  const toggleOpenModal = (open) => () => setOpenModal(open);
  const [searchInput, setSearchInput] = useState(null);
  const onChangeSearchInput = (event) => setSearchInput(event.target.value);

  return (
    <>
      {simple && (
        <Stack
          direction="row"
          alignItems="center"
          borderRadius={1}
          spacing={1}
          sx={{ border: "1px solid #c5c5c5", overflow: "clip", width: 250 }}
        >
          <IconButton>
            <SearchRoundedIcon fontSize="small" />
          </IconButton>
          <InputBase
            autoFocus
            type="text"
            autoComplete="off"
            name="search"
            placeholder={placeholder}
            sx={{ flex: 1 }}
            onChange={onChangeSearchInput}
          />
        </Stack>
      )}

      {skeleton && (
        <>
          <Modal
            open={openModal}
            onClose={toggleOpenModal(false)}
            slideDirection="down"
            customStyle={{ padding: "20px 300px" }}
            element={<Search main placeholder="Search" />}
          />

          <Stack
            onClick={toggleOpenModal(true)}
            component="div"
            direction="row"
            alignItems="center"
            padding="8px 12px"
            borderRadius={1}
            sx={{
              border: "1px solid gray",
              color: "gray",
              width: 250,
              cursor: "pointer",
            }}
          >
            <Stack component="div" alignItems="center" direction="row">
              <small>Search website</small>
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
              <SearchRoundedIcon sx={{ color: "var(--primary-theme)" }} />
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
              direction="left"
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
                borderRadius: 1,
              }}
            >
              <MenuList>
                <MenuItem>
                  <div>
                    <span style={{ color: "#999" }}>Search for</span>{" "}
                    {searchInput}
                  </div>
                </MenuItem>
              </MenuList>
            </Stack>
          </Collapse>
        </>
      )}
    </>
  );
};

export default Search;
