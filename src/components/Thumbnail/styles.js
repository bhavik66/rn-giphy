import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const width = Dimensions.get('window').width / 2 - 12;

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    padding: 4,
  },
  imageContainer: {
    width: width,
    height: width,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    width: width,
    height: width,
  },
  loader: {
    position: 'absolute',
  },
  loaderContainer: {
    backgroundColor: colors.lightGrey,
    elevation: 0,
  },
});

export default styles;
