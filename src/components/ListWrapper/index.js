import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, Dimensions, FlatList} from 'react-native';
import colors from '../../constants/colors';
import {icon} from '../../constants/images';
import EmptyContent from '../EmptyContent';

import Thumbnail from '../Thumbnail';

import styles from './styles';

const withList = WrapperComponent => {
  return props => {
    const [isPortrait, setPortrait] = useState(2);

    useEffect(() => {
      Dimensions.addEventListener('change', () => {
        const {width, height} = Dimensions.get('window');
        setPortrait(width < height ? 2 : 4);
      });
    }, []);

    const renderItem = ({item, index}) => <Thumbnail item={item} key={index} />;

    const renderFooter = () => {
      return (
        <View style={styles.spinnerContainer}>
          <ActivityIndicator color={colors.black} />
        </View>
      );
    };

    const renderFullLoader = () => {
      return (
        <View style={styles.fullLoaderContainer}>
          <ActivityIndicator size={'large'} color={colors.black3} />
        </View>
      );
    };

    const listComponent = (
      data,
      onEndReached,
      isFetchingNextPage,
      isLoading,
      listRef,
    ) => {
      if (isLoading) {
        return renderFullLoader();
      } else if (data?.length) {
        return (
          <FlatList
            ref={listRef}
            key={`#${isPortrait}`}
            data={data}
            renderItem={renderItem}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.5}
            ListFooterComponent={isFetchingNextPage ? renderFooter() : null}
            keyExtractor={item => `${isPortrait}_${item.id}`}
            numColumns={isPortrait}
            initialNumToRender={20}
            windowSize={7}
            maxToRenderPerBatch={30}
            updateCellsBatchingPeriod={40}
            contentContainerStyle={styles.contentContainerStyle}
          />
        );
      } else {
        return (
          <EmptyContent
            icon={icon.noData}
            label={'No result found, try with another keyword'}
          />
        );
      }
    };

    return <WrapperComponent listComponent={listComponent} {...props} />;
  };
};

export default withList;
