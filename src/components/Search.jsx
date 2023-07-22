import { IconButton, InputBase, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ placeholder }) => {
  return (
    <Stack
      component="form"
      direction="row"
      alignItems="center"
      padding={"2px 5px"}
      borderRadius={1}
      sx={{ background: "#efefef" }}
    >
      <InputBase
        name="search"
        sx={{ ml: 1, flex: 1, fontSize: "small" }}
        placeholder={placeholder}
      />
      <IconButton>
        <SearchIcon fontSize="small" />
      </IconButton>
    </Stack>
  );
};

export default Search;
