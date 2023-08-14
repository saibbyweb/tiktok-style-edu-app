import {TextProps as RestyleTextProps, createText} from '@shopify/restyle';
import type {AppTheme} from '@/theme';
import {TEXT_VARIANTS, TextVariants} from '@/theme/elements/textVariants';
import {StyleProp, TextStyle} from 'react-native';
import type {TextProps} from 'react-native';
import {AppThemeFonts, FONTS} from '@/theme/elements/fonts';
import {useAppState} from '@/hooks/useAppState';

type TypographyProps = RestyleTextProps<AppTheme> &
  TextProps & {
    variant?: TextVariants;
    children: string | React.ReactNode;
    style?: StyleProp<TextStyle>;
    typeface?: AppThemeFonts;
  };

const BaseTypography = createText<AppTheme, TypographyProps>();

export const Typography: React.FC<TypographyProps> = ({
  typeface,
  variant,
  style,
  fontSize,
  lineHeight,
  ...rest
}) => {
  const {preferences} = useAppState();
  const {fontScalingFactor} = preferences;
  const shouldScaleFontBasedOnUserPreference = fontScalingFactor !== 1;

  const combinedStyle = [style];

  const originalTextStyle = TEXT_VARIANTS[variant || 'defaults'];

  const baseFontSize =
    (style as TextStyle)?.fontSize || fontSize || originalTextStyle.fontSize;

  if (baseFontSize) {
    const scaledFontSize = shouldScaleFontBasedOnUserPreference
      ? baseFontSize * fontScalingFactor
      : baseFontSize;
    combinedStyle.push({fontSize: scaledFontSize});
  }

  const baseLineHeight =
    (style as TextStyle)?.lineHeight ||
    lineHeight ||
    originalTextStyle.lineHeight;

  if (baseLineHeight) {
    const scaledLineHeight = shouldScaleFontBasedOnUserPreference
      ? baseLineHeight * fontScalingFactor
      : baseLineHeight;

    combinedStyle.push({lineHeight: scaledLineHeight});
  }

  return (
    <BaseTypography
      {...rest}
      style={combinedStyle}
      variant={variant}
      allowFontScaling={!shouldScaleFontBasedOnUserPreference}
      fontFamily={typeface ? FONTS[typeface] : undefined}
    />
  );
};
