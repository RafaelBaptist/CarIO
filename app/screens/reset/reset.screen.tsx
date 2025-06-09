import {View, ScrollView, Image, Text} from 'react-native';
import React from 'react';
import {createStyles} from './reset.styles';
import assets from '../../assets';
import {renderMarginTop} from '../../utils/ui-utils';
import InputComponent from '../../../components/input/component';
import Button from '../../../components/button/component';
import {navigate} from '../../navigators/navigation-utilities';

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
          onPress={() => navigate('ResetScreen')}
          text="Continue"
          textStyles={styles.outlineButtonText}
          buttonStyles={styles.outlineButtonBg}
        />{' '}
      </View>
    </View>
  );
};

export default ResetScreen;
