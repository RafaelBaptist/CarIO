import {View, Text, TextInput} from 'react-native';
import React, {useRef} from 'react';
import {createStyles} from './otp.styles';

const OtpComponent = () => {
  const styles = createStyles();
  const inputRef = useRef<Array<TextInput>>(null);
  return (
    <View style={styles.container}>
      {[1, 2, 3, 4]?.map((_, index) => (
        <TextInput key={index} />
      ))}
    </View>
  );
};

export default OtpComponent;
