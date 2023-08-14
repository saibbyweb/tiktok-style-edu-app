import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import type {ViewStyle} from 'react-native';
import {AppTheme} from '@/theme';
import {useTheme} from '@shopify/restyle';

type GradientBoxProps = {
  type: keyof AppTheme['gradients'];
  children?: React.ReactNode;
} & ViewStyle;

export const GradientBox: React.FC<GradientBoxProps> = ({
  type,
  children,
  ...styleProps
}) => {
  const theme = useTheme<AppTheme>();
  const gradient = theme.gradients[type];

  return (
    <LinearGradient
      colors={gradient.colors}
      start={gradient.start}
      end={gradient.end}
      style={styleProps} // Spread style props directly
    >
      {children}
    </LinearGradient>
  );
};
