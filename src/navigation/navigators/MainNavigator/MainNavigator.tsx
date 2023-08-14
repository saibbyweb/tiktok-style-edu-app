import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import HomeIcon from '@/assets/icons/main-nav-bar/home.svg';
import DiscoverIcon from '@/assets/icons/main-nav-bar/discover.svg';
import ActivityIcon from '@/assets/icons/main-nav-bar/activity.svg';
import BookmarksIcon from '@/assets/icons/main-nav-bar/bookmarks.svg';
import ProfileIcon from '@/assets/icons/main-nav-bar/profile.svg';
import {useTheme} from '@shopify/restyle';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AppTheme} from '@/theme';
import {Home} from '@/screens/Home';
import {QualityBar} from '@/screens/QualityBar';

export type BottomTabParamList = {
  Home: undefined;
  Discover: undefined;
  Activity: undefined;
  Bookmarks: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

export const MainNavigator = () => {
  const insets = useSafeAreaInsets();
  const theme = useTheme<AppTheme>();
  /* actual height + bottom safe area inset  */
  const BOTTOM_TAB_BAR_HEIGHT = theme.spacing.bottomTabBar + insets.bottom;
  const screenOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarActiveTintColor: 'white',
    tabBarInactiveTintColor: 'gray',
    tabBarStyle: {
      backgroundColor: theme.colors.black,
      height: BOTTOM_TAB_BAR_HEIGHT,
      borderBlockColor: theme.colors.black,
    },
    tabBarLabelStyle: {
      fontSize: 11,
    },
  };

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        name="Discover"
        component={QualityBar}
        options={{
          tabBarIcon: DiscoverIcon,
        }}
      />
      <Tab.Screen
        name="Activity"
        component={QualityBar}
        options={{
          tabBarIcon: ActivityIcon,
        }}
      />
      <Tab.Screen
        name="Bookmarks"
        component={QualityBar}
        options={{
          tabBarIcon: BookmarksIcon,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={QualityBar}
        options={{
          tabBarIcon: ProfileIcon,
        }}
      />
    </Tab.Navigator>
  );
};
