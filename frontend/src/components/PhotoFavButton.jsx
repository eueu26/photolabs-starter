import React from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";


const PhotoFavButton = (props) => {
 

  const { toggleFavorite, favoritePhotos = [], photoId } = props;

  
  
  return (
    <div className="photo-list__fav-icon" onClick={() => toggleFavorite(photoId)}>
      <div className="photo-list__fav-icon-svg">
        {
          Array.isArray(favoritePhotos) && <FavIcon  selected={favoritePhotos.includes(photoId)}  />
        }
      </div>
    </div>
  );
  
};

export default PhotoFavButton;
