import React from "react";
import FavBadge from "./FavBadge";
import TopicList from "./TopicList";
import "../styles/TopNavigationBar.scss";

const TopNavigationBar = (props) => {
  const { topics, favoriteCount } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      {favoriteCount > 0 && (
        <div>
          {favoriteCount} {favoriteCount === 1 ? "photo" : "photos"} favorited
        </div>
      )}
      <TopicList topics={topics} />
      <FavBadge />
    </div>
  );
};

export default TopNavigationBar;
