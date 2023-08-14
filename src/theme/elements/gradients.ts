import {BASE_COLORS} from '@/theme/elements/colors';

export const BASE_GRADIENTS = {
  darkGradientBackground: {
    colors: [BASE_COLORS.gunmetal, BASE_COLORS.indigoDye],
    start: {x: 0.5, y: 0},
    end: {x: 0.5, y: 1},
  },
  lightGradientBackground: {
    colors: [BASE_COLORS.lightBlue, '#EFF7FA'],
    start: {x: 0.5, y: 0},
    end: {x: 0.5, y: 1},
  },
};

export type Gradients = typeof BASE_GRADIENTS;
