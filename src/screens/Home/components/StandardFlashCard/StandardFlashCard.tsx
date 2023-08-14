import React, {useState} from 'react';
import {ActionBar} from '../ActionBar';
import {Playlist} from '../Playlist';
import {FlashCard} from '@/api/followingFeedService';
import {FlashCardWrapper} from '../FlashCardWrapper';
import {useFlipAnimation} from '@/hooks/useFlipAnimation';
import {FlashCardContent} from './components/FlashCardContent/FlashCardContent';
import {useScreenDimensions} from '@/hooks/useScreenDimensions';
import {useTheme} from '@shopify/restyle';
import {AppTheme} from '@/theme';
import {Column} from '@/components/Column';
import {Row} from '@/components/Row';

type StandardFlashCardProps = {
  content: FlashCard;
  isTabBarVisible?: boolean;
};

export const StandardFlashCard: React.FC<StandardFlashCardProps> = ({
  isTabBarVisible,
  content,
}) => {
  const theme = useTheme<AppTheme>();
  const [answerRevealed, setAnswerRevealed] = useState(false);
  const {flipAnimation, flippingStyles, ANIMATION_DURATION} =
    useFlipAnimation();

  const toggleOnQuestionPressed = () => {
    flipAnimation();
    setTimeout(() => setAnswerRevealed(s => !s), ANIMATION_DURATION / 2);
  };

  const {homeTabBarTopMargin} = useScreenDimensions();

  const contentTopMargin = homeTabBarTopMargin + theme.spacing.homeTabBar;
  const contentStyles = {paddingTop: contentTopMargin};

  return content ? (
    <FlashCardWrapper isTabBarVisible={isTabBarVisible}>
      <Column flex={1} style={contentStyles}>
        <Row px={'16'} justifyContent="space-between" flex={1} pb="24">
          <FlashCardContent
            answerRevealed={answerRevealed}
            content={content}
            flippingStyles={flippingStyles}
            toggleOnQuestionPressed={toggleOnQuestionPressed}
          />

          <ActionBar userAvatarURL={content.user.avatar} />
        </Row>
        {/* playlist bar sits at the bottom */}
        <Playlist name={content.playlist} />
      </Column>
    </FlashCardWrapper>
  ) : null;
};
