import React, {useState, useMemo} from 'react';
import {
  Animated,
  LayoutChangeEvent,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {Box} from '@/components/Box';
import {Column} from '@/components/Column';
import {Typography} from '@/components/Typography';
import {Row} from '@/components/Row';
import {BASE_COLORS} from '@/theme/elements/colors';

const INDICATOR_WIDTH = 30;
const TAB_GAP_WIDTH = 16;

type FeedSwitchProps = {
  onTabChange: (index: number) => () => void;
  activeTabIndex: number;
  position: Animated.AnimatedInterpolation<number>;
  tabViewRoutes: {
    key: string;
    title: string;
  }[];
};

export const FeedSwitch: React.FC<FeedSwitchProps> = ({
  onTabChange,
  position,
  activeTabIndex,
  tabViewRoutes,
}) => {
  const initialTabWidths = tabViewRoutes.reduce(
    (acc, tab) => ({
      ...acc,
      [tab.key]: 0,
    }),
    {},
  );

  const [tabWidths, setTabWidths] =
    useState<Record<string, number>>(initialTabWidths);

  const calculateOutputRange = useMemo(() => {
    let currentPosition = 0;
    const outputRange: number[] = [];

    Object.keys(tabWidths).forEach(tabKey => {
      const center =
        currentPosition + tabWidths[tabKey] / 2 - INDICATOR_WIDTH / 2;
      outputRange.push(center);

      currentPosition += tabWidths[tabKey] + TAB_GAP_WIDTH;
    });

    return outputRange;
  }, [tabWidths]);

  const translateXValue = position.interpolate({
    inputRange: Array.from(
      {length: Object.keys(tabWidths).length},
      (_, i) => i,
    ),
    outputRange: calculateOutputRange,
  });

  const onLayout = (key: string) => (event: LayoutChangeEvent) => {
    const {width} = event.nativeEvent.layout;
    setTabWidths(prev => {
      return {...prev, [key]: width};
    });
  };

  const indicatorStyle: StyleProp<ViewStyle> = {
    transform: [{translateX: translateXValue}],
  };

  return (
    <Column verticallyCentered gap="4">
      <Row gap="16">
        {tabViewRoutes.map((tab, index) => (
          <TouchableOpacity key={tab.key} onPress={onTabChange(index)}>
            <Box
              opacity={activeTabIndex === index ? 1 : 0.6}
              onLayout={onLayout(tab.key)}>
              <Typography
                typeface="SFProRounded600"
                style={baseStyles.textStyle}>
                {tab.title}
              </Typography>
            </Box>
          </TouchableOpacity>
        ))}
      </Row>

      <Column verticallyCentered>
        <Animated.View style={indicatorStyle}>
          <Box style={baseStyles.boxStyle} />
        </Animated.View>
      </Column>
    </Column>
  );
};

const baseStyles: {[key: string]: StyleProp<TextStyle | ViewStyle>} = {
  textStyle: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    color: 'white',
  },
  boxStyle: {height: 4, width: 30, backgroundColor: BASE_COLORS.white},
};
