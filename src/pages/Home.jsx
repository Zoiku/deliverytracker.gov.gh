import "../styles/Home.css";
import CenteredContainer from "../components/CenteredContainer";
import { Box, Stack } from "@mui/material";
import Chart from "../charts/Chart";
import { PromiseList } from "../lists/Promises";
import { COLORS, STATUS } from "./Promises";
import { useNavigate } from "react-router-dom";

const HomeSection = ({ title, children }) => (
  <CenteredContainer>
    <Stack spacing={3}>
      <div style={{ textAlign: "center", fontWeight: 600, fontSize: "large" }}>
        {title}
      </div>
      <Box>{children}</Box>
    </Stack>
  </CenteredContainer>
);

const PromiseSummary = ({ value, label }) => {
  return (
    <Stack className="promise-summary" sx={{ textAlign: "center" }} spacing={2}>
      <div className="promise-summary-value">{value}%</div>
      <div className="promise-summary-label">{label}</div>
    </Stack>
  );
};

const KeyPromise = ({ title, quote, date, status, src, id }) => {
  const navigate = useNavigate();
  return (
    <Stack className="key-promise">
      <div className="key-promise-image">
        <img src={src} alt="" />
      </div>
      <Stack spacing={2} className="key-promise-body">
        <div
          onClick={() => navigate(`/promise?id=${id}`)}
          className="key-promise-title"
        >
          {title}
        </div>
        <div className="key-promise-quote">
          {quote} | {date}
        </div>
      </Stack>
      <Stack
        className="key-promise-footer"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <div
          style={{ background: COLORS[status] }}
          className="key-promise-indicator"
        ></div>
        <div className="key-promise-status-text">{STATUS[status]}</div>
      </Stack>
    </Stack>
  );
};

const Home = () => {
  return (
    <main className="home-page">
      <Stack spacing={10}>
        {/* <HomeSection title="Promises Summary">
          <Stack>
            <div className="promise-summaries">
              <PromiseSummary label="Delivered Promises" value={40} />
              <PromiseSummary label="In Progress" value={35} />
              <PromiseSummary label="Stalled Promises" value={20} />
              <PromiseSummary label="Compromised Deliveries" value={10} />
              <PromiseSummary label="Broken Promises" value={10} />
            </div>
          </Stack>

          <Stack direction="row" justifyContent="center">
            <Box className="chart-container">
              <Chart />
            </Box>
          </Stack>
        </HomeSection> */}

        <HomeSection title="Recent Deliveries">
          <div className="key-promises">
            {PromiseList.sort((a, b) => a.status - b.status)
              .slice(0, 4)
              .map((promise, index) => (
                <KeyPromise
                  key={index}
                  quote={promise.quote}
                  title={promise.title}
                  date={promise.deadline}
                  status={promise.status}
                  src={promise.imgHeader}
                  id={promise.id}
                />
              ))}
          </div>
        </HomeSection>

        <HomeSection title="Key Promises">
          <div className="key-promises">
            {PromiseList.sort((a, b) => b.relevance - a.relevance)
              .slice(0, 4)
              .map((promise, index) => (
                <KeyPromise
                  key={index}
                  quote={promise.quote}
                  title={promise.title}
                  date={promise.deadline}
                  status={promise.status}
                  src={promise.imgHeader}
                  id={promise.id}
                />
              ))}
          </div>
        </HomeSection>
      </Stack>
    </main>
  );
};

export default Home;
