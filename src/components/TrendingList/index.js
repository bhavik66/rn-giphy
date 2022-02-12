import {useMemo} from 'react';

import {useTrending} from '../../hooks/giphy';
import withList from '../ListWrapper';

const TrendingList = ({listComponent}) => {
  const {data, hasNextPage, isFetchingNextPage, fetchNextPage, isLoading} =
    useTrending();

  const listData = useMemo(() => {
    return data?.pages.map(page => page.data).flat();
  }, [data]);

  const onEndReached = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return listComponent(listData, onEndReached, isFetchingNextPage, isLoading);
};

export default withList(TrendingList);
