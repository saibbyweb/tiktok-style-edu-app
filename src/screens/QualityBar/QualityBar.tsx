import {Box} from '@/components/Box';
import {Column} from '@/components/Column';
import {Loading} from '@/components/Loading/Loading';
import {RadioForm} from '@/components/RadioForm';
import {Screen} from '@/components/Screen';
import {Typography} from '@/components/Typography';
import {useAppState} from '@/hooks/useAppState';
import {ScrollView} from 'react-native';
import {fontPreferenceOptions} from './options/fontPreferenceOptions';
import {themePreferenceOptions} from './options/themePreferenceOptions';

export const QualityBar: React.FC = () => {
  const {preferences, updateAppState, isLoadingPersistedState} = useAppState();

  const handlePreferenceChange = async (
    preferenceName: string,
    value: string | number,
  ) => {
    const newPreferences = {
      ...preferences,
      [preferenceName]: value,
    };

    /* update app state */
    updateAppState({preferences: newPreferences});
  };

  const onValueChange = (preferenceName: string) => (value: string | number) =>
    handlePreferenceChange(preferenceName, value);

  if (isLoadingPersistedState) {
    return <Loading size={30} />;
  }

  return (
    <Screen name="Settings" statusBarStyle="dark-content" expandToTopEdge>
      <Box
        flex={1}
        bg={'background'}
        paddingTop={'homeTabBar'}
        px="14"
        gap="16">
        <Column gap="2">
          <Typography
            color="foreground"
            fontSize={24}
            lineHeight={30}
            typeface="SFProRounded600">
            Quality Bar
          </Typography>
          <Typography color="foreground" fontSize={15} lineHeight={20}>
            This isn't a screen from Figma I just created it to demonstrate UI
            quality bar criteria
          </Typography>
        </Column>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Column gap="20">
            <RadioForm
              name="Font Preference"
              options={fontPreferenceOptions}
              selectedValue={preferences.fontScalingFactor}
              onValueChange={onValueChange('fontScalingFactor')}
            />
            <RadioForm
              name="Appearance"
              options={themePreferenceOptions}
              selectedValue={preferences.theme}
              onValueChange={onValueChange('theme')}
            />
          </Column>
        </ScrollView>
      </Box>
    </Screen>
  );
};
