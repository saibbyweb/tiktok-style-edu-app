import React from 'react';
import {Column} from '@/components/Column';
import {Box} from '@/components/Box';
import DividerLine from '@/assets/icons/divider-line.svg';
import {
  TouchableOpacity,
  Animated,
  ScrollView,
  ViewStyle,
  StyleProp,
} from 'react-native';
import {FlashCard} from '@/api/followingFeedService';
import {Question} from '../../../Question';
import {Answer} from '../Answer';
import {KnowledgeRating} from '../KnowledgeRating';
import {CourseTopic} from '../../../CourseTopic';
import {useScreenDimensions} from '@/hooks/useScreenDimensions';
import {useTheme} from '@shopify/restyle';
import {AppTheme} from '@/theme';

type FlashCardContentProps = {
  answerRevealed: boolean;
  content: FlashCard;
  flippingStyles: any;
  toggleOnQuestionPressed: () => void;
};

export const FlashCardContent: React.FC<FlashCardContentProps> = ({
  answerRevealed,
  content,
  flippingStyles,
  toggleOnQuestionPressed,
}) => {
  const theme = useTheme<AppTheme>();
  const {homeTabBarTopMargin, bottomTabBarAdjustedHeight} =
    useScreenDimensions();

  const contentTopMargin = homeTabBarTopMargin + theme.spacing.homeTabBar;

  const contentHeight = bottomTabBarAdjustedHeight - contentTopMargin;

  const containerStyles = {...flippingStyles, width: '84%'};
  const questionContainerStyles = {
    // borderWidth: 1,
    borderColor: 'white',
    flex: 1,
  };

  const scrollViewContentContainerStyles: StyleProp<ViewStyle> = {
    justifyContent: 'flex-start',
  };

  const scrollViewStyles = {
    // borderWidth: 2,
    borderColor: 'pink',
  };
  return (
    <Animated.View style={containerStyles}>
      <Column
        justifyContent={answerRevealed ? 'space-between' : 'center'}
        flex={1}
        // height={'100%'}
        gap="20">
        <TouchableOpacity
          activeOpacity={answerRevealed ? 1 : 0.8}
          style={questionContainerStyles}
          onPress={toggleOnQuestionPressed}>
          <Box flex={1} justifyContent={answerRevealed ? 'flex-end' : 'center'}>
            <Question body={content.flashcard_front} />
          </Box>
        </TouchableOpacity>
        {answerRevealed && (
          <Column height={contentHeight * 0.55} gap="10">
            <ScrollView
              nestedScrollEnabled
              showsVerticalScrollIndicator
              style={scrollViewStyles}
              contentContainerStyle={scrollViewContentContainerStyles}>
              <DividerLine />
              <Box height={20} />
              <Answer body={content.flashcard_back} />
            </ScrollView>
            <Column gap="10">
              <KnowledgeRating />
            </Column>
          </Column>
        )}

        <CourseTopic course={content.user.name} topic={content.description} />
      </Column>
    </Animated.View>
  );
};
