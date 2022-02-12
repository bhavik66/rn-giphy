import {limit} from '../constants/config';
import {get} from '../services/api';

const getTrending = async ({pageParam}) => {
  const {data} = await get('trending', {offset: pageParam, limit});
  return data;
};

const getSearch = async ({pageParam, meta}) => {
  const {data} = await get('search', {
    offset: pageParam,
    limit,
    q: meta.searchText,
  });
  return data;
};

export {getTrending, getSearch};
