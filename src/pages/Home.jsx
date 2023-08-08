import "../styles/Home.css";
import OverlayContainer from "../components/OverlayContainer";
import overlayImgSrc1 from "../assets/home/jeffrey-ofori-tOshpNl-sW4-unsplash.jpg";
import overlayImgSrc2 from "../assets/home/the-artboard-jMZEZ08e9j8-unsplash.jpg";
import { Box, Stack } from "@mui/material";
import CenteredContainer from "../components/CenteredContainer";

const Home = () => {
  return (
    <main className="home-page">
      <OverlayContainer imgSrcs={[overlayImgSrc1, overlayImgSrc2]}>
        <CenteredContainer>
          <Box className="home-page-intro-component">
            <Stack spacing={1} className="home-page-intro">
              <div className="home-page-intro-title">
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
    </main>
  );
};

export default Home;
