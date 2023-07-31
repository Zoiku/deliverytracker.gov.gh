import "../styles/CenteredContainer.css";

const CenteredContainer = ({
  children,
  marginated,
  backgroundColor = "inherit",
}) => {
  return (
    <div
      className="centered-container-component"
      style={{ background: backgroundColor }}
    >
      <div
        style={marginated ? { margin: "80px 0" } : {}}
        className="centered-container"
      >
        {children}
      </div>
    </div>
  );
};

export default CenteredContainer;
