import axios from 'axios';

import backend from '../constants/backend';
import {networkActions} from './network';
import {errorAction} from './errors';

export const getListNews = (page, city) => {
  return makeRequest(
    `/public-api/v1.4/news/?fields=id,title,publication_date,body_text,images,site_url&location=${city}&actual_only=true&text_format=text&page=${page}`,
    'get',
  );
};

export const getCityList = () => {
  return makeRequest('/public-api/v1.4/locations', 'get');
};

export const getSearch = (
  city = '',
  searchText = '',
  ctype = '',
  isFree = '',
  page = 1,
) => {
  return makeRequest(
    `/public-api/v1.4/search/?q=${searchText}&location=${city}&ctype=${ctype}&is_free=${isFree}&page=${page}`,
    'get',
  );
};

const makeRequest = (path, method) => dispatch => {
  const config = {
    url: backend.URL + path,
    method: method,
  };
  axios.defaults.timeout = backend.timeout;
  dispatch(networkActions.networkRequestStarted());
  return axios
    .request(config)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      dispatch(
        errorAction.getError(`Запрос не удалася. Ошибка: ${error.message}`),
      );
      setTimeout(() => {
        dispatch(errorAction.resetError());
      }, 3000);
      throw new Error('Request  error', 'Ошибка запроса');
    })
    .finally(() => {
      dispatch(networkActions.networkRequestFinished());
    });
};
