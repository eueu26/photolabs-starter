import React from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";


const PhotoFavButton = (props) => {
  // const [isFavorited, setFavorited] = useState(false);

  // const handleFavClick = () => {
  //   setFavorited(!isFavorited);
  // };

  const { toggleFavorite, favoritePhotos, photoId  } = props;

  return (
    <div className="photo-list__fav-icon" onClick={() => toggleFavorite(photoId)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon  selected={favoritePhotos.includes(photoId)}/>
      </div>
    </div>
  );
  //   <div className="photo-list__fav-icon" onClick={handleFavClick}>

  //     <div className="photo-list__fav-icon-svg">
  //       <FavIcon  selected={isFavorited} />
  //     </div>
  //   </div>
  // );
};

export default PhotoFavButton;
