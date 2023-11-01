import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


const PhotoList = ({ photos, toggleFavorite, favoritePhotos, openModal }) => {
  

  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          id={photo.id}
          location={photo.location}
          imageSource={photo.urls.regular}
          username={photo.user.username}
          name={photo.user.name}
          profile={photo.user.profile}
          favoritePhotos={favoritePhotos}
          toggleFavorite={toggleFavorite}
          openModal={openModal}
          similarPhotos={photo.similarPhotos}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
