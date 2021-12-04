import { profileTypes } from "../types/profile.types";

export const handleAddFavDataAction = (info, isFavData) => {
  return {
    type: profileTypes.ADD_FAV,
    payload: { info, isFavData }
  };
};

export const handleAddFavDataActionVideo = (infoVideo, isFavDataVideo) => {
  return {
    type: profileTypes.ADD_FAV_VIDEO,
    payload: { infoVideo, isFavDataVideo }
  };
};
