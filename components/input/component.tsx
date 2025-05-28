import React from 'react';
import {Image, Pressable, TextInput, View} from 'react-native';
import {createStyles} from './input.styles';
import {colors} from '../../app/theme/colors';
import assets from '../../app/assets';
import {IInputProps} from './input.props';

const InputComponent = ({
  onChangeText,
  secureTextEntry,
  placeholder,
  isSecure,
  onSecurePress,
  keyboardType,
}: IInputProps) => {
  const styles = createStyles();
  const {eye} = assets;

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor={colors.placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
      {isSecure && (
        <Pressable onPress={onSecurePress}>
          <Image source={eye} style={styles.eye} resizeMode="contain" />
        </Pressable>
      )}
    </View>
  );
};

export default InputComponent;
