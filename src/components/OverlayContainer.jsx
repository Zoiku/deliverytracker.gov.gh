import "../styles/OverlayContainer.css";
import Slider from "./Slider";

const OverlayContainer = ({ children, height, imgSrcs }) => {
  return (
    <div style={{ height: height }} className="overlay-container-component">
      <div className="overlay-image-container">
        <div className="overlay-image">
          <Slider srcs={imgSrcs} />
        </div>
      </div>
      <div className="overlay-container">{children}</div>
    </div>
  );
};

export default OverlayContainer;
