import {Column} from '@/components/Column';
import {Typography} from '@/components/Typography';

type AnswerProps = {
  body: string;
};

export const Answer: React.FC<AnswerProps> = ({body}) => {
  return (
    <Column gap="4" overflow="hidden">
      <Typography variant="standardFlashCardAnswer" color="illuminatingEmerald">
        Answer
      </Typography>
      <Typography variant="flashCardQuestion">{body}</Typography>
    </Column>
  );
};
