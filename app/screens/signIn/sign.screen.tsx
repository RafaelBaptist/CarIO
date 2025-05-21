import {View, Text, Image} from 'react-native';
import React from 'react';
import {createStyles} from './signin.styles';
import assets from '../../assets';
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
    </View>
  );
};

export default SignInScreen;
