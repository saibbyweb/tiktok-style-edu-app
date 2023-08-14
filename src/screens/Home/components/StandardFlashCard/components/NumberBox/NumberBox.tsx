import {Box} from '@/components/Box';
import {Typography} from '@/components/Typography';

type NumberBoxProps = {
  number: string | number;
  bg: string;
  selected: boolean;
};

export const NumberBox: React.FC<NumberBoxProps> = ({number, bg, selected}) => {
  const bgStyle = {backgroundColor: bg};
  return (
    <Box
      style={bgStyle}
      centered
      padding="12"
      height={52}
      width={50.8}
      borderColor="white"
      borderWidth={selected ? 1 : 0}
      borderRadius="numberBox">
      <Typography
        typeface="SFProRounded600"
        fontSize={17}
        lineHeight={20.29}
        color="white">
        {number}
      </Typography>
    </Box>
  );
};
