import {Column} from '@/components/Column';
import {Row} from '@/components/Row';
import {Typography} from '@/components/Typography';
import {BASE_COLORS} from '@/theme/elements/colors';
import {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {NumberBox} from '../NumberBox/NumberBox';

const numberRatingOptions = [
  {
    label: 1,
    color: BASE_COLORS.princetonOrange,
  },
  {
    label: 2,
    color: BASE_COLORS.mellowApricot,
  },
  {
    label: 3,
    color: BASE_COLORS.mustard,
  },
  {
    label: 4,
    color: BASE_COLORS.unspecifiedGreen,
  },
  {
    label: 5,
    color: BASE_COLORS.illuminatingEmerald,
  },
];

export const KnowledgeRating: React.FC = () => {
  const [rating, setRating] = useState(0);
  const onNumberBoxPress = (num: number) => () => {
    setRating(num);
  };
  return (
    <Column gap="8">
      <Typography
        typeface="SFProRounded400"
        fontSize={15}
        lineHeight={17.9}
        color="white">
        How well did you know this?
      </Typography>
      <Row gap="6">
        {numberRatingOptions.map(option => (
          <TouchableOpacity
            key={option.label}
            onPress={onNumberBoxPress(option.label)}
            activeOpacity={0.8}>
            <NumberBox
              selected={rating === option.label}
              number={option.label}
              bg={option.color}
            />
          </TouchableOpacity>
        ))}
      </Row>
    </Column>
  );
};
