import "../styles/OverlayContainer.css";
import Slider from "./Slider";

const OverlayContainer = ({ showShadow, children, images, className }) => {
  return (
    <div className={`${className} overlay-container-component`}>
      {images && (
        <div className="overlay-images-container">
          <div className="overlay-images">
            <Slider overlay srcs={images} />
          </div>
        </div>
      )}

      <div
        className={
          showShadow ? "overlay-shadow overlay-container" : "overlay-container"
        }
      >
        {children}
      </div>
    </div>
  );
};

export default OverlayContainer;
