import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ id, location, imageSource, username, name, profile, favoritePhotos, toggleFavorite, openModal, similarPhotos }) => {
  

  return (
    <div
      className="photo-list__item">
      <PhotoFavButton
        photoId={id}
        toggleFavorite={toggleFavorite}
        favoritePhotos={favoritePhotos}
      />
      <img
        className="photo-list__image"
        src={imageSource}
        alt={`Photo ${id}`}
        onClick={() =>
          openModal({
            id,
            location,
            imageSource,
            username,
            name,
            profile,
            similarPhotos
          })
        }
      />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={profile}
          alt={`${username}'s profile`}
        />
        <div className="photo-list__user-info">
          {name}
          <div className="photo-list__user-location">
            {location.city}, {location.country}
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default PhotoListItem;
