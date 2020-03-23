import {errorType} from '../actions/errors';

const initialState = {
  isError: false,
  errorText: '',
};

export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case errorType.getError: {
      return {...state, isError: true, errorText: action.payload};
    }
    case errorType.resetError: {
      return initialState;
    }
    default:
      return state;
  }
};
