import { MdDelete } from "react-icons/md";
import PropTypes from "prop-types";

const Gallery = ({ imageSrc, altText, onClose }) => {
  const handleBackgroundClick = (event) => {
    if (event.target.id === "gallery") {
      onClose();
    }
  };

  return (
    <div>
      <div
        className="fixed inset-0 bg-black bg-opacity-100 flex items-center justify-center w-auto"
        role="dialog"
        aria-labelledby="galleryImg"
        aria-hidden="true"
        aria-modal="true"
        onClick={handleBackgroundClick}
        id="gallery"
      >
        <img
          src={imageSrc}
          alt={altText}
          className="w-auto h-full object-cover"
          onClick={(e) => e.stopPropagation()}
        />
        <div className="absolute bottom-0 right-0 bg-[#0d0d0d] z-40 w-full h-16 text-center flex items-center justify-center">
          <button
            role="button"
            aria-label="Delete"
            className="flex items-center justify-center"
          >
            <MdDelete className="size-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

Gallery.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default Gallery;
