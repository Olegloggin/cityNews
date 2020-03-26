import {getCityType} from '../actions/getCityListAction';

const initialState = {
  cityes: [],
  currentCity: {
    slug: 'spb',
    name: 'Санкт-Петербург',
  },
};

export const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case getCityType.getCitySuccessful: {
      return {...state, cityes: action.payload};
    }
    default:
      return {...state};
  }
};
