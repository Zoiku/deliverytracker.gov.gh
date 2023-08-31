import "../styles/Promises.css";
import client from "../assets/mp/image.jpg";
import CenteredContainer from "../components/CenteredContainer";
import { Avatar, Box, Stack } from "@mui/material";
import { PromiseList } from "../lists/Promises";
import { useNavigate } from "react-router-dom";

export const COLORS = {
  1: "var(--promise-status-unstarted)",
  2: "var(--promise-status-progress)",
  3: "var(--promise-status-stalled)",
  4: "var(--promise-status-delivered)",
  5: "var(--promise-status-compromised)",
  6: "var(--promise-status-broken)",
};

const PromiseItem = ({ title, status, overview, id }) => {
  const navigate = useNavigate();

  return (
    <Stack spacing={2} className="promise-item-container">
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
  return (
    <main className="promises-page">
      <CenteredContainer>
        <Box paddingBottom={10}>
          <Stack spacing={5}>
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
