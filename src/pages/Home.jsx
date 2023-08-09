import "../styles/Home.css";
import OverlayContainer from "../components/OverlayContainer";
import overlayImgSrc1 from "../assets/home/jeffrey-ofori-tOshpNl-sW4-unsplash.jpg";
import overlayImgSrc2 from "../assets/home/the-artboard-jMZEZ08e9j8-unsplash.jpg";
import { Box, Stack } from "@mui/material";
import CenteredContainer from "../components/CenteredContainer";
import Slider from "../components/Slider";
import { SwiperSlide } from "swiper/react";

const HomeSection = ({ title, children, backgroundColor = "inherit" }) => (
  <CenteredContainer backgroundColor={backgroundColor}>
    <Box className="home-page-section">
      <Stack spacing={5}>
        <div className="home-page-section-title">{title}</div>
        <div className="home-page-section-content">{children}</div>
      </Stack>
    </Box>
  </CenteredContainer>
);

const KeyPromise = () => (
  <Stack className="key-promise-container">
    <div></div>
    <div></div>
  </Stack>
);
const Home = () => {
  return (
    <main className="home-page">
      <OverlayContainer imgSrcs={[overlayImgSrc1, overlayImgSrc2]}>
        <CenteredContainer>
          <Box className="home-page-intro-component">
            <Stack spacing={1} className="home-page-intro">
              <div
                data-aos="fade-down"
                data-aos-duration="500"
                className="home-page-intro-title"
              >
                Hon. Frank Annoh-Dompreh
                <div>Promise Tracker</div>
              </div>
              <div className="home-page-intro-more">
                The Biden Promise Tracker monitors the 99 most important
                campaign promises of President Joseph R. Biden, elected in
                November 2020. Biden said his top priorities were fighting the
                coronavirus, improving the economy, responding to calls for
                racial justice and combating climate change. For each campaign
                promise, our reporters research the issue and then rate it based
                on whether the promise was achieved: Promise Kept, Promise
                Broken, Compromise, Stalled, In the Works or Not Yet Rated. We
                rate the promise not on the president's intentions or effort,
                but on verifiable outcomes. We previously tracked the promises
                of President Donald Trump and President Barack Obama.
              </div>
            </Stack>
          </Box>
        </CenteredContainer>
      </OverlayContainer>

      <HomeSection title="Key Promises">
        <Box className="key-promises-container">
          <Slider promises>
            <SwiperSlide className="key-promise-slide">
              <KeyPromise />
            </SwiperSlide>
          </Slider>
        </Box>
      </HomeSection>
    </main>
  );
};

export default Home;
