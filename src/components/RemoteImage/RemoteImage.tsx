import {Image, ImageProps} from 'react-native';

export type RemoteImageProps = Omit<ImageProps, 'source'> & {
  url: string;
};
export const RemoteImage = ({url, style, ...rest}: RemoteImageProps) => {
  return (
    <Image
      source={{
        uri: url,
      }}
      {...rest}
      style={style}
    />
  );
};
