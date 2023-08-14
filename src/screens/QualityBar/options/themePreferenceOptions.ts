import {RadioFormOption} from '@/components/RadioForm';
import {ThemeKeys} from '@/theme';

const ThemeOptions: RadioFormOption[] = ThemeKeys.map(key => ({
  label: key + ' Mode',
  value: key,
}));

export const themePreferenceOptions: RadioFormOption[] = [
  {
    label: 'System Preference',
    value: 'default',
  },
  ...ThemeOptions,
];
