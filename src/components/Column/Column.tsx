import {Box, BoxProps} from '@/components/Box';

export const Column: React.FC<BoxProps> = props => {
  return (
    <Box flexDirection="column" {...props}>
      {props.children}
    </Box>
  );
};
