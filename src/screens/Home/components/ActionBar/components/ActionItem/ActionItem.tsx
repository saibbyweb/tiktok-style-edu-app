import {Column} from '@/components/Column';
import {Typography} from '@/components/Typography';

type ActionItemProps = {
  icon: React.ReactNode;
  label: string | number;
};

export const ActionItem: React.FC<ActionItemProps> = ({icon, label}) => {
  return (
    <Column verticallyCentered horizontallyCentered width={45} gap="2">
      {icon}
      <Typography variant="actionItemLabel">{label}</Typography>
    </Column>
  );
};
