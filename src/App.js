import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';

import Home from './screens/Home';

import styles from './app-styles';
import colors from './constants/colors';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <SafeAreaView style={styles.safearea} />
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor={colors.black} />
          <Home />
        </SafeAreaView>
      </>
    </QueryClientProvider>
  );
};

export default App;
