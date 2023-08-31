import "../styles/Home.css";
import CenteredContainer from "../components/CenteredContainer";
import { Avatar, Stack } from "@mui/material";
import quoteIcon from "../assets/icons/icons8-quote-100.png";
import client from "../assets/mp/image.jpg";
import { COLORS, PromiseItem } from "./Promises";
import { STATUS } from "../lists/Filters";
import Slider from "../components/Slider";
import { PromiseList } from "../lists/Promises";
import { useNavigate } from "react-router-dom";

const HomeSection = ({ title, children }) => (
  <CenteredContainer>
    <Stack spacing={3}>
      <div style={{ fontWeight: 700, textAlign: "center" }}>{title}</div>
      <div>{children}</div>
    </Stack>
  </CenteredContainer>
);

const KeyPromise = ({ id, title, status, quote }) => {
  const navigate = useNavigate();

  return (
    <div className="key-promise">
      <div
        onClick={() => navigate(`/promise?id=${id}`)}
        className="key-promise-inner key-promise-title"
      >
        <div className="key-promise-title-text">{title}</div>
      </div>
      <div className="key-promise-inner key-promise-status">
        <div className="key-promise-status-inner">
          <div className="key-promise-status-client-text">Promise Status</div>
          <div
            style={{ borderColor: COLORS[status] }}
            className="key-promise-status-indicator"
          >
            <div className="key-promise-status-avatar">
              <Avatar src={client} sx={{ height: 70, width: 70 }} />
            </div>
          </div>
          <div className="key-promise-status-text">{STATUS[status]}</div>
        </div>
      </div>
      <div className="key-promise-inner key-promise-quote">
        <div className="key-promise-quote-inner">
          <div className="key-promise-quote-image">
            <img src={quoteIcon} alt="" />
          </div>
          <div className="key-promise-quote-text">{quote}</div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <main className="home-page">
      <Stack paddingBottom={10} spacing={10}>
        <HomeSection title="Key Promises">
          <Slider
            slides={PromiseList.map((promise) => (
              <KeyPromise
                id={promise.id}
                status={promise.status}
                quote={promise.overview}
                title={promise.title}
              />
            ))}
          />
        </HomeSection>

        <HomeSection title="Recent Promises">
          <div className="web-slider">
            <Slider
              slidesPerView={4}
              spaceBetween={20}
              slides={PromiseList.map((promise, index) => (
                <PromiseItem
                  id={promise.id}
                  overview={promise.overview}
                  status={promise.status}
                  title={promise.title}
                  key={index}
                />
              ))}
            />
          </div>
          <div className="mobile-slider">
            <Slider
              slidesPerView={1}
              spaceBetween={1}
              slides={PromiseList.map((promise, index) => (
                <PromiseItem
                  id={promise.id}
                  overview={promise.overview}
                  status={promise.status}
                  title={promise.title}
                  key={index}
                />
              ))}
            />
          </div>
        </HomeSection>
      </Stack>
    </main>
  );
};

export default Home;
