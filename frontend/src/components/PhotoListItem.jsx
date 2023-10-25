import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
// import PhotoList from "./PhotoList";

const PhotoListItem = (props) => {
  const { imageSource, profile, name, location, id, username } = props;

  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img
        className="photo-list__image"
        src={imageSource}
        alt={`Photo ${id}`}
      />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={profile}
          alt={`${username}'s profile`}
        />
        <h3 className="photo-list__user-info">{name}
          <p className="photo-list__user-location">
            {location.city}, {location.country}
          </p>
        </h3>
      </div>
    </div>
  );
};

export default PhotoListItem;
