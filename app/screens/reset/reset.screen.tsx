import {View, ScrollView, Image, Text} from 'react-native';
import React from 'react';
import {createStyles} from './reset.styles';
import assets from '../../assets';
import {renderMarginBottom, renderMarginTop} from '../../utils/ui-utils';
import InputComponent from '../../../components/input/component';
import Button from '../../../components/button/component';
import {goBack, navigate} from '../../navigators/navigation-utilities';

const ResetScreen = () => {
  const styles = createStyles();
  const {logoBlack} = assets;
  return (
    <View style={styles.container}>
      <View style={styles.flexRow}>
        <Image source={logoBlack} style={styles.carLogo} />
        <Text style={styles.textLogo}>CarIO</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.textContainer}>
          <Text style={[styles.textStyle, styles.textCenter]}>
            Reset your password
          </Text>
          {renderMarginTop(12)}
          <Text style={styles.infoText}>
            Enter the email address associated with your account and
          </Text>
          <Text style={styles.infoText}>
            we'll send you a link to reset your password
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <InputComponent
            onChangeText={e => console.log(e)}
            placeholder={'Email'}
          />
        </View>
        {renderMarginTop(28)}

        <Button
          onPress={() => navigate('VerifyScreen')}
          text="Continue"
          textStyles={styles.outlineButtonText}
          buttonStyles={styles.outlineButtonBg}
        />
        {renderMarginTop(28)}
        <Text
          onPress={() => navigate('SignInScreen')}
          style={[styles.dHText, styles.textCenter]}>
          Return to sign in
        </Text>
      </View>
      <View style={styles.footerText}>
        <Text onPress={goBack} style={[styles.dHText, styles.textCenter]}>
          Create a New Account{' '}
        </Text>
      </View>{' '}
      {renderMarginBottom(32)}{' '}
    </View>
  );
};

export default ResetScreen;
