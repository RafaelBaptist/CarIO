import {View, Text, TextInput, Image} from 'react-native';
import React from 'react';
import {createStyles} from './input.styles';
import {colors} from '../../app/theme/colors';
import assets from '../../app/assets';
import {IInputProps} from './input.props';

const InputComponent = ({
  onChangeText,
  secureTextEntry,
  placeholder,
}: IInputProps) => {
  const styles = createStyles();
  const {eye} = assets;
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.placeholder}
        style={styles.input}
        secureTextEntry={true}
        onChangeText={onChangeText}
      />
      {secureTextEntry && <Image source={eye} style={styles.eye} />}
    </View>
  );
};

export default InputComponent;
