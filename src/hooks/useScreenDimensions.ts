import {Dimensions} from 'react-native';
import {useTheme} from '@shopify/restyle';
import {AppTheme} from '@/theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
const {width, height} = Dimensions.get('window');
export const useScreenDimensions = () => {
  const insets = useSafeAreaInsets();
  const theme = useTheme<AppTheme>();
  const BOTTOM_TAB_BAR_HEIGHT = theme.spacing.bottomTabBar + insets.bottom;
  const bottomTabBarAdjustedHeight = height - BOTTOM_TAB_BAR_HEIGHT;

  return {
    width,
    height,
    bottomTabBarAdjustedHeight,
    homeTabBarTopMargin: bottomTabBarAdjustedHeight * 0.08,
  };
};
