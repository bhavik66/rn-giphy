import axios from 'axios';
import {BASE_URL} from '../constants/api';
import {API_KEY} from '../constants/keys';

const get = (path, params = {}) => {
  return axios.get(`${BASE_URL}/${path}`, {
    params: {api_key: API_KEY, ...params},
  });
};

export {get};
