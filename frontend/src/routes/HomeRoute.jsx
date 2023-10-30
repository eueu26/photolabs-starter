import React from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const { photos, topics, openModal, selectedPhoto, toggleFavorite, favoritePhotos } = props;
  

  return (
    <div className="home-route">
      <TopNavigationBar  topics={topics} toggleFavorite={toggleFavorite} favoritePhotos={favoritePhotos}  />
      <div>
        <PhotoList photos={photos} toggleFavorite={toggleFavorite} favoritePhotos={favoritePhotos} openModal={openModal} selectedPhoto={selectedPhoto}  />
      </div>
    </div>
  );
};

export default HomeRoute;
