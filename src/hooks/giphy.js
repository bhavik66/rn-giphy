import {useInfiniteQuery} from 'react-query';
import {getSearch, getTrending} from '../api/giphy';
import {limit} from '../constants/config';

const useTrending = () => {
  return useInfiniteQuery('trending', getTrending, {
    getNextPageParam: (lastPage, pages) => {
      const nextOffset = lastPage.pagination.offset + limit;
      if (nextOffset < lastPage.pagination.total_count) {
        return nextOffset;
      }
      return undefined;
    },
  });
};

const useSearch = searchText => {
  return useInfiniteQuery(['search', searchText], getSearch, {
    getNextPageParam: (lastPage, pages) => {
      const nextOffset = lastPage.pagination.offset + limit;
      if (nextOffset < lastPage.pagination.total_count) {
        return nextOffset;
      }
      return undefined;
    },
    meta: {
      searchText,
    },
  });
};

export {useTrending, useSearch};
