import "../styles/Promises.css";
import "../styles/Promises.css";
import CenteredContainer from "../components/CenteredContainer";
import { Box, Stack } from "@mui/material";
import Menu from "../components/Menu";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import SortRoundedIcon from "@mui/icons-material/SortRounded";
import MenuItem from '@mui/material/MenuItem';

const Promises = () => {
  return (
    <main className="promises-page">
      <CenteredContainer marginated>
        <Box marginTop={10}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack sx={{ fontSize: "small", color: "gray" }}>
              <div>Campaign promises made by Hon. Frank Annoh-Dompreh </div>
            </Stack>

            <Stack direction="row" spacing={1}>
              <Menu label="Filter" icon={<FilterListRoundedIcon />}>
                <MenuItem>Something</MenuItem>
              </Menu>
              <Menu label="Sort" icon={<SortRoundedIcon />}></Menu>
            </Stack>
          </Stack>
        </Box>
      </CenteredContainer>
    </main>
  );
};

export default Promises;
