import "../styles/Promise.css";
import { useEffect, useState } from "react";
import { PromiseList } from "../lists/Promises";
import { Stack } from "@mui/material";
import quoteIcon from "../assets/icons/icons8-quote-100.png";
import { COLORS } from "./Promises";
import { CATEGORY, STATUS } from "../lists/Filters";
import Timeline from "../components/Timeline";
import { EventList } from "../lists/Events";

const PromiseStack = ({ title, titleHelper, children, className }) => (
  <Stack className={`promise-body ${className}`} spacing={3}>
    {title && (
      <Stack>
        <div
          style={{
            fontSize: "large",
            fontWeight: 600,
            color: "var(--third-text-color)",
          }}
        >
          {title}
        </div>
        {titleHelper && <div style={{ color: "GrayText" }}>{titleHelper}</div>}
      </Stack>
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
                <div className="promise-header-image-status-text">
                  {STATUS[promise.status]}
                </div>
              </div>
              <img loading="lazy" src={promise.imgHeader} alt="" />
            </div>
            <div
              style={{ borderColor: COLORS[promise.status] }}
              className="promise-status-bar"
            />
          </div>

          <div className="promises-bodies">
            <PromiseStack
              className="promise-sections-container"
              title="Overview"
              titleHelper="More about this Promise"
            >
              <Stack spacing={3}>
                <Stack spacing={2}>
                  {promise.categories && promise.categories.length > 0 && (
                    <div className="promise-category-tags">
                      {promise.categories.map((category, index) => (
                        <div key={index} className="promise-category-tag">
                          {CATEGORY[category]}
                        </div>
                      ))}
                    </div>
                  )}

                  <div
                    className="promise-overview"
                    style={{
                      borderColor: COLORS[promise.status],
                    }}
                  >
                    {promise.overview}
                  </div>
                </Stack>

                <Stack spacing={2} className="promise-sections">
                  {promise.sections &&
                    promise.sections.length > 0 &&
                    promise.sections.map((section, index) => (
                      <div key={index}>{section}</div>
                    ))}
                </Stack>
              </Stack>
            </PromiseStack>

            <PromiseStack
              title="Timeline"
              titleHelper="Event updates on the Promise"
            >
              <Timeline theme={COLORS[promise.status]} events={EventList} />
            </PromiseStack>
          </div>
        </Stack>
      )}
    </div>
  );
};

export default PromiseComponent;
