import {useState} from 'react';
import {Option} from '../Option';
import {Column} from '@/components/Column';

export type OptionData = {
  id: string;
  answer: string;
};

type OptionsProps = {
  options: OptionData[];
  onOptionSelect: () => void;
  correctOptionIds?: string[];
};

export const Options: React.FC<OptionsProps> = ({
  options,
  onOptionSelect,
  correctOptionIds,
}) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string>('');

  const handleOptionTap = (optionId: string) => {
    if (selectedOptionId) {
      return;
    }
    setSelectedOptionId(optionId);
    onOptionSelect();
  };

  return (
    options && (
      <Column gap="8">
        {options.map(option => (
          <Option
            key={option.id}
            id={option.id}
            onPress={handleOptionTap}
            content={option.answer}
            answerRevealed={Boolean(correctOptionIds)}
            selected={selectedOptionId === option.id}
            correct={correctOptionIds && correctOptionIds.includes(option.id)}
          />
        ))}
      </Column>
    )
  );
};
