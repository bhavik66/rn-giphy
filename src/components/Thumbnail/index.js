import React, {useState} from 'react';
import {View, Image, ActivityIndicator} from 'react-native';
import colors from '../../constants/colors';
import styles from './styles';

const Thumbnail = ({item, index}) => {
  const [isLoaded, setLoad] = useState(false);

  return (
    <View style={styles.container}>
      <View
        style={[styles.imageContainer, !isLoaded && styles.loaderContainer]}>
        <Image
          source={{uri: item.images.preview_webp.url}}
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
