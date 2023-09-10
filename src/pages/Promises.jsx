import "../styles/Promises.css";
import client from "../assets/mp/image.jpg";
import CenteredContainer from "../components/CenteredContainer";
import { Avatar, Box, Chip, Collapse, Stack } from "@mui/material";
import { PromiseList } from "../lists/Promises";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import { CATEGORY, STATUS } from "../lists/Filters";
import {
  filteringPromises,
  sortHighPriority,
  sortMostRecent,
  sortOldest,
  sortPromisedDeadline,
} from "../functions";
import nodata from "../assets/bgs/no data.svg";
import TreeView from "../components/TreeView";
import Button from "../components/Button";
import Drawer from "../components/Drawer";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { ArrowDropDownRounded } from "@mui/icons-material";

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

const PromiseItemList = ({ status, title, overview, id }) => {
  const navigate = useNavigate();
  const navigateTo = () => navigate(`/promise?id=${id}`);
  return (
    <div className="promise-item-list-item">
      <div className="promise-item-list-item-inner">
        <div className="promise-item-list-item-title">
          <div
            onClick={navigateTo}
            className="promise-item-list-item-title-text"
          >
            {title}
          </div>
        </div>
        <div className="promise-item-list-item-body">{overview}</div>
      </div>
    </div>
  );
};

const PromiseQuickFilterGroup = ({ label, children }) => (
  <div className="promise-quick-filter-group">
    <TreeView label={label}>{children}</TreeView>
  </div>
);

