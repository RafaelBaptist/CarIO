import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {createStyles} from './button.styles';
import {IButtonProps} from './IButton.props';

const Button = ({text, textStyles, buttonStyles}: IButtonProps) => {
  const styles = createStyles();
  return (
    <Pressable style={[styles.container, buttonStyles]}>
      <Text style={[styles.text, textStyles]}>{text}</Text>
    </Pressable>
  );
};

export default Button;
