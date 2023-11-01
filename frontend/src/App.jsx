import React from "react";
import HomeRoute from "routes/HomeRoute";
import "./App.scss";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    toggleFavorite,
    openModal,
    closeModal,
    fetchPhotosByTopic,
  } = useApplicationData();

  // set up the main parent of the single-page application
  return (
    <div className="App">
      <HomeRoute
        photos={state.photoData}
        topics={state.topicData}
        openModal={openModal}
        toggleFavorite={toggleFavorite}
        favoritePhotos={state.favoritePhotos}
        selectedPhoto={state.selectedPhoto}
        fetchPhotosByTopic={fetchPhotosByTopic}
      />

      <PhotoDetailsModal
        isOpen={state.isModalOpen}
        onClose={closeModal}
        photoData={state.selectedPhoto}
        openModal={openModal}
        favoritePhotos={state.favoritePhotos}
        toggleFavorite={toggleFavorite}
        
      />
    </div>
  );
};

export default App;
