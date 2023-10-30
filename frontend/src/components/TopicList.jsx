import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";


const TopicList = (props) => {
  const { topics } = props;

  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((data) => (
        <TopicListItem key={data.id} topic={data.title} slug={data.slug} />
      ))}
    </div>
  );
};

export default TopicList;
