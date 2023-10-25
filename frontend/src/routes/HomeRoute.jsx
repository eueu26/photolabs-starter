import React, { useState } from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const { photos, topics } = props;
  const [ favoritePhotos, setFavoritePhotos ] = useState([]);

  // array of numbers
  const toggleFavorite = (photoId) => {
    if (favoritePhotos.includes(photoId)) {
      setFavoritePhotos(favoritePhotos.filter((id) => id !== photoId));
    } else {
      setFavoritePhotos([...favoritePhotos, photoId]);
    }
  };

  return (
    <div className="home-route">
      <TopNavigationBar favoriteCount={favoritePhotos.length} topics={topics} toggleFavorite={toggleFavorite} favoritePhotos={favoritePhotos} />
      <div>
        <PhotoList photos={photos} toggleFavorite={toggleFavorite} favoritePhotos={favoritePhotos}/>
      </div>
    </div>
  );
};

export default HomeRoute;
