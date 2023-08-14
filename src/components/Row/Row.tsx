import {Box, BoxProps} from '@/components/Box';

export const Row: React.FC<BoxProps> = props => {
  return (
    <Box flexDirection="row" {...props}>
      {props.children}
    </Box>
  );
};
