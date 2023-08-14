import {Row} from '@/components/Row';
import {Typography} from '@/components/Typography';
import CorrectIcon from '@/assets/icons/check-circle.svg';
import IncorrectIcon from '@/assets/icons/cross-circle.svg';
import React from 'react';
import {AppThemeColors} from '@/theme';
import {TouchableOpacity} from 'react-native';
import {Box} from '@/components/Box';
import {Loading} from '@/components/Loading/Loading';

type OptionProps = {
  id: string;
  content: string;
  correct?: boolean;
  answerRevealed?: boolean;
  selected?: boolean;
  onPress: (optionId: string) => void;
};
/* all possible states */
type OptionStates = 'default' | 'correct' | 'incorrectAndSelected';

type OptionStateProps = {
  backgroundColor: AppThemeColors;
  textColor: AppThemeColors;
  icon: React.ReactNode | null;
};

// Maps each state to its properties
type OptionState = Record<OptionStates, OptionStateProps>;

/* styles for option states */
const OptionStates: OptionState = {
  default: {
    backgroundColor: 'white',
    textColor: 'black',
    icon: null,
  },
  correct: {
    backgroundColor: 'illuminatingEmerald',
    textColor: 'white',
    icon: <CorrectIcon height={20} width={20} />,
  },
  incorrectAndSelected: {
    backgroundColor: 'error',
    textColor: 'white',
    icon: <IncorrectIcon height={20} width={20} />,
  },
};

export const Option: React.FC<OptionProps> = ({
  id,
  content,
  answerRevealed,
  correct,
  selected,
  onPress,
}) => {
  const onOptionPress = () => onPress(id);

  let state: OptionStates = 'default';

  if (answerRevealed) {
    if (correct) {
      state = 'correct';
    } else if (selected) {
      state = 'incorrectAndSelected';
    }
  }

  /*   Get the properties for the current state */
  const {backgroundColor, textColor, icon} = OptionStates[state];

  return (
    <TouchableOpacity
      onPress={onOptionPress}
      activeOpacity={answerRevealed ? 1 : 0.9}>
      <Row
        verticallyCentered
        justifyContent="space-between"
        bg={backgroundColor}
        width={294}
        padding={'12'}
        gap="10"
        borderRadius="MCQOption">
        <Box width={'90%'} pl="6">
          <Typography variant="flashCardOptionLabel" color={textColor}>
            {content}
          </Typography>
        </Box>
        <Box centered width={'10%'}>
          {selected && !answerRevealed && <Loading size={16} />}
          {icon}
        </Box>
      </Row>
    </TouchableOpacity>
  );
};
