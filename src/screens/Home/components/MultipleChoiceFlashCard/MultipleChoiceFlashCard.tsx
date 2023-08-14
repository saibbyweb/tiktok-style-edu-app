import React, {useCallback} from 'react';
import {ActionBar} from '../ActionBar';
import {Question} from '../Question';
import {Options} from './components/Options';
import {Column} from '@/components/Column';
import {Row} from '@/components/Row';
import {CourseTopic} from '../CourseTopic';
import {Playlist} from '../Playlist';
import type {MultipleChoiceQuestion} from '@/api/forYouFeedService';
import {useRevealMCQAnswer} from '@/hooks/useRevealMCQAnswer';
import {FlashCardWrapper} from '../FlashCardWrapper';

type MultipleChoiceFlashCardProps = {
  details: MultipleChoiceQuestion;
  isTabBarVisible?: boolean;
};

export const MultipleChoiceFlashCard: React.FC<
  MultipleChoiceFlashCardProps
> = ({details, isTabBarVisible}) => {
  const {fetchAnswer, correctOptionIds} = useRevealMCQAnswer(
    String(details.id),
  );

  const onOptionSelect = useCallback(() => {
    /* if correct options, already fetched */
    if (!correctOptionIds) {
      fetchAnswer();
    }
  }, [correctOptionIds, fetchAnswer]);

  return (
    <FlashCardWrapper
      isOverlayEnabled
      isTabBarVisible={isTabBarVisible}
      backgroundImageUrl={details.image}>
      <Column flex={1} gap="16">
        <Row
          px={'2'}
          justifyContent="space-around"
          flex={1}
          alignItems="flex-end">
          {/* question */}
          <Column width={'80%'} justifyContent="center" gap="20" px="6">
            <Question body={details.question} isMCQFlashCard />
            <Options
              options={details.options}
              onOptionSelect={onOptionSelect}
              correctOptionIds={correctOptionIds}
            />
            <CourseTopic
              course={details.user.name}
              topic={details.description}
            />
          </Column>

          <ActionBar
            userAvatarURL={details.user.avatar}
            likesCount={40}
            commentsCount={30}
            bookmarkCount={20}
            shareCount={10}
          />
        </Row>
        <Playlist name={details.playlist} />
      </Column>
    </FlashCardWrapper>
  );
};
