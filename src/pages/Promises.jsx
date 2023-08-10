import "../styles/Promises.css";
import CenteredContainer from "../components/CenteredContainer";
import { Avatar, Box, Stack } from "@mui/material";
import client from "../assets/mp/image.jpg";
import { PromisesList } from "../lists/Promises";

export const COLORS = {
  1: "var(--promise-kept)",
  2: "var(--promise-compromise",
  3: "var(--promise-broken)",
  4: "var(--promise-stalled)",
  5: "var(--promise-progress)",
};

export const STATUS = {
  1: "Promise Kept",
  2: "Promise Compromised",
  3: "Promise Broken",
  4: "Promise Stalled",
  5: "In Progress",
};

const PromiseItem = ({ title, date, status, quote }) => (
  <Stack spacing={2} className="promise-item-container">
    <Stack direction="row" alignItems="center" spacing={2}>
      <Avatar
        sx={{ width: 80, height: 80 }}
        alt="Hon. Frank Annoh-Dompreh"
        src={client}
      />
      <div className="promise-item-name">Annoh-Dompreh</div>
    </Stack>
    <div
      style={{ borderColor: COLORS[status] }}
      className="promise-item-status-indicator"
    ></div>
    <div className="promise-item-title">{title}</div>
    <div className="promise-item-more">
      {quote} | {date}
    </div>
  </Stack>
);

const Promises = () => {
  return (
    <main className="promises-page">
      <CenteredContainer marginated>
        <Box marginTop={10}>
          <Stack spacing={5}>
            <Stack>
              <div style={{ fontWeight: 700 }}>
                Campaign Promises made by Hon. Frank Annoh-Dompreh
              </div>
              <div
                style={{ fontWeight: 500, fontSize: "small", color: "gray" }}
              >
                Updated on 23 May 2023
              </div>
            </Stack>
          </Stack>

          <Stack direction="row" marginTop={8} className="promise-items">
            {PromisesList.map((promise) => (
              <PromiseItem
                status={promise.status}
                date={promise.updatedOn}
                title={promise.title}
                quote={promise.quote}
              />
            ))}
          </Stack>
        </Box>
      </CenteredContainer>
    </main>
  );
};

export default Promises;
