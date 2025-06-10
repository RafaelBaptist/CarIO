import React from 'react';
import {Image, Text, View} from 'react-native';
import assets from '../../assets';
import {renderMarginTop} from '../../utils/ui-utils';
import InputComponent from '../../../components/input/component';
import Button from '../../../components/button/component';
import {navigate} from '../../navigators/navigation-utilities';
import {createStyles} from './verify.styles';
import CountryComponent from '../../../components/countrypicker/component';

const VerifyScreen = () => {
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
              Verify your phone number
            </Text>
            {renderMarginTop(12)}
            <Text style={styles.infoText}>
              We have sent you an SMS with a code to number
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <CountryComponent onPress={e => console.log(e)} />

            <InputComponent
              keyboardType="numeric"
              onChangeText={e => console.log(e)}
              placeholder={'Phone Number'}
            />
          </View>
          {renderMarginTop(28)}
          <Button
            onPress={() => navigate('OtpScreen')}
            text="Continue"
            textStyles={styles.buttonText}
          />
          {renderMarginTop(28)}
        </View>
      </View>
    </View>
  );
};

export default VerifyScreen;
