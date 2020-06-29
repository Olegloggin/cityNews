import {getNewsType} from '../actions/getNewsAction';
import {addFavoriteType} from '../actions/addFavorite';

const initialState = {
  news: [],
  favorite: [],
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case getNewsType.getTopNewsSuccessful: {
      return {...state, news: action.payload.results};
    }
    case getNewsType.getNewsSuccessful: {
      const newNews = [...state.news].concat(action.payload.results);
      return {...state, news: newNews};
    }
    case addFavoriteType.addFavorite: {
      let newFavorite;
      const index = state.favorite.findIndex(
        item => item.id === action.payload.id,
      );
      if (index !== -1) {
        newFavorite = [...state.favorite];
        newFavorite.splice(index, 1);
      } else {
        newFavorite = [...state.favorite].concat(action.payload);
      }
      return {
        ...state,
        favorite: newFavorite,
      };
    }
    default:
      return state;
  }
};
