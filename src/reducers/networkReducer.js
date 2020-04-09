import {networkActionType} from '../actions/network';

const initialState = {
  isRequested: false,
};

export const networkReducer = (state = initialState, action) => {
  switch (action.type) {
    case networkActionType.networkRequestStarted: {
      return {...state, isRequested: true};
    }
    case networkActionType.networkRequestFinished: {
      return {...state, isRequested: false};
    }
    default:
      return state;
  }
};
