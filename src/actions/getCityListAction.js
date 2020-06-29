import * as api from './api';

export const getCityType = {
  getCitySuccessful: 'getCitySuccessful',
};

export const getCityListAction = () => dispatch => {
  return dispatch(api.getCityList())
    .then(response => {
      dispatch(getCitySuccessful(response));
    })
    .catch(e => {});
};

export const getCitySuccessful = cityList => ({
  type: getCityType.getCitySuccessful,
  payload: cityList,
});
