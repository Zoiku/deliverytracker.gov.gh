import OverlayContainer from "../components/OverlayContainer";
import overlayImgSrc from "../assets/home/jeffrey-ofori-tOshpNl-sW4-unsplash.jpg";
import "../styles/Home.css";

const Home = () => {
  return (
    <main>
      <OverlayContainer
        height={"100vh"}
        imgSrc={overlayImgSrc}
      ></OverlayContainer>
    </main>
  );
};

export default Home;
