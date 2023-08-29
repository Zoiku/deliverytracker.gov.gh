import "../styles/Promise.css";
import { useEffect, useState } from "react";
import { PromiseList } from "../lists/Promises";
import { Stack } from "@mui/material";
import quoteIcon from "../assets/icons/icons8-quote-100.png";
import { COLORS, STATUS } from "./Promises";
import Timeline from "../components/Timeline";
import { EventList } from "../lists/Events";

const PromiseStack = ({ title, children }) => (
  <Stack className="promise-body" spacing={1}>
    {title && (
      <div
        style={{
          fontSize: "x-large",
          fontWeight: 600,
          color: "var(--third-text-color)",
        }}
      >
        {title}
      </div>
    )}
    <div>{children}</div>
  </Stack>
);

const PromiseComponent = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const promiseId = urlParams.get("id") ? parseInt(urlParams.get("id")) : null;
  const [promise, setPromise] = useState(null);

  useEffect(() => {
    const promiseItem = PromiseList.find((promise) => promise.id === promiseId);
    setPromise(promiseItem);
  }, [promiseId]);

  return (
    <div>
      {promise && (
        <Stack spacing={5}>
          <Stack className="promise-header-title-container">
            <div>
              <img src={quoteIcon} alt="" />
            </div>
            <div
              style={{ color: "var(--third-text-color)" }}
              className="promise-header-title"
            >
              {promise.title} - <span>Hon. Frank</span>
            </div>
          </Stack>

          <div className="promise-header-image-container">
            <div className="promise-header-image">
              <div
                style={{ background: COLORS[promise.status] }}
                className="promise-header-image-status"
              >
                {STATUS[promise.status]}
              </div>
              <img src={promise.imgHeader} alt="" />
            </div>
            <div
              style={{ borderColor: COLORS[promise.status] }}
              className="promise-status-bar"
            >
              <Stack direction="row" alignItems="center" spacing={2} />
            </div>
          </div>

          <div className="promises-bodies">
            <PromiseStack title="Promise Overview">
              <div
                className="promise-overview"
                style={{
                  borderColor: COLORS[promise.status],
                }}
              >
                {promise.more}
              </div>
            </PromiseStack>
            <PromiseStack title="Timeline of Updates">
              <Timeline dotsColor={COLORS[promise.status]} events={EventList} />
            </PromiseStack>
          </div>
        </Stack>
      )}
    </div>
  );
};

export default PromiseComponent;