const Promises = () => {
  const [promises, setPromises] = useState(PromiseList);
  const sortMenuOptions = [
    { value: "Most Recent", action: sortMostRecent },
    { value: "Oldest", action: sortOldest },
    { value: "Priority", action: sortHighPriority },
    { value: "Promise Deadline", action: sortPromisedDeadline },
  ];
  const [selectedSortMenuIndex, setSelectedSortMenuIndex] = useState(0);
  const handleSelectSortMenuItemClick = (index) => () => {
    setSelectedSortMenuIndex(index);
  };
  const [filterMenuAnchorEl, setFilterMenuAnchorEl] = useState(null);
  const openFilterMenu = Boolean(filterMenuAnchorEl);
  const handleFilterMenuOpen = (event) => {
    setFilterMenuAnchorEl(event.currentTarget);
  };
  const handleFilterMenuClose = () => {
    setFilterMenuAnchorEl(null);
  };
  const filterGroupsOptions = {
    category: Object.values(CATEGORY),
    status: Object.values(STATUS),
  };
  const [selectedFilterGroupsIndex, setSelectedFilterGroupsIndex] = useState({
    category: [],
    status: null,
  });
  const handleSelectFilterItemClick = (filterType, index) => () => {
    if (filterType === "category") {
      if (!selectedFilterGroupsIndex["category"].includes(index + 1)) {
        setSelectedFilterGroupsIndex((selectedFilters) => {
          return {
            ...selectedFilters,
            [filterType]: [...selectedFilters.category, index + 1],
          };
        });
      }
    } else {
      setSelectedFilterGroupsIndex((selectedFilters) => {
        return {
          ...selectedFilters,
          [filterType]: index + 1,
        };
      });
    }
  };
  const handleRemoveFilterItem = (filterType, index) => () => {
    if (filterType === "category") {
      setSelectedFilterGroupsIndex((selectedFilters) => {
        return {
          ...selectedFilters,
          [filterType]: [...selectedFilters.category].filter(
            (item) => item !== index + 1
          ),
        };
      });
    } else {
      setSelectedFilterGroupsIndex((selectedFilters) => {
        return {
          ...selectedFilters,
          [filterType]: null,
        };
      });
    }
  };
  const handleResetFilterItems = (filterType) => () => {
    if (filterType === "category") {
      setSelectedFilterGroupsIndex((selectedFilters) => {
        return {
          ...selectedFilters,
          category: [],
        };
      });
    } else {
      setSelectedFilterGroupsIndex((selectedFilters) => {
        return {
          ...selectedFilters,
          status: null,
        };
      });
    }
  };
  const [view, setView] = useState("module");
  const handleChangeView = (_, nextView) => {
    nextView && setView(nextView);
  };

  useEffect(() => {
    const filteredPromises = filteringPromises(
      PromiseList,
      selectedFilterGroupsIndex
    );
    setPromises(filteredPromises);
  }, [selectedFilterGroupsIndex]);

  return (
    <main className="promises-page">
      <CenteredContainer>
        <Box paddingBottom={10}>
          <Stack spacing={5}>
            <div className="promises-quick-actions">
              <div className="promise-quick-action">
                <Chip
                  onClick={handleFilterMenuOpen}
                  variant={"outlined"}
                  className="promise-quick-action-chip"
                  label={
                    <div className="promise-quick-action-chip-label">
                      <div>Manage Promises</div>
                      <div className="promise-quick-action-chip-label-icon">
                        <ArrowDropDownRounded fontSize="inherit" />
                      </div>
                    </div>
                  }
                />

                <Drawer
                  title="Manage Promises"
                  open={openFilterMenu}
                  onOpen={() => {}}
                  onClose={handleFilterMenuClose}
                >
                  <Stack>
                    <Stack spacing={1}>
                      <PromiseQuickFilterGroup label="Filter Promises by Category">
                        {filterGroupsOptions["category"].map(
                          (category, index) => (
                            <Chip
                              className={
                                selectedFilterGroupsIndex["category"].includes(
                                  index + 1
                                )
                                  ? "promise-quick-filter-item promise-quick-filter-item-selected"
                                  : "promise-quick-filter-item"
                              }
                              variant={
                                selectedFilterGroupsIndex["category"].includes(
                                  index + 1
                                )
                                  ? "filled"
                                  : "outlined"
                              }
                              size="small"
                              onClick={handleSelectFilterItemClick(
                                "category",
                                index
                              )}
                              onDelete={
                                selectedFilterGroupsIndex["category"].includes(
                                  index + 1
                                )
                                  ? handleRemoveFilterItem("category", index)
                                  : undefined
                              }
                              key={index}
                              label={category}
                            />
                          )
                        )}
                        <Collapse
                          in={selectedFilterGroupsIndex.category.length > 1}
                        >
                          <Box marginTop={1}>
                            <Button
                              size="small"
                              variant="outlined"
                              color="error"
                              onClick={handleResetFilterItems("category")}
                            >
                              Reset
                            </Button>
                          </Box>
                        </Collapse>
                      </PromiseQuickFilterGroup>
                      <PromiseQuickFilterGroup label="Filter Promises by Status">
                        {filterGroupsOptions["status"].map((status, index) => (
                          <Chip
                            className={
                              index === selectedFilterGroupsIndex["status"] - 1
                                ? "promise-quick-filter-item promise-quick-filter-item-selected"
                                : "promise-quick-filter-item"
                            }
                            size="small"
                            onClick={handleSelectFilterItemClick(
                              "status",
                              index
                            )}
                            variant={
                              index === selectedFilterGroupsIndex["status"] - 1
                                ? "filled"
                                : "outlined"
                            }
                            onDelete={
                              index === selectedFilterGroupsIndex["status"] - 1
                                ? handleRemoveFilterItem("status")
                                : undefined
                            }
                            key={index}
                            label={status}
                          />
                        ))}
                      </PromiseQuickFilterGroup>
                      <PromiseQuickFilterGroup label="Sort Promises by">
                        {sortMenuOptions.map((sort, index) => (
                          <Chip
                            className={
                              index === selectedSortMenuIndex
                                ? "promise-quick-filter-item promise-quick-filter-item-selected"
                                : "promise-quick-filter-item"
                            }
                            variant={
                              index === selectedSortMenuIndex
                                ? "filled"
                                : "outlined"
                            }
                            onClick={handleSelectSortMenuItemClick(index)}
                            key={index}
                            size="small"
                            label={sort.value}
                          />
                        ))}
                      </PromiseQuickFilterGroup>
                    </Stack>
                  </Stack>
                </Drawer>

                <Menu
                  open={openFilterMenu}
                  anchorEl={filterMenuAnchorEl}
                  onClose={handleFilterMenuClose}
                >
                  <Stack className="promise-quick-action-popover">
                    <Stack
                      spacing={1}
                      className="promise-quick-action-popover-body"
                    >
                      <PromiseQuickFilterGroup label="Filter Promises by Category">
                        {filterGroupsOptions["category"].map(
                          (category, index) => (
                            <Chip
                              className={
                                selectedFilterGroupsIndex["category"].includes(
                                  index + 1
                                )
                                  ? "promise-quick-filter-item promise-quick-filter-item-selected"
                                  : "promise-quick-filter-item"
                              }
                              variant={
                                selectedFilterGroupsIndex["category"].includes(
                                  index + 1
                                )
                                  ? "filled"
                                  : "outlined"
                              }
                              size="small"
                              onClick={handleSelectFilterItemClick(
                                "category",
                                index
                              )}
                              onDelete={
                                selectedFilterGroupsIndex["category"].includes(
                                  index + 1
                                )
                                  ? handleRemoveFilterItem("category", index)
                                  : undefined
                              }
                              key={index}
                              label={category}
                            />
                          )
                        )}
                        <Collapse
                          in={selectedFilterGroupsIndex.category.length > 1}
                        >
                          <Box marginTop={1}>
                            <Button
                              size="small"
                              variant="outlined"
                              color="error"
                              onClick={handleResetFilterItems("category")}
                            >
                              Reset
                            </Button>
                          </Box>
                        </Collapse>
                      </PromiseQuickFilterGroup>
                      <PromiseQuickFilterGroup label="Filter Promises by Status">
                        {filterGroupsOptions["status"].map((status, index) => (
                          <Chip
                            className={
                              index === selectedFilterGroupsIndex["status"] - 1
                                ? "promise-quick-filter-item promise-quick-filter-item-selected"
                                : "promise-quick-filter-item"
                            }
                            size="small"
                            onClick={handleSelectFilterItemClick(
                              "status",
                              index
                            )}
                            variant={
                              index === selectedFilterGroupsIndex["status"] - 1
                                ? "filled"
                                : "outlined"
                            }
                            onDelete={
                              index === selectedFilterGroupsIndex["status"] - 1
                                ? handleRemoveFilterItem("status")
                                : undefined
                            }
                            key={index}
                            label={status}
                          />
                        ))}
                      </PromiseQuickFilterGroup>
                      <PromiseQuickFilterGroup label="Sort Promises by">
                        {sortMenuOptions.map((sort, index) => (
                          <Chip
                            className={
                              index === selectedSortMenuIndex
                                ? "promise-quick-filter-item promise-quick-filter-item-selected"
                                : "promise-quick-filter-item"
                            }
                            variant={
                              index === selectedSortMenuIndex
                                ? "filled"
                                : "outlined"
                            }
                            onClick={handleSelectSortMenuItemClick(index)}
                            key={index}
                            size="small"
                            label={sort.value}
                          />
                        ))}
                      </PromiseQuickFilterGroup>
                    </Stack>
                  </Stack>
                </Menu>
              </div>
              <ToggleButtonGroup
                exclusive
                value={view}
                onChange={handleChangeView}
              >
                <ToggleButton size="small" value="module" aria-label="module">
                  <ViewModuleIcon fontSize="10px" />
                </ToggleButton>
                <ToggleButton size="small" value="list" aria-label="list">
                  <ViewListIcon fontSize="10px" />
                </ToggleButton>
              </ToggleButtonGroup>
            </div>

            {promises ? (
              promises.length > 0 ? (
                <div className="promise-items-modules-container">
                  {view === "module" && (
                    <div className="promise-items-modules">
                      {promises
                        .sort((a, b) =>
                          sortMenuOptions[selectedSortMenuIndex].action(a, b)
                        )
                        .map((promise, index) => (
                          <PromiseItem
                            key={index}
                            status={promise.status}
                            date={promise.updatedOn}
                            title={promise.title}
                            overview={promise.overview}
                            id={promise.id}
                          />
                        ))}
                    </div>
                  )}

                  {view === "list" && (
                    <div className="promise-items-list">
                      {promises
                        .sort((a, b) =>
                          sortMenuOptions[selectedSortMenuIndex].action(a, b)
                        )
                        .map((promise, index) => (
                          <PromiseItemList
                            key={index}
                            status={promise.status}
                            title={promise.title}
                            overview={promise.overview}
                            id={promise.id}
                          />
                        ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="promise-items-modules-container-no-results">
                  <div className="promise-items-modules-container-no-results-inner">
                    <div className="promise-items-modules-container-no-results-image">
                      <img src={nodata} alt="" />
                    </div>
                  </div>
                </div>
              )
            ) : (
              <div>Could not fetch Promises</div>
            )}
          </Stack>
        </Box>
      </CenteredContainer>
    </main>
  );
};

export default Promises;
