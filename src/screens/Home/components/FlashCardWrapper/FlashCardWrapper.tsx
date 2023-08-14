import {Box} from '@/components/Box';
import {RemoteImageBackground} from '@/components/RemoteImageBackground';
import {useScreenDimensions} from '@/hooks/useScreenDimensions';
import {useState} from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';

type FlashCardWrapperProps = {
  children: React.ReactNode;
  backgroundImageUrl?: string;
  backgroundImageSource?: ImageSourcePropType;
  isTabBarVisible?: boolean;
  isOverlayEnabled?: boolean;
};

export const FlashCardWrapper: React.FC<FlashCardWrapperProps> = ({
  children,
  isTabBarVisible,
  backgroundImageUrl,
  backgroundImageSource,
  isOverlayEnabled,
}) => {
  const {bottomTabBarAdjustedHeight, height} = useScreenDimensions();
  const containerStyles: StyleProp<ViewStyle> = {
    height: isTabBarVisible ? bottomTabBarAdjustedHeight : height,
    flex: 1,
  };

  const [isImageLoaded, setImageLoaded] = useState(false);
  const handleOnImageLoad = () => setImageLoaded(true);
  /* only show overlay after the image has been loaded */
  const overlay =
    isOverlayEnabled && isImageLoaded ? <Box style={styles.overlay} /> : null;

  const content = (
    <>
      {overlay}
      {children}
    </>
  );

  if (backgroundImageSource) {
    return (
      <ImageBackground
        source={backgroundImageSource}
        style={containerStyles}
        onLoad={handleOnImageLoad}>
        {content}
      </ImageBackground>
    );
  } else if (backgroundImageUrl) {
    return (
      <RemoteImageBackground
        url={backgroundImageUrl}
        style={containerStyles}
        onLoad={handleOnImageLoad}>
        {content}
      </RemoteImageBackground>
    );
  } else {
    return <Box style={containerStyles}>{content}</Box>;
  }
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
});
