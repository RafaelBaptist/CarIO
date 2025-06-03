import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import {createStyles} from './signup.styles';
import assets from '../../assets';
import InputComponent from '../../../components/input/component';

import {useSignup} from './signup.hook';
import Button from '../../../components/button/component';
import {goBack, navigate} from '../../navigators/navigation-utilities';
import {renderMarginTop} from '../../utils/ui-utils';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {scale} from '../../theme/scale';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
          placeholder={'Full Name'}
        />
        <InputComponent
          onChangeText={e => console.log(e)}
          placeholder={'Email Address'}
        />

        <InputComponent
          isSecure
          secureTextEntry={isSecure}
          onChangeText={e => console.log(e)}
          placeholder={'Password'}
          onSecurePress={() => setIsSecure(!isSecure)}
        />
        <InputComponent
          onChangeText={e => console.log(e)}
          placeholder={'Country'}
        />
      </View>
      {renderMarginTop(12)}
      <View style={styles.buttonContainer}>
        <Button text="Login" textStyles={styles.buttonText} />
        <Button
          onPress={() => navigate('SignUpScreen')}
          text="Sign Up"
          textStyles={styles.outlineButtonText}
          buttonStyles={styles.outlineButtonBg}
        />{' '}
      </View>
      <View style={styles.borderContainer}>
        <View style={styles.orBorder} />
        <Text style={styles.orText}>Or</Text>
        <View style={styles.orBorder} />
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
          Already have an account?{'\t'}
          <Text onPress={goBack}>Login</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
