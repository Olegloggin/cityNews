import * as api from './api';

export const getNewsType = {
  getNewsSuccessful: 'getNewsSuccessful',
  getTopNewsSuccessful: 'getTopNewsSuccessful',
};

export const getNewsAction = (page, city) => dispatch => {
  return dispatch(api.getListNews(page, city))
    .then(dataRequest => {
      if (page === 1) {
        dispatch(getTopNewsSuccessful(dataRequest));
      } else {
        dispatch(getNewsSuccessful(dataRequest));
      }
    })
    .catch(e => {});
};

export const getNewsSuccessful = news => ({
  type: getNewsType.getNewsSuccessful,
  payload: news,
});

export const getTopNewsSuccessful = news => ({
  type: getNewsType.getTopNewsSuccessful,
  payload: news,
});
