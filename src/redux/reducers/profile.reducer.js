import { profileTypes } from "../types/profile.types";

const initialState = {
  favData: [],
  favDataVideo: []
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case profileTypes.ADD_FAV:
      return {
        ...state,
        // favData: [...state.favData, action.payload]
        favData: action.payload.isFavData
          ? state.favData.filter(item => item.id !== action.payload.info.id)
          : [...state.favData, action.payload.info]
      };

      case profileTypes.ADD_FAV_VIDEO:
      return {
        ...state,
        // favData: [...state.favData, action.payload]
        favDataVideo: action.payload.isFavDataVideo
          ? state.favDataVideo.filter(item => item.id !== action.payload.infoVideo.id)
          : [...state.favDataVideo, action.payload.infoVideo]
      };


    default:
      return state;
  }
};

// export const profileReducerVideo = (state = initialState, action) => {
//   switch (action.type) {
//     case profileTypes.ADD_FAV_VIDEO:
//       return {
//         ...state,
//         // favData: [...state.favData, action.payload]
//         favDataVideo: action.payload.isFavDataVideo
//           ? state.favData.filter(item => item.id !== action.payload.info.id)
//           : [...state.favDataVIdeo, action.payload.info]
//       };

//     default:
//       return state;
//   }
// };

