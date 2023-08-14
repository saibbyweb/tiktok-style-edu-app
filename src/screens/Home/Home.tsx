import React, {useState} from 'react';
import {Screen} from '@/components/Screen';

import {FollowingFeed} from './components/FollowingFeed';
import {ForYouFeed} from './components/ForYouFeed/ForYouFeed';
import {GradientBox} from '@/components/GradientBox/GradientBox';
import {TabView, SceneMap, TabBarProps, Route} from 'react-native-tab-view';
import {useScreenDimensions} from '@/hooks/useScreenDimensions';
import {HomeTabBar} from './components/HomeTabBar/HomeTabBar';

const sceneMap = SceneMap({
  FOLLOWING: FollowingFeed,
  FOR_YOU: ForYouFeed,
});

const tabViewRoutes = [
  {key: 'FOLLOWING', title: 'Following'},
  {key: 'FOR_YOU', title: 'For You'},
];

export const Home: React.FC = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const {homeTabBarTopMargin} = useScreenDimensions();

  const handleTabChange = (index: number) => () => {
    setActiveTabIndex(index);
  };

  const onIndexChange = (index: number) => {
    setActiveTabIndex(index);
  };

  const renderTabBar = (tabBarProps: TabBarProps<Route>) => {
    return (
      <HomeTabBar
        position="absolute"
        top={homeTabBarTopMargin}
        left={0}
        activeTabIndex={activeTabIndex}
        onTabChange={handleTabChange}
        activeTabPosition={tabBarProps.position}
        tabViewRoutes={tabViewRoutes}
      />
    );
  };

  return (
    <Screen name="home" statusBarStyle="light-content" expandToTopEdge>
      <GradientBox type="darkGradientBackground" flex={1} position="relative">
        <TabView
          navigationState={{
            index: activeTabIndex,
            routes: tabViewRoutes,
          }}
          renderScene={sceneMap}
          onIndexChange={onIndexChange}
          renderTabBar={renderTabBar}
        />
      </GradientBox>
    </Screen>
  );
};
