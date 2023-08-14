import {RadioButton} from '../RadioButton';
import {Column} from '../Column';
import {Typography} from '../Typography';
import {Box} from '../Box';

export type RadioFormOption = {
  label: string;
  value: string | number;
};

type RadioFormProps = {
  name: string;
  options: RadioFormOption[];
  selectedValue: number | string;
  onValueChange: (val: string | number) => void;
};

export const RadioForm: React.FC<RadioFormProps> = ({
  options,
  name,
  selectedValue,
  onValueChange,
}) => {
  return (
    <Column gap="10" width={'100%'}>
      <Typography
        fontSize={20}
        lineHeight={27}
        typeface={'SFProRounded500'}
        color="foreground">
        {name}
      </Typography>
      <Box height={1} width={'100%'} bg="illuminatingEmerald" />
      <Column gap="2">
        {options.map(option => {
          const handleOnPress = () => onValueChange(option.value);
          return (
            <RadioButton
              key={option.value}
              label={option.label}
              value={option.value}
              handleOnPress={handleOnPress}
              selectedValue={selectedValue}
            />
          );
        })}
      </Column>
    </Column>
  );
};
