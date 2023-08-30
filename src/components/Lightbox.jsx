import { useState } from "react";

const LightboxComponent = () => {
  const [openGallery, setOpenGallery] = useState(false);
  const toggleOpenGallery = (open) => () => {
    setOpenGallery(open);
  };

  return (
    <div>
      {openGallery && <></>}
      <div onClick={toggleOpenGallery(true)}>View Gallery</div>
    </div>
  );
};

export default LightboxComponent;
