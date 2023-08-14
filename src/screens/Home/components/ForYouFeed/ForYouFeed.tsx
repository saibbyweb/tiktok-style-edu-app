import {ListRenderItem} from 'react-native';
import {useInfiniteFeedScrolling} from '@/hooks/useInifiniteFeedScroll';
import {FullScreenInfiniteScrollList} from '@/components/FullScreenInfiniteScrollList';
import {MultipleChoiceFlashCard} from '../MultipleChoiceFlashCard';
import {
  fetchForYouFeedService,
  MultipleChoiceQuestion,
} from '@/api/forYouFeedService';

export const ForYouFeed: React.FC = () => {
  const {listItems, onViewableItemsChanged, isLoadingAtListEnd} =
    useInfiniteFeedScrolling<MultipleChoiceQuestion>({
      fetchContent: fetchForYouFeedService,
      batchSize: 6,
      loadAheadCount: 3,
      cacheKey: 'for_you',
    });

  const renderItem: ListRenderItem<MultipleChoiceQuestion> = ({item}) => {
    return <MultipleChoiceFlashCard details={item} isTabBarVisible />;
  };

  const keyExtractor = (item: MultipleChoiceQuestion, index: number) =>
    String(item?.id ? item.id + index : index);

  return (
    <FullScreenInfiniteScrollList<MultipleChoiceQuestion>
      isLoading={isLoadingAtListEnd}
      data={listItems}
      renderItem={renderItem}
      onViewableItemsChanged={onViewableItemsChanged}
      keyExtractor={keyExtractor}
      isTabBarVisible
    />
  );
};
