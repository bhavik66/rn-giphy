import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {onlineManager} from 'react-query';

import SearchBar from '../../components/SearchBar';
import SearchList from '../../components/SearchList';
import TrendingList from '../../components/TrendingList';

import styles from './styles';

import {useDebounce} from '../../utils/customHook';
import EmptyContent from '../../components/EmptyContent';
import {icon} from '../../constants/images';

const Home = () => {
  const [isConnected, setConnected] = useState(true);

  useEffect(() => {
    onlineManager.setEventListener(setOnline => {
      return NetInfo.addEventListener(state => {
        setOnline(state.isConnected);
        setConnected(state.isConnected);
      });
    });
  }, []);

  const [searchText, setSearchText] = useState();
  const debouncedSearch = useDebounce(searchText, 400);

  const renderContent = () => {
    return debouncedSearch ? (
      <SearchList searchText={debouncedSearch} />
    ) : (
      <TrendingList />
    );
  };

  const renderNoInternet = () => {
    return (
      <EmptyContent
        icon={icon.noInternet}
        label={'No Internet, Please connect to internet'}
      />
    );
  };

  return (
    <View style={styles.container}>
      <SearchBar value={searchText} setValue={setSearchText} />
      {isConnected ? renderContent() : renderNoInternet()}
    </View>
  );
};

export default Home;
