import {Row} from '@/components/Row';
import PlaylistIcon from '@/assets/icons/playlist.svg';
import {Typography} from '@/components/Typography';
import RightArrowIcon from '@/assets/icons/right-arrow.svg';

const bgStyle = {backgroundColor: '#161616'};

type PlaylistProps = {
  name: string;
};

export const Playlist: React.FC<PlaylistProps> = ({name}) => {
  return (
    <Row justifyContent="space-between" py={'10'} px={'16'} style={bgStyle}>
      <Row gap={'4'}>
        <PlaylistIcon width={20} height={16} />
        <Typography
          typeface="SFProRounded600"
          fontSize={13}
          lineHeight={15.51}
          color="white">
          Playlist • {name}
        </Typography>
      </Row>
      <RightArrowIcon width={11} height={16} />
    </Row>
  );
};
