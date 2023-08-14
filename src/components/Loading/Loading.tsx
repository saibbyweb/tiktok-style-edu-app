import React from 'react';
import {Image, ImageProps, StyleProp, ViewStyle} from 'react-native';

type LoadingProps = {
  size?: number;
  style?: StyleProp<ViewStyle>;
} & Omit<ImageProps, 'source'>;

export const Loading: React.FC<LoadingProps> = ({
  size = 50,
  style,
  ...props
}) => (
  <Image
    source={require('../../assets/gifs/loading.gif')}
    style={[{width: size, height: size}, style]}
    {...props}
  />
);
