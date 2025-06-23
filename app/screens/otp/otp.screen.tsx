import React from 'react';
import {Image, Text, View} from 'react-native';
import assets from '../../assets';
import {renderMarginTop} from '../../utils/ui-utils';
import InputComponent from '../../../components/input/component';
import Button from '../../../components/button/component';
import {navigate} from '../../navigators/navigation-utilities';
import {createStyles} from './otp.styles';
import OtpComponent from '../../../components/otp/component';

const OtpScreen = () => {
  const styles = createStyles();
  const {logoBlack} = assets;

  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <View style={styles.flexRow}>
          <Image source={logoBlack} style={styles.carLogo} />
          <Text style={styles.titleStyle}>CarIO</Text>
        </View>
        <View style={styles.main}>
          <View style={styles.textContainer}>
            <Text style={[styles.textStyle, styles.textCenter]}>
              Enter verification code
            </Text>
            {renderMarginTop(28)}
            <Text style={styles.infoText}>
              We have send a Code to: +100*****0
            </Text>
            {renderMarginTop(12)}
          </View>
          <View style={styles.inputContainer}>
            <OtpComponent />
          </View>
          {renderMarginTop(28)}
          <Button
            onPress={() => navigate('OtpScreen')}
            text="Continue"
            textStyles={styles.buttonText}
          />
          {renderMarginTop(28)}
          <Text
            onPress={() => navigate('SignInScreen')}
            style={[styles.dontHaveText, styles.textCenter]}>
            Didn't receive the OTP ? <Text> Resend.</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OtpScreen;
