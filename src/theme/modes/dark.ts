import {createTheme} from '@shopify/restyle';
import {DARK_COLORS} from '@/theme/elements/colors';
import {baseTheme} from '../baseTheme';

export const darkTheme = createTheme({
  ...baseTheme,
  colors: DARK_COLORS,
});
