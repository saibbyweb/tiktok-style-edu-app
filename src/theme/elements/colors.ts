/* common colors that are the same in both light and dark themes */
export const BASE_COLORS = {
  illuminatingEmerald: '#1F8A70',
  indigoDye: '#00425A',
  mustard: '#FFD449',
  lightIlluminatingEmerald: '#28B18F',
  princetonOrange: '#F17D23',
  mellowApricot: '#FBB668',
  white: '#FFFFFF',
  robinEggBlue: '#34CBC2',
  darkGoldenrod: '#BB8F00',
  prussianBlue: '#003A4F',
  gunmetal: '#002634',
  aliceBlue: '#DCE8EB',
  lightBlue: '#D5EAF2',
  black: '#000000',
  /* unspecified (used in rating boxes in flashcard) */
  unspecifiedGreen: '#16624F',
  translucentBlack: 'rgba(0,0,0,0.46)',
};

/* specific to the light theme */
export const LIGHT_COLORS = {
  ...BASE_COLORS,
  background: '#FFFFFF',
  error: '#D84E4E',
  foreground: '#111111',
};

/*  specific to the dark theme */
export const DARK_COLORS = {
  ...BASE_COLORS,
  background: '#000000',
  error: '#DC5F5F',
  foreground: '#FFFFFF',
};
