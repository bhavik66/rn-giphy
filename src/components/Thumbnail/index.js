import React, {useState} from 'react';
import {View, Image, ActivityIndicator} from 'react-native';
import colors from '../../constants/colors';
import styles from './styles';

const Thumbnail = ({item, index}) => {
  const url = item.images?.preview_webp?.url
    ? item.images?.preview_webp?.url
    : item.images?.preview_gif?.url;

  const [isLoaded, setLoad] = useState(false);

  return (
    <View style={styles.container}>
      <View
        style={[styles.imageContainer, !isLoaded && styles.loaderContainer]}>
        <Image
          source={{uri: url}}
          style={styles.image}
          resizeMode={'cover'}
          onLoadEnd={() => setLoad(true)}
        />
      </View>
      {!isLoaded && (
        <ActivityIndicator style={styles.loader} color={colors.black} />
      )}
    </View>
  );
};

export default Thumbnail;
