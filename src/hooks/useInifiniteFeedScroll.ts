import {useEffect, useState, useRef, useCallback} from 'react';
import {useQuery} from '@tanstack/react-query';
import {ViewToken} from 'react-native';

type InfiniteFeedScrollingConfig<K> = {
  cacheKey: string;
  fetchContent: () => Promise<K>;
  batchSize: number;
  loadAheadCount: number;
};

export const useInfiniteFeedScrolling = <K>({
  fetchContent,
  batchSize,
  loadAheadCount = 3,
  cacheKey,
}: InfiniteFeedScrollingConfig<K>) => {
  const [listItems, setListItems] = useState<K[]>([]);
  const [aboutToReachEnd, setAboutToReachEnd] = useState(false);
  const [isLoadingAtListEnd, setIsLoadingAtListEnd] = useState(false);
  const [fetching, setFetching] = useState(false);
  const listItemsLength = useRef(listItems.length);
  const fetchingRef = useRef(fetching);
  const visibleItemIndex = useRef(0);

  const {refetch: fetchContentFromAPI} = useQuery<K>([cacheKey], fetchContent, {
    enabled: false,
  });

  type SuccessfulAPIResponse<T> = PromiseFulfilledResult<{data: T}>;

  // Updates fetching flag reference
  useEffect(() => {
    fetchingRef.current = fetching;
  }, [fetching]);

  // Updates total items count reference
  useEffect(() => {
    listItemsLength.current = listItems.length;
  }, [listItems]);

  const fetchNewItems = useCallback(async () => {
    setFetching(true);

    const fetchPromises = Array.from({length: batchSize}, _ =>
      fetchContentFromAPI(),
    );

    const settledFetchResults = await Promise.allSettled(fetchPromises);

    const newItems = settledFetchResults
      .filter(settledResult => settledResult.status === 'fulfilled')
      .map(result => (result as SuccessfulAPIResponse<K>).value.data);

    setFetching(false);
    setIsLoadingAtListEnd(false);

    return newItems;
  }, [batchSize, fetchContentFromAPI]);

  // Callback for viewability change
  const onViewableItemsChanged = useRef(
    (info: {viewableItems: ViewToken[]; changed: ViewToken[]}) => {
      visibleItemIndex.current = info.viewableItems[0]?.index || 0;
      const nearEndOfTheList =
        visibleItemIndex.current >= listItemsLength.current - loadAheadCount;
      setAboutToReachEnd(nearEndOfTheList);

      setIsLoadingAtListEnd(
        fetchingRef.current &&
          visibleItemIndex.current === listItemsLength.current - 1,
      );
    },
  );

  /* fetch and load items to flalist data */
  const loadNewItems = useCallback(async () => {
    /*  prevente duplicate fetch */
    if (fetchingRef.current) {
      return;
    }
    const newListItems = await fetchNewItems();
    setListItems(prevData => [...prevData, ...newListItems]);
  }, [fetchNewItems]);

  useEffect(() => {
    // Load items initially
    if (listItemsLength.current === 0) {
      loadNewItems();
      return;
    }

    // Check if we are at the start of the list
    if (visibleItemIndex.current === 0) {
      return;
    }

    // Load more items if we are about to reach the end
    if (aboutToReachEnd) {
      loadNewItems();
    }
  }, [aboutToReachEnd, visibleItemIndex, loadNewItems, listItemsLength]);

  return {
    listItems,
    onViewableItemsChanged: onViewableItemsChanged.current,
    loadNewItems,
    aboutToReachEnd,
    isLoadingAtListEnd,
  };
};
