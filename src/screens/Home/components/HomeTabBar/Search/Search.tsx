import MagnifierIcon from '@/assets/icons/magnifier.svg';
import {Column} from '@/components/Column';

export const Search: React.FC = () => {
  return (
    <Column width={62} alignItems="flex-end" verticallyCentered>
      <MagnifierIcon height={18} width={18} />
    </Column>
  );
};
