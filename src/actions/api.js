import axios from 'axios';

import backend from '../constants/backend';
import {networkActions} from './network';

export const getListNews = (page, dispatch) => {
  return makeRequest(
    `/public-api/v1.4/news/?fields=id,title,publication_date,body_text,images&location=spb&actual_only=true&text_format=text&page=${page}`,
    'get',
  );
};

export const getCityList = dispatch => {
  return makeRequest('/public-api/v1.4/locations', 'get');
};

const makeRequest = (path, method) => dispatch => {
  const config = {
    url: backend.URL + path,
    method: method,
    timeout: backend.timeout,
  };
  dispatch(networkActions.networkRequestStarted());
  return axios
    .request(config)
    .then(response => extractResponseData(response))
    .catch(error => {
      throw error.request.status;
    })
    .finally(() => {
      dispatch(networkActions.networkRequestFinished());
    });
};

const extractResponseData = response => {
  if (response.status !== 200) {
    throw new Error('Ошибка запроса ', response.status);
  }
  return response.data;
};
