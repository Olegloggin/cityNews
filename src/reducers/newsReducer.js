import {getNewsType} from '../actions/getNewsAction';
import {networkActionType} from '../actions/network';
import {addFavoriteType} from '../actions/addFavorite';

const initialState = {
  news: [],
  favorite: [],
  isRequested: false,
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case networkActionType.networkRequestStarted: {
      return {...state, isRequested: true};
    }
    case getNewsType.getTopNewsSuccessful: {
      return {...state, news: action.payload.results};
    }
    case getNewsType.getNewsSuccessful: {
      const newNews = [...state.news].concat(action.payload.results);
      return {...state, news: newNews};
    }
    case networkActionType.networkRequestFinished: {
      return {...state, isRequested: false};
    }

    case addFavoriteType.addFavorite: {
      let newFavorite;
      if (state.favorite.includes(action.payload)) {
        const index = state.favorite.indexOf(action.payload);
        newFavorite = [...state.favorite];
        newFavorite.splice(index, 1);
      } else {
        newFavorite = [...state.favorite].concat(action.payload);
      }
      return {...state, favorite: newFavorite};
    }

    default:
      return {...state};
  }
};
