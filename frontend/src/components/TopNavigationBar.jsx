import React from "react";
import FavBadge from "./FavBadge";
import TopicList from "./TopicList";
import "../styles/TopNavigationBar.scss";

const TopNavigationBar = ({ topics, toggleFavorite, favoritePhotos, fetchPhotosByTopic }) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
     
      <TopicList topics={topics} fetchPhotosByTopic={fetchPhotosByTopic} />
      <FavBadge toggleFavorite={toggleFavorite} favoritePhotos={favoritePhotos} />
    </div>
  );
};

export default TopNavigationBar;
