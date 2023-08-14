import {Column} from '@/components/Column';
import {Typography} from '@/components/Typography';

type CourseTopicProps = {
  course: string;
  topic: string;
};

export const CourseTopic: React.FC<CourseTopicProps> = ({course, topic}) => {
  return (
    <Column verticallyCentered>
      <Typography
        typeface="SFProRounded400"
        fontSize={16}
        lineHeight={19.09}
        color="white">
        {course}
      </Typography>
      <Typography
        typeface="SFProRounded400"
        color="white"
        fontSize={14}
        lineHeight={16.71}>
        {topic}
      </Typography>
    </Column>
  );
};
