import React, { useState } from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = () => {
  const [isFavorited, setFavorited] = useState(false);

  const handleFavClick = () => {
    setFavorited(!isFavorited);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleFavClick}>
      
      <div className="photo-list__fav-icon-svg">
        <FavIcon  selected={isFavorited} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
