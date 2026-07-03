import React from "react";
import PropTypes from "prop-types";

const Marquee = ({ images, speed }) => {
  return (
    <div className="marquee">
      <div
        className="marquee-content"
        style={{ animationDuration: `${speed}s` }}
      >
        {images?.map((image, index) => (
          <img
            key={index}
            src={image?.src}
            alt={image.alt}
            className="marquee-image"
          />
        ))}
      </div>
    </div>
  );
};

Marquee.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  speed: PropTypes.number,
};

Marquee.defaultProps = {
  speed: 10, // Default speed of 10 seconds
};

export default Marquee;
