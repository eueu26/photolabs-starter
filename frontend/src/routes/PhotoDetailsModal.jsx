import React from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = ({
  isOpen,
  onClose,
  photoData,
  openModal,
  favoritePhotos,
  toggleFavorite,
}) => {
  if (!isOpen) {
    return null;
  }

  const similarPhotosArray = photoData.similarPhotos
    ? Object.values(photoData.similarPhotos)
    : [];

  console.log("similarPhotoArr", similarPhotosArray);
  console.log("photoData", photoData);

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={() => onClose()}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__header">
        <PhotoFavButton
          photoId={photoData.id}
          toggleFavorite={toggleFavorite}
          favoritePhotos={favoritePhotos}
        />

        <div className="photo-details-modal__top-bar">
          <img
            className="photo-details-modal__image"
            src={photoData.imageSource}
            alt={`Photo ${photoData.id}`}
          />
        </div>
      </div>

      <div className="photo-details-modal__top-bar">
        <section className="photo-details-modal__photographer-details">
          <img
            className="photo-details-modal__photographer-profile"
            src={photoData.profile}
            alt={`${photoData.username}'s profile`}
          />

          <div className="photo-details-modal__photographer-info">
            {photoData.name}
            <div className="photo-details-modal__photographer-location">
              {photoData.location.city}, {photoData.location.country}
            </div>
          </div>
        </section>
      </div>
      <h3 className="photo-details-modal__top-bar"> Similar Photos</h3>

      <div className="photo-details-modal__images">
        <PhotoList
          photos={similarPhotosArray}
          toggleFavorite={toggleFavorite}
          favoritePhotos={favoritePhotos}
          openModal={openModal}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
