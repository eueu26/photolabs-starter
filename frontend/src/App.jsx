import React from "react";
import HomeRoute from "routes/HomeRoute";
import "./App.scss";
import photosData from "./mocks/photos";
import topicsData from "./mocks/topics";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  } = useApplicationData();


  
  return (
    <div className="App">
      <HomeRoute
        photos={photosData}
        topics={topicsData}
        openModal={setPhotoSelected}
        toggleFavorite={updateToFavPhotoIds}
        favoritePhotos={state.favoritePhotos}
        selectedPhoto={state.selectedPhoto}
      />

      <PhotoDetailsModal
        isOpen={state.isModalOpen}
        onClose={onClosePhotoDetailsModal}
        photoData={state.selectedPhoto}
        toggleFavorite={updateToFavPhotoIds}
        favoritePhotos={state.favoritePhotos}
        openModal={setPhotoSelected}
      />
    </div>
  );
};

export default App;
