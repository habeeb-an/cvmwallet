import { Text, TextProps, TextStyle } from 'react-native';
import React from 'react';
import { colors } from '@src/themes';
interface OWTextProps extends TextProps {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'subtitle'
    | 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'overline';
  typo?: 'bold' | 'regular';
  color?: string;
}
const OWText = ({
  variant,
  color = colors['label'],
  typo = 'regular',
  ...props
}: OWTextProps) => {
  return (
    <Text {...props} style={[useStyle({ variant, color, typo }), props.style]}>
      {props.children}
    </Text>
  );
};

const useStyle = ({ variant, typo, color }: OWTextProps) => {
  let textStyle: TextStyle = {};
  switch (variant) {
    case 'h1':
      textStyle.fontSize = 34;
      textStyle.lineHeight = 50;
      break;
    case 'h2':
      textStyle.fontSize = 28;
      textStyle.lineHeight = 40;
      break;
    case 'h3':
      textStyle.fontSize = 24;
      textStyle.lineHeight = 34;
      break;
    case 'h4':
      textStyle.fontSize = 20;
      textStyle.lineHeight = 28;
      break;
    case 'subtitle':
      textStyle.fontSize = 18;
      textStyle.lineHeight = 26;
      break;
    case 'body1':
      textStyle.fontSize = 16;
      textStyle.lineHeight = 22;
      break;
    case 'body2':
      textStyle.fontSize = 14;
      textStyle.lineHeight = 20;
      break;
    case 'button':
      textStyle.fontSize = 13;
      textStyle.lineHeight = 13;
      break;
    case 'caption':
      textStyle.fontSize = 12;
      textStyle.lineHeight = 12;
      break;
    case 'overline':
      textStyle.fontSize = 11;
      textStyle.lineHeight = 11;
      break;
  }

  switch (typo) {
    case 'bold':
      textStyle.fontWeight = '700';
      textStyle.fontFamily = 'DMSans-Bold';
      break;
    case 'regular':
      textStyle.fontWeight = '400';
      textStyle.fontFamily = 'DMSans-Regular';
      break;
  }
  if (color) textStyle.color = color;
  return textStyle;
};
export default OWText;
