import {BASE_SPACING} from '@/theme/elements/spacing';
import {TEXT_VARIANTS} from '@/theme/elements/textVariants';
import {BASE_COLORS} from '@/theme/elements/colors';
import {BASE_BORDER_RADII} from '@/theme/elements/borderRadii';
import {BASE_GRADIENTS} from '@/theme/elements/gradients';
import {createTheme} from '@shopify/restyle';

export const baseTheme = createTheme({
  colors: BASE_COLORS,
  gradients: BASE_GRADIENTS,
  spacing: BASE_SPACING,
  textVariants: TEXT_VARIANTS,
  borderRadii: BASE_BORDER_RADII,
});
