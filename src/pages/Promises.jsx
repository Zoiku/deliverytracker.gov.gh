import "../styles/Promises.css";
import CenteredContainer from "../components/CenteredContainer";
import { Avatar, Box, Stack } from "@mui/material";
import client from "../assets/mp/image.jpg";
import { PromiseList } from "../lists/Promises";
import { useNavigate } from "react-router-dom";

export const COLORS = {
  1: "var(--promise-kept)",
  2: "var(--promise-compromise",
  3: "var(--promise-broken)",
  4: "var(--promise-stalled)",
  5: "var(--promise-progress)",
};

export const STATUS = {
  1: "Delivered Promise",
  2: "Compromised Delivery",
  3: "Broken Promise",
  4: "Promise Stalled",
  5: "In Progress",
};

const PromiseItem = ({ title, date, status, quote, id }) => {
  const navigate = useNavigate();

  return (
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
      <div
        onClick={() => navigate(`/promise?id=${id}`)}
        className="promise-item-title"
      >
        {title}
      </div>
      <div className="promise-item-more">{quote}</div>
    </Stack>
  );
};

const Promises = () => {
  return (
    <main className="promises-page">
      <CenteredContainer>
        <Box>
          <Stack spacing={4}>
            <Stack direction="row" className="promise-items">
              {PromiseList.map((promise) => (
                <PromiseItem
                  status={promise.status}
                  date={promise.updatedOn}
                  title={promise.title}
                  quote={promise.quote}
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
