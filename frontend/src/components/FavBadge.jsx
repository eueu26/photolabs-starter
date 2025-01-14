import React from "react";
import "../styles/FavBadge.scss";
import FavIcon from "./FavIcon";

const FavBadge = ({ favoritePhotos}) => {
 
  return (
    <div className="fav-badge">
      <FavIcon selected={favoritePhotos.length > 0} displayAlert={favoritePhotos.length > 0}/>
    </div>
  );
};

export default FavBadge;
