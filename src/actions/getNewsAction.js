import * as api from './api';
import {errorAction} from './errors';

export const getNewsType = {
  getNewsSuccessful: 'getNewsSuccessful',
  getTopNewsSuccessful: 'getTopNewsSuccessful',
};

export const getNewsAction = page => dispatch => {
  dispatch(api.getListNews(page))
    .then(dataRequest => {
      if (page === 1) {
        return dispatch(getTopNewsSuccessful(dataRequest));
      } else {
        dispatch(getNewsSuccessful(dataRequest));
      }
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

const getNewsSuccessful = news => ({
  type: getNewsType.getNewsSuccessful,
  payload: news,
});

const getTopNewsSuccessful = news => ({
  type: getNewsType.getTopNewsSuccessful,
  payload: news,
});
