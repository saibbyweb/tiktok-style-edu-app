import {Column} from '@/components/Column';
import {Typography} from '@/components/Typography';
import {AppTheme} from '@/theme';
import {useTheme} from '@shopify/restyle';
import React from 'react';

type QuestionProps = {
  isMCQFlashCard?: boolean;
  body: string;
};
export const Question: React.FC<QuestionProps> = ({body, isMCQFlashCard}) => {
  const theme = useTheme<AppTheme>();
  const style = isMCQFlashCard
    ? {
        padding: 12,
        backgroundColor: theme.colors.translucentBlack,
        borderRadius: theme.borderRadii.numberBox,
      }
    : undefined;
  return (
    <Column verticallyCentered>
      <Typography style={style} variant="flashCardQuestion">
        {body}
      </Typography>
    </Column>
  );
};
