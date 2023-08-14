import {Box} from '@/components/Box';
import {Column} from '@/components/Column';
import {RemoteImage} from '@/components/RemoteImage';
import {ImageStyle, StyleProp} from 'react-native';
import PlusIcon from '@/assets/icons/plus.svg';

type ContentUploaderProps = {
  displayPicture: string;
};
const userAvatarStyles: StyleProp<ImageStyle> = {
  height: '100%',
  width: '100%',
};

export const ContentUploader: React.FC<ContentUploaderProps> = ({
  displayPicture,
}) => {
  return (
    <Column
      position="relative"
      borderRadius="circle"
      borderColor="white"
      borderWidth={1}
      height={45}
      width={45}
      verticallyCentered
      horizontallyCentered>
      <RemoteImage url={displayPicture} style={userAvatarStyles} />
      <Box
        centered
        position="absolute"
        borderRadius="circle"
        bg="lightIlluminatingEmerald"
        height={20}
        width={20}
        bottom={-5}>
        <PlusIcon height={10} width={10} />
      </Box>
    </Column>
  );
};
