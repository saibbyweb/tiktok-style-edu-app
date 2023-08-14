import {ImageBackground, ImageBackgroundProps} from 'react-native';

export type RemoteImageBackgroundProps = Omit<
  ImageBackgroundProps,
  'source'
> & {
  url: string;
};

export const RemoteImageBackground = ({
  url,
  children,
  style,
  ...rest
}: RemoteImageBackgroundProps) => {
  return (
    <ImageBackground source={{uri: url}} {...rest} style={style}>
      {children}
    </ImageBackground>
  );
};
