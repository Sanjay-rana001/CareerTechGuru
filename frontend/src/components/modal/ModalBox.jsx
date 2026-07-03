import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const ModalBox = ({ closeModal, children }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);

  const handleModalClick = (e) => {
    e.stopPropagation(); // Prevent the click inside the modal from closing it
  };

  return ReactDOM.createPortal(
    <>
      <div className="modal-wrapper container-fluid" onClick={closeModal}>
        <div className="modal-container" onClick={handleModalClick}>
          <div className="modal-content">
            {/* Close Button */}
            <button className="close-button " onClick={closeModal}>
              &times;
            </button>
            {children}
          </div>
        </div>
      </div>
    </>,
    document.querySelector(".modalBox"),
  );
};

export default ModalBox;
