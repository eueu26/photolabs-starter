import { useReducer, useEffect } from "react";

const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  favoritePhotos: [],
  photoData: [],
  topicData: [],
};

const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS:'DISPLAY_PHOTO_DETAILS',
  SET_PHOTO_DATA:'SET_PHOTO_DATA',
  SET_TOPIC_DATA:'SET_TOPIC_DATA',
};

const reducer = (state, action) => {
  switch (action.type) {
  case ACTIONS.FAV_PHOTO_ADDED:
    return {
      ...state,
      favoritePhotos: [...state.favoritePhotos, action.payload.id],
    };

  case ACTIONS.FAV_PHOTO_REMOVED:
    return {
      ...state,
      favoritePhotos: state.favoritePhotos.filter(
        (id) => id !== action.payload.id
      ),
    };

  case ACTIONS.SELECT_PHOTO:
    return { ...state, selectedPhoto: action.payload.photo };

  case ACTIONS.DISPLAY_PHOTO_DETAILS:
    return { ...state, isModalOpen: action.payload.isOpen };

  case ACTIONS.SET_PHOTO_DATA:
    return { ...state, photoData: action.payload.photoData };
    
  case ACTIONS.SET_TOPIC_DATA:
    return { ...state, topicData: action.payload.topicData };
      

  default:
    throw new Error(
      `Tried to reduce with unsupported action type: ${action.type}`
    );
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('/api/photos')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Request failed with status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photoData: data } });
      })
      .catch((error) => {
        throw error('An Error has occured:', error);
      });

    fetch('/api/topics')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Request failed with status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { topicData: data } });
      })
      .catch((error) => {
        throw error('An Error has occured:', error);
      });
  }, []);


  const toggleFavorite = (photoId) => {
    if (state.favoritePhotos.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id: photoId } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id: photoId } });
    }
  };

  const openModal = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo } });
    dispatch({
      type: ACTIONS.DISPLAY_PHOTO_DETAILS,
      payload: { isOpen: true },
    });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo: null } });
    dispatch({
      type: ACTIONS.DISPLAY_PHOTO_DETAILS,
      payload: { isOpen: false },
    });
  };

 

  return {
    state,
    toggleFavorite,
    openModal,
    closeModal,
  };
};

export default useApplicationData;
