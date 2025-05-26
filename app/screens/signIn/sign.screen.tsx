import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import {createStyles} from './signin.styles';
import assets from '../../assets';
import InputComponent from '../../../components/input/component';
import CheckBoxComponent from '../../../components/checkbox/component';
import Button from '../../../components/button/component';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {scale} from '../../theme/scale';
const SignInScreen = () => {
  const styles = createStyles();
  const {logoBlack} = assets;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.flexRow}>
        <Image source={logoBlack} style={styles.carLogo} />
        <Text style={styles.textLogo}>CarIO</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Wellcome Back</Text>
        <Text style={styles.textStyle}>Ready to hit the road.</Text>
      </View>
      <View style={styles.inputContainer}>
        <InputComponent
          onChangeText={e => console.log(e)}
          placeholder={'Email/Phone Number'}
        />
        <InputComponent
          onChangeText={e => console.log(e)}
          placeholder={'Password'}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.colG2}>
        <View style={styles.flexRow}>
          <CheckBoxComponent
            onPress={e => console.log('item', e)}
            isChecked={false}
          />
          <Text style={styles.textRemember}> Remember Me</Text>
        </View>
        <Text style={styles.textRemember}> Forgot Password</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button text="Login" textStyles={styles.buttonText} />
        <Button
          text="Sign Up"
          textStyles={styles.outlineButtonText}
          buttonStyles={styles.outlineButtonBg}
        />
        <View style={styles.borderContainer}>
          <View style={styles.orBorder} />
          <Text style={styles.orText}>Or</Text>
          <View style={styles.orBorder} />
        </View>
      </View>
      <View style={[styles.buttonContainer, styles.mt14]}>
        <Button
          buttonStyles={styles.iconButtonStyle}
          component={<MaterialIcons name="apple" size={scale(24)} />}
          text="Apple Pay"
          textStyles={styles.outlineButtonText}
        />
        <Button
          buttonStyles={styles.iconButtonStyle}
          component={<AntDesign name="google" size={scale(20)} />}
          text="Google Pay"
          textStyles={styles.outlineButtonText}
        />
      </View>
      <View style={styles.accountContainer}>
        <Text style={styles.dhText}>
          Don'have an account ? {'\t'}
          <Text>Sign up</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default SignInScreen;
