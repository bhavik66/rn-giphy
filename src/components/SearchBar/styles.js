import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.black,
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  logo: {
    height: 36,
    width: 36,
  },
  input: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    backgroundColor: colors.white,
    flex: 1,
    marginLeft: 8,
    color: colors.black,
  },
});

export default styles;
