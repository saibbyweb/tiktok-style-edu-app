import {TextStyle} from 'react-native';
import {FONTS} from './fonts';

export type TextVariantKeys =
  | 'defaults'
  | 'flashCardQuestion'
  | 'flashCardOptionLabel'
  | 'actionItemLabel'
  | 'standardFlashCardAnswer';

type TextVariantsRecord = {
  [key in TextVariantKeys]: TextStyle;
};

export const TEXT_VARIANTS: TextVariantsRecord = {
  defaults: {
    fontSize: 16,
    fontFamily: FONTS.SFProRounded400,
    color: 'black',
  },
  flashCardQuestion: {
    color: 'white',
    fontSize: 22,
    lineHeight: 26.25,
    fontFamily: FONTS.SFProRounded600,
  },
  flashCardOptionLabel: {
    fontFamily: FONTS.SFProRounded400,
    fontSize: 17,
    lineHeight: 20.29,
  },
  actionItemLabel: {
    fontSize: 12,
    lineHeight: 14.32,
    textAlign: 'center',
    fontFamily: FONTS.SFProRounded500,
    color: 'white',
  },
  standardFlashCardAnswer: {
    fontSize: 15,
    lineHeight: 15.51,
    fontFamily: FONTS.SFProRounded800,
  },
};

export type TextVariants = keyof typeof TEXT_VARIANTS;
