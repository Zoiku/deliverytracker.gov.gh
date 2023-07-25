import OverlayContainer from "../components/OverlayContainer";
import overlayImgSrc1 from "../assets/home/jeffrey-ofori-tOshpNl-sW4-unsplash.jpg";
import overlayImgSrc2 from "../assets/home/the-artboard-jMZEZ08e9j8-unsplash.jpg";
import "../styles/Home.css";

const Home = () => {
  return (
    <main>
      <OverlayContainer
        height={"100vh"}
        imgSrcs={[overlayImgSrc1, overlayImgSrc2]}
      ></OverlayContainer>
    </main>
  );
};

export default Home;
