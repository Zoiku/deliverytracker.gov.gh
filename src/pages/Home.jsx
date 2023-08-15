import "../styles/Home.css";
import OverlayContainer from "../components/OverlayContainer";
import overlayImgSrc1 from "../assets/home/jeffrey-ofori-tOshpNl-sW4-unsplash.jpg";
import overlayImgSrc2 from "../assets/home/the-artboard-jMZEZ08e9j8-unsplash.jpg";
import { Box, Stack } from "@mui/material";
import CenteredContainer from "../components/CenteredContainer";
import PromisesChart from "../charts/Promises";
import { COLORS, STATUS } from "./Promises";
import { PromisesList } from "../lists/Promises";

const HomeSection = ({ title, children, backgroundColor = "inherit" }) => (
  <CenteredContainer backgroundColor={backgroundColor}>
    <Box className="home-page-section">
      <Stack spacing={3}>
        <div className="home-page-section-title">{title}</div>
        <div className="home-page-section-content">{children}</div>
      </Stack>
    </Box>
  </CenteredContainer>
);

const KeyPromise = ({ status, imgSrc, title }) => (
  <Stack style={{ borderColor: COLORS[status] }} className="key-promise">
    <div className="key-promise-image">
      <img src={imgSrc} alt="" />
    </div>
    <Stack className="key-promise-text" spacing={5}>
      <div className="key-promise-title">{title}</div>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        className="key-promise-progress"
        spacing={3}
      >
        <div
          style={{ borderColor: COLORS[status] }}
          className="key-promise-item-status-indicator"
        ></div>
        <div className="key-promise-item-status-text">{STATUS[status]}</div>
      </Stack>
    </Stack>
  </Stack>
);

const Home = () => {
  return (
    <main className="home-page">
      <OverlayContainer
        imgSrcs={[overlayImgSrc1, overlayImgSrc2]}
      ></OverlayContainer>
    </main>
  );
};

export default Home;
