import * as api from './api';
import {errorAction} from './errors';

export const getCityType = {
  getCitySuccessful: 'getCitySuccessful',
};

export const getCityListAction = () => dispatch => {
  dispatch(api.getCityList())
    .then(response => {
      dispatch(getCitySuccessful(response));
    })
    .catch(e => {
      if (typeof e === 'number') {
        dispatch(errorAction.getError('Запрос не удалася. Ошибка: ' + e));
      } else {
        dispatch(errorAction.getError(e));
      }
      setTimeout(() => {
        dispatch(errorAction.resetError());
      }, 3000);
    });
};

const getCitySuccessful = cityList => ({
  type: getCityType.getCitySuccessful,
  payload: cityList,
});
