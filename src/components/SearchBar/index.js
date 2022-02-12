import React from 'react';
import {TextInput, View, Image} from 'react-native';

import styles from './styles';

import {icon} from '../../constants/images';
import colors from '../../constants/colors';

const SearchBar = ({value, setValue}) => {
  return (
    <View style={styles.container}>
      <Image source={icon.giphy} style={styles.logo} />
      <TextInput
        keyboardType="web-search"
        style={styles.input}
        placeholder="Search all GIFs"
        value={value}
        onChangeText={text => setValue(text)}
        placeholderTextColor={colors.grey}
      />
    </View>
  );
};

export default SearchBar;
