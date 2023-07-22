import "../styles/OverlayContainer.css";

const OverlayContainer = ({ children, height, imgSrc, imgAlt }) => {
  return (
    <div style={{ height: height }} className="overlay-container-component">
      <div className="overlay-image-container">
        <div className="overlay-image">
          <img src={imgSrc} alt={imgAlt} />
        </div>
      </div>
      <div className="overlay-container">{children}</div>
    </div>
  );
};

export default OverlayContainer;
