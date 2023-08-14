import {createTheme} from '@shopify/restyle';
import {LIGHT_COLORS} from '@/theme/elements/colors';
import {baseTheme} from '@/theme/baseTheme';

export const lightTheme = createTheme({
  ...baseTheme,
  colors: LIGHT_COLORS,
});
