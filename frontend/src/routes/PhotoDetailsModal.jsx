import React from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = (props) => {
  const { isOpen, onClose, selectedPhoto } = props;

  if (!isOpen) {
    return null;
  }

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={() => onClose()}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      
    </div>
  );
};

export default PhotoDetailsModal;
