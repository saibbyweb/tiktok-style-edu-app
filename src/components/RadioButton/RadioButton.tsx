import {TouchableOpacity} from 'react-native';
import {Row} from '../Row';
import {Typography} from '../Typography';
import {Box} from '../Box';
import {Column} from '../Column';

type RadioButtonProps = {
  label: string;
  value: string | number;
  selectedValue: string | number;
  handleOnPress: () => void;
};

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  value,
  selectedValue,
  handleOnPress,
}) => {
  return (
    <Column gap="4" py="8">
      <TouchableOpacity onPress={handleOnPress}>
        <Row gap="4" horizontallyCentered justifyContent="space-between">
          <Typography
            textTransform="capitalize"
            typeface={
              value === selectedValue ? 'SFProRounded500' : 'SFProRounded400'
            }
            color="foreground"
            lineHeight={23}
            fontSize={16}>
            {label}
          </Typography>
          <Box
            borderWidth={0.5}
            borderColor="black"
            height={20}
            width={20}
            borderRadius="circle"
            bg={value === selectedValue ? 'indigoDye' : 'white'}
          />
        </Row>
      </TouchableOpacity>
    </Column>
  );
};
