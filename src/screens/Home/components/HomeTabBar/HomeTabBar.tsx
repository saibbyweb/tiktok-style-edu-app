import {Row} from '@/components/Row';
import {FeedSwitch} from './FeedSwitch';
import {ElapsedTimer} from './ElapsedTimer';
import {Search} from './Search';
import {Animated} from 'react-native';
import {BoxProps} from '@/components/Box';
import {useTheme} from '@shopify/restyle';
import {AppTheme} from '@/theme';

type TabViewRoute = {
  key: string;
  title: string;
};

type HomeTabBarProps = {
  onTabChange: (index: number) => () => void;
  activeTabIndex: number;
  activeTabPosition: Animated.AnimatedInterpolation<number>;
  tabViewRoutes: TabViewRoute[];
};

export const HomeTabBar: React.FC<HomeTabBarProps & BoxProps> = ({
  onTabChange,
  activeTabIndex,
  activeTabPosition,
  tabViewRoutes,
  ...rest
}) => {
  const theme = useTheme<AppTheme>();
  return (
    <Row
      {...rest}
      height={theme.spacing.homeTabBar}
      width={'100%'}
      zIndex={1}
      horizontallyCentered
      justifyContent="space-between"
      px="20">
      <ElapsedTimer />
      <FeedSwitch
        onTabChange={onTabChange}
        activeTabIndex={activeTabIndex}
        position={activeTabPosition}
        tabViewRoutes={tabViewRoutes}
      />
      <Search />
    </Row>
  );
};
