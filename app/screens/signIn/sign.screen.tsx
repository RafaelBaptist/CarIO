import {View, Text, Image} from 'react-native';
import React from 'react';
import {createStyles} from './signin.styles';
import assets from '../../assets';
import InputComponent from '../../../components/input/component';
import CheckBoxComponent from '../../../components/checkbox/component';
const SignInScreen = () => {
  const styles = createStyles();
  const {logoBlack} = assets;
  return (
    <View style={styles.container}>
      <View style={styles.flexRow}>
        <Image source={logoBlack} style={styles.carLogo} />
        <Text style={styles.textLogo}>CarIO</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Wellcome Back</Text>
        <Text style={styles.textStyle}>Ready to hit the road.</Text>
      </View>
      <InputComponent
        onChangeText={e => console.log(e)}
        placeholder={'Email/Phone Number'}
      />
      <InputComponent
        onChangeText={e => console.log(e)}
        placeholder={'Password'}
      />
      <View style={[styles.flexRow, styles.colG2]}>
        <View style={styles.flexRow}>
          <CheckBoxComponent
            onPress={e => console.log('item', e)}
            isChecked={false}
          />
          <Text style={styles.textRemember}> Remember Me</Text>
        </View>
        <Text style={styles.textRemember}> Forgot Password</Text>
      </View>
    </View>
  );
};

export default SignInScreen;
