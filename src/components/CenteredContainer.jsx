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
      {marginated ? (
        <div style={{ marginTop: 30 }} className="centered-container">
          {children}
        </div>
      ) : (
        <div className="centered-container">{children}</div>
      )}
    </div>
  );
};

export default CenteredContainer;
