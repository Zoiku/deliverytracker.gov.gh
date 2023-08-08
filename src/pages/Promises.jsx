import "../styles/Promises.css";
import CenteredContainer from "../components/CenteredContainer";
import { Avatar, Box, Stack } from "@mui/material";
import Menu from "../components/Menu";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import SortRoundedIcon from "@mui/icons-material/SortRounded";
import MenuItem from "@mui/material/MenuItem";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import client from "../assets/mp/image.jpg";

const COLORS = {
  1: "rgb(99, 189, 99)",
  2: "orange",
  3: "red",
};

const PromiseItem = ({ title, date, status }) => (
  <Stack spacing={2} className="promise-item-container">
    <Stack direction="row" alignItems="center" spacing={2}>
      <Avatar sx={{ width: 80, height: 80 }} alt="S" src={client} />
      <div className="promise-item-name">Annoh-Dompreh</div>
    </Stack>
    <div
      style={{ borderColor: COLORS[status] }}
      className="promise-item-status-indicator"
    ></div>
    <div className="promise-item-title">{title}</div>
    <div className="promise-item-more">
      Biden continues narrower approach on student debt relief as broader plan
      is retooled | {date}
    </div>
  </Stack>
);

const Promises = () => {
  return (
    <main className="promises-page">
      <CenteredContainer marginated>
        <Box marginTop={10}>
          <Stack
            direction="row"
            alignItems="flex-end"
            justifyContent="space-between"
          >
            <Stack sx={{ textTransform: "uppercase", fontWeight: 500 }}>
              <div>Campaign promises made by Hon. Frank Annoh-Dompreh</div>
            </Stack>

            <Stack direction="row" spacing={1}>
              <Menu type="icon" icon={<InfoOutlinedIcon />}>
                <Stack spacing={1} className="promise-colors-help-container">
                  <div className="promise-colors-help-title">
                    How to intepret status from colors
                  </div>
                </Stack>
              </Menu>

              <Menu label="Filter" icon={<FilterListRoundedIcon />}>
                <MenuItem>Status</MenuItem>
                <MenuItem>Category</MenuItem>
              </Menu>
              <Menu label="Sort" icon={<SortRoundedIcon />}>
                <MenuItem>Most Recent</MenuItem>
                <MenuItem>Promise Deadline</MenuItem>
              </Menu>
            </Stack>
          </Stack>

          <Stack direction="row" marginTop={8} className="promise-items">
            <PromiseItem
              status={2}
              date="July 18, 2023"
              title="Double number of immigration judges and staff"
            />
            <PromiseItem
              status={2}
              date="July 28, 2023"
              title="Use a national commission to address policing issues"
            />
            <PromiseItem
              status={1}
              date="September 28, 2024"
              title="Eliminate mandatory minimums for criminals"
            />
            <PromiseItem
              status={3}
              date="July 28, 2023"
              title="Use a national commission to address policing issues"
            />
            <PromiseItem
              status={1}
              date="September 28, 2024"
              title="Eliminate mandatory minimums for criminals"
            />
            <PromiseItem
              status={3}
              date="July 18, 2023"
              title="Double number of immigration judges and staff"
            />
          </Stack>
        </Box>
      </CenteredContainer>
    </main>
  );
};

export default Promises;
