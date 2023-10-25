import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";
// import FavBadge from "./FavBadge";

// const sampleDataForTopicList = [
//   {
//     id: "1",
//     slug: "topic-1",
//     title: "Nature",
//   },
//   {
//     id: "2",
//     slug: "topic-2",
//     title: "Travel",
//   },
//   {
//     id: "3",
//     slug: "topic-3",
//     title: "People",
//   },
// ];

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
