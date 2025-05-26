import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {createStyles} from './button.styles';
import {IButtonProps} from './IButton.props';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {scale} from '../../app/theme/scale';
const Button = ({
  text,
  textStyles,
  buttonStyles,
  component,
  onPress,
}: IButtonProps) => {
  const styles = createStyles();
  return (
    <Pressable onPress={onPress} style={[styles.container, buttonStyles]}>
      {component}
      <Text style={[styles.text, textStyles]}>{text}</Text>
    </Pressable>
  );
};

export default Button;
