import React from 'react';
import {
  FlatList,
  FlatListProps,
  Image,
  ListRenderItem,
  ViewabilityConfig,
} from 'react-native';
import {Box} from '@/components/Box';
import {useScreenDimensions} from '@/hooks/useScreenDimensions';
import {Loading} from '../Loading/Loading';

type FullScreenInfiniteScrollListProps<K> = {
  data: K[];
  renderItem: ListRenderItem<K>;
  onViewableItemsChanged: (info: any) => void;
  keyExtractor: (item: K, index: number) => string;
  isTabBarVisible?: boolean;
  isLoading?: boolean;
} & Omit<FlatListProps<K>, 'data' | 'renderItem' | 'keyExtractor'>;

const viewabilityConfig: ViewabilityConfig = {
  itemVisiblePercentThreshold: 50,
};

const LOADER_SIZE = 30;

export const FullScreenInfiniteScrollList = <K,>({
  data,
  renderItem,
  onViewableItemsChanged,
  keyExtractor,
  isLoading,
  ...otherProps
}: FullScreenInfiniteScrollListProps<K>) => {
  const {width} = useScreenDimensions();
  const initialItemsAvailable = data.length > 0;

  if (!initialItemsAvailable) {
    return (
      <Box flex={1} centered>
        <Image source={require('../../assets/gifs/loading.gif')} />
      </Box>
    );
  }

  return (
    initialItemsAvailable && (
      <Box flex={1} position="relative">
        {isLoading && (
          <Box
            borderRadius="circle"
            bg="white"
            padding="4"
            position="absolute"
            top={140}
            left={width / 2 - LOADER_SIZE / 2}
            zIndex={2}>
            <Loading size={LOADER_SIZE} />
          </Box>
        )}
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          pagingEnabled
          showsVerticalScrollIndicator={false}
          snapToAlignment="start"
          decelerationRate={'fast'}
          bounces={false}
          viewabilityConfig={viewabilityConfig}
          onViewableItemsChanged={onViewableItemsChanged}
          {...otherProps}
        />
      </Box>
    )
  );
};
