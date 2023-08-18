import "../styles/CenteredContainer.css";

const CenteredContainer = ({ children, backgroundColor = "inherit" }) => {
  return (
    <div
      className="centered-container-component"
      style={{ background: backgroundColor }}
    >
      <div className="centered-container">{children}</div>
    </div>
  );
};

export default CenteredContainer;
