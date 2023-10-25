import React from "react";
import HomeRoute from "routes/HomeRoute";
import "./App.scss";

import photosData from './mocks/photos';
import topicsData from './mocks/topics';



// Note: Rendering a single component to build components in isolation
const App = () => {

  return (
    <div className="App">
      <HomeRoute photos={photosData} topics={topicsData}/>
    </div>
  );
};

export default App;
