import {createRef, useEffect, useMemo} from 'react';

import {useSearch} from '../../hooks/giphy';
import withList from '../ListWrapper';

const SearchList = ({listComponent, searchText}) => {
  const listRef = createRef();

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollToOffset({animated: false, offset: 0});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  const {data, hasNextPage, isFetchingNextPage, fetchNextPage, isLoading} =
    useSearch(searchText);

  const listData = useMemo(() => {
    return data?.pages.map(page => page.data).flat();
  }, [data]);

  const onEndReached = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return listComponent(
    listData,
    onEndReached,
    isFetchingNextPage,
    isLoading,
    listRef,
  );
};

export default withList(SearchList);
