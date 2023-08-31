import "../styles/Promises.css";
import client from "../assets/mp/image.jpg";
import CenteredContainer from "../components/CenteredContainer";
import { Avatar, Box, MenuItem, Stack } from "@mui/material";
import { PromiseList } from "../lists/Promises";
import { useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import { useState } from "react";
import DropDownButton from "@mui/icons-material/KeyboardArrowDownRounded";
import Popover from "../components/Popover";
import Tip from "../components/Tip";

export const COLORS = {
  1: "var(--promise-status-unstarted)",
  2: "var(--promise-status-progress)",
  3: "var(--promise-status-stalled)",
  4: "var(--promise-status-delivered)",
  5: "var(--promise-status-compromised)",
  6: "var(--promise-status-broken)",
};

export const PromiseItem = ({ title, status, overview, id }) => {
  const navigate = useNavigate();
  return (
    <Stack spacing={2} className="promise-item">
      <Stack direction="row" alignItems="center" spacing={2}>
        <Avatar
          sx={{ width: 70, height: 70 }}
          alt="Hon. Frank Annoh-Dompreh"
          src={client}
        />
        <div className="promise-item-name">Annoh-Dompreh</div>
      </Stack>
      <div
        style={{ borderColor: COLORS[status] }}
        className="promise-item-status-indicator"
      ></div>
      <div
        onClick={() => navigate(`/promise?id=${id}`)}
        className="promise-item-title"
      >
        {title}
      </div>
      <div className="promise-item-more">{overview}</div>
    </Stack>
  );
};

const Promises = () => {
  const [selectedSortMenuIndex, setSelectedSortMenuIndex] = useState(0);
  const [sortMenuAnchorEl, setSortMenuAnchorEl] = useState(null);
  const openSortMenu = Boolean(sortMenuAnchorEl);
  const handleSortMenuOpen = (event) => {
    setSortMenuAnchorEl(event.currentTarget);
  };
  const handleSortMenuClose = () => {
    setSortMenuAnchorEl(null);
  };
  const handleSortMenuItemClick = (_, index) => {
    setSelectedSortMenuIndex(index);
    setSortMenuAnchorEl(null);
  };
  const sortMenuOptions = [
    { key: "updatedOn", value: "Most Recent" },
    { key: "dealine", value: "Promise Deadline" },
  ];

  const [filterMenuAnchorEl, setFilterMenuAnchorEl] = useState(null);
  const openFilterMenu = Boolean(filterMenuAnchorEl);
  const handleFilterMenuOpen = (event) => {
    setFilterMenuAnchorEl(event.currentTarget);
  };
  const handleFilterMenuClose = () => {
    setFilterMenuAnchorEl(null);
  };

  const [helpAnchorEl, sethelpAnchorEl] = useState(null);
  const openhelp = Boolean(helpAnchorEl);
  const handlehelpOpen = (event) => {
    sethelpAnchorEl(event.currentTarget);
  };
  const handlehelpClose = () => {
    sethelpAnchorEl(null);
  };

  return (
    <main className="promises-page">
      <CenteredContainer>
        <Box paddingBottom={10}>
          <Stack spacing={5}>
            <div className="promises-quick-actions">
              <div className="promise-quick-action">
                <div className="promise-quick-action-label">Filter by:</div>
                <div
                  onClick={handleFilterMenuOpen}
                  className="promise-quick-action-value"
                >
                  <div>Show Filters</div>
                  <DropDownButton fontSize="inherit" />
                </div>
                <Popover
                  open={openFilterMenu}
                  anchorEl={filterMenuAnchorEl}
                  onClose={handleFilterMenuClose}
                >
                  <Stack spacing={2} className="promise-quick-action-popover">
                    <Tip message="Under construction" />
                  </Stack>
                </Popover>
              </div>

              <div className="promise-quick-action">
                <div className="promise-quick-action-label">Sort by:</div>
                <Stack
                  direction="row"
                  alignItems="center"
                  className="promise-quick-action-value"
                  onClick={handleSortMenuOpen}
                >
                  <div>{sortMenuOptions[selectedSortMenuIndex].value}</div>
                  <DropDownButton fontSize="inherit" />
                </Stack>

                <Menu
                  anchorEl={sortMenuAnchorEl}
                  open={openSortMenu}
                  onClose={handleSortMenuClose}
                >
                  <Box className="promise-quick-action-menu">
                    {sortMenuOptions.map((option, index) => (
                      <MenuItem
                        key={index}
                        selected={index === selectedSortMenuIndex}
                        onClick={(event) =>
                          handleSortMenuItemClick(event, index)
                        }
                        sx={{
                          fontSize: "15px",
                        }}
                      >
                        {option.value}
                      </MenuItem>
                    ))}
                  </Box>
                </Menu>
              </div>

              <div className="promise-quick-action">
                <div className="promise-quick-action-label">Colors:</div>
                <div
                  onClick={handlehelpOpen}
                  className="promise-quick-action-value"
                >
                  <div>Guide</div>
                  <DropDownButton fontSize="inherit" />
                </div>
                <Popover
                  open={openhelp}
                  anchorEl={helpAnchorEl}
                  onClose={handlehelpClose}
                >
                  <Box className="promise-quick-action-popover">
                    <Tip message="Under construction" />
                  </Box>
                </Popover>
              </div>
            </div>

            <Stack direction="row" className="promise-items">
              {PromiseList.map((promise, index) => (
                <PromiseItem
                  key={index}
                  status={promise.status}
                  date={promise.updatedOn}
                  title={promise.title}
                  overview={promise.overview}
                  id={promise.id}
                />
              ))}
            </Stack>
          </Stack>
        </Box>
      </CenteredContainer>
    </main>
  );
};

export default Promises;
