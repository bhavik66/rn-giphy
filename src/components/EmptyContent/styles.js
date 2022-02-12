import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 64,
    height: 64,
  },
  text: {
    fontSize: 14,
    marginTop: 16,
    color: colors.black3,
  },
});

export default styles;
