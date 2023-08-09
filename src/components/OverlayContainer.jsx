import "../styles/OverlayContainer.css";
import Slider from "./Slider";

const OverlayContainer = ({ children, imgSrcs }) => {
  return (
    <div className="overlay-container-component">
      <div className="overlay-image-container">
        <div className="overlay-image">
          <Slider overlay srcs={imgSrcs} />
        </div>
      </div>
      <div className="overlay-container">{children}</div>
    </div>
  );
};

export default OverlayContainer;
