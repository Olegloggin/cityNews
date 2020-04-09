import {getCityType} from '../actions/getCityListAction';
import {changeCityType} from '../actions/changeCityAction';

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
    case changeCityType.changeCity: {
      return {...state, currentCity: action.payload};
    }
    default:
      return state;
  }
};
