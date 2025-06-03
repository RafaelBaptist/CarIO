import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import {createStyles} from './signup.styles';
import assets from '../../assets';
import InputComponent from '../../../components/input/component';

import {useSignup} from './signup.hook';

const SignUpScreen = () => {
  const {logoBlack} = assets;
  const {isSecure, setIsSecure} = useSignup();
  const styles = createStyles();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.flexRow}>
        <Image source={logoBlack} style={styles.carLogo} />
        <Text style={styles.textLogo}>CarIO</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={[styles.textStyle, styles.textCenter]}>Sign Up</Text>
      </View>
      <View style={styles.inputContainer}>
        <InputComponent
          onChangeText={e => console.log(e)}
          placeholder={'Email/Phone Number'}
        />

        <InputComponent
          isSecure
          secureTextEntry={isSecure}
          onChangeText={e => console.log(e)}
          placeholder={'Password'}
          onSecurePress={() => setIsSecure(!isSecure)}
        />
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
