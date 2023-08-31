import { useState } from "react";
import "../styles/Lighbox.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Captions from "yet-another-react-lightbox/plugins/captions";

const LightboxComponent = ({ gallery }) => {
  const [openGallery, setOpenGallery] = useState(false);
  const toggleOpenGallery = (open) => () => {
    setOpenGallery(open);
  };

  return gallery ? (
    <div>
      <Lightbox
        open={openGallery}
        close={toggleOpenGallery(false)}
        plugins={[Fullscreen, Thumbnails, Captions]}
        captions={{
          showToggle: true,
          descriptionMaxLines: 5,
          descriptionTextAlign: "center",
        }}
        slides={gallery.map((img) => {
          return {
            src: img.src,
            description: img.description,
          };
        })}
      />
      <div className="lightbox-view-text" onClick={toggleOpenGallery(true)}>
        View Gallery
      </div>
    </div>
  ) : null;
};

export default LightboxComponent;
