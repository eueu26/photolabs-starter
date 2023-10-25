import React, { useState } from "react";
import HomeRoute from "routes/HomeRoute";
import "./App.scss";

import photosData from './mocks/photos';
import topicsData from './mocks/topics';
import PhotoDetailsModal from "routes/PhotoDetailsModal";



// Note: Rendering a single component to build components in isolation
const App = () => {
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const [ selectedPhoto, setSelectedPhoto ] = useState(null);

  const openModal = (selectedPhoto) => {
    setSelectedPhoto(selectedPhoto);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <HomeRoute photos={photosData} topics={topicsData} openModal={openModal} />
      <PhotoDetailsModal isOpen={isModalOpen} onClose={closeModal} selectedPhoto={selectedPhoto} />
    </div>
  );
};

export default App;
