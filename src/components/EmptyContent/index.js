import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';

const EmptyContent = ({icon, label}) => {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};

export default EmptyContent;
