import {darkTheme} from '@/theme/modes/dark';
import {lightTheme} from '@/theme/modes/light';

/* app theme type */
export type AppTheme = typeof lightTheme;
export type AppThemeColors = keyof AppTheme['colors'];

/* theme mapping */
export const themeMap = {
  light: lightTheme,
  dark: darkTheme,
};

/* theme map keys */
export type ThemeMode = keyof typeof themeMap;
export const ThemeKeys = Object.keys(themeMap);

/* get the theme based on the mode */
export function getTheme(mode: ThemeMode): AppTheme {
  return themeMap[mode] || lightTheme;
}
