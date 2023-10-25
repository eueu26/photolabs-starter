import React from "react";
import "../styles/FavBadge.scss";
import FavIcon from "./FavIcon";

const FavBadge = (props) => {
  const { favoriteCount } = props;
  return (
    <div className="fav-badge">
      <FavIcon displayAlert={favoriteCount} selected={favoriteCount}/>
    </div>
  );
};

export default FavBadge;
