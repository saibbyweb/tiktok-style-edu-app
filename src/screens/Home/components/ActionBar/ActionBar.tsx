import HeartIcon from '@/assets/icons/heart.svg';
import CommentIcon from '@/assets/icons/comment.svg';
import BookmarkIcon from '@/assets/icons/bookmark.svg';
import ShareIcon from '@/assets/icons/share.svg';
import {Column} from '@/components/Column';
import {ActionItem} from './components/ActionItem';
import {ContentUploader} from './components/ContentUploader';

type ActionBarProps = {
  likesCount?: number;
  commentsCount?: number;
  bookmarkCount?: number;
  shareCount?: number;
  userAvatarURL: string;
};

const ActionItemIconSize = 28;

export const ActionBar: React.FC<ActionBarProps> = ({
  likesCount = 9863,
  commentsCount = 105,
  bookmarkCount = 27,
  shareCount = 9,
  userAvatarURL,
}) => {
  return (
    <Column
      overflow="hidden"
      minWidth={45}
      width={'12%'}
      horizontallyCentered
      gap={'18'}
      justifyContent="flex-end">
      <ContentUploader displayPicture={userAvatarURL} />
      <ActionItem
        icon={
          <HeartIcon height={ActionItemIconSize} width={ActionItemIconSize} />
        }
        label={likesCount}
      />
      <ActionItem
        icon={
          <CommentIcon height={ActionItemIconSize} width={ActionItemIconSize} />
        }
        label={commentsCount}
      />
      <ActionItem
        icon={
          <BookmarkIcon
            height={ActionItemIconSize}
            width={ActionItemIconSize}
          />
        }
        label={bookmarkCount}
      />
      <ActionItem
        icon={
          <ShareIcon height={ActionItemIconSize} width={ActionItemIconSize} />
        }
        label={shareCount}
      />
    </Column>
  );
};
