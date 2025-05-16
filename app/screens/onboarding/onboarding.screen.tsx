import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';

import {createStyles} from './onboarding.styles';
import assets from '../../assets';
import Button from '../../../components/button/component';
import {navigate} from '../../navigators/navigation-utilities';

const OnBoardingScreen = () => {
  const styles = createStyles();
  const {carBg, logo, overlayBg, mazda} = assets;
  return (
    <ImageBackground source={mazda} style={styles.container} resizeMode="cover">
      <ImageBackground
        source={overlayBg}
        style={styles.overlay}
        resizeMode="cover">
        <View>
          <View style={styles.logoContainer}>
            <Image source={logo} resizeMode="contain" style={styles.carLogo} />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.title}>Welcome to</Text>
            <Text style={styles.title}>Car IO</Text>
          </View>
        </View>
        <Button
          text="Get Started"
          onPress={() => navigate('OnBoardingScreenTwo')}
          buttonStyles={styles.buttonStyle}
          textStyles={styles.buttonText}
        />
      </ImageBackground>
    </ImageBackground>
  );
};

export default OnBoardingScreen;
