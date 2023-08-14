import {ListRenderItem} from 'react-native';
import {FlashCard, fetchFollowingFeedContent} from '@/api/followingFeedService';
import {StandardFlashCard} from '../StandardFlashCard';
import {useInfiniteFeedScrolling} from '@/hooks/useInifiniteFeedScroll';
import {FullScreenInfiniteScrollList} from '@/components/FullScreenInfiniteScrollList';

export const FollowingFeed: React.FC = () => {
  const {listItems, onViewableItemsChanged, isLoadingAtListEnd} =
    useInfiniteFeedScrolling<FlashCard>({
      fetchContent: fetchFollowingFeedContent,
      batchSize: 6,
      loadAheadCount: 3,
      cacheKey: 'following',
    });

  const renderItem: ListRenderItem<FlashCard> = ({item}) => {
    return <StandardFlashCard content={item} isTabBarVisible={true} />;
  };

  const keyExtractor = (item: FlashCard, index: number) =>
    String(item?.id ? item.id + index : index);

  return (
    <FullScreenInfiniteScrollList<FlashCard>
      isLoading={isLoadingAtListEnd}
      data={listItems}
      renderItem={renderItem}
      onViewableItemsChanged={onViewableItemsChanged}
      keyExtractor={keyExtractor}
      isTabBarVisible
    />
  );
};
