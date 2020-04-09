import * as api from './api';

export const getCityType = {
  getCitySuccessful: 'getCitySuccessful',
};

export const getCityListAction = () => dispatch => {
  dispatch(api.getCityList())
    .then(response => {
      dispatch(getCitySuccessful(response));
    })
    .catch(e => {});
};

const getCitySuccessful = cityList => ({
  type: getCityType.getCitySuccessful,
  payload: cityList,
});
