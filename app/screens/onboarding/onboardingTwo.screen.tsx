import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';

import {createStyles} from './onboarding.styles';
import assets from '../../assets';
import Button from '../../../components/button/component';
import {navigate} from '../../navigators/navigation-utilities';

const OnBoardingScreenTwo = () => {
  const styles = createStyles();
  const {carBg, logo, overlayBg, carTwo} = assets;
  return (
    <ImageBackground
      source={carTwo}
      style={styles.container}
      resizeMode="cover">
      <ImageBackground
        source={overlayBg}
        style={styles.overlay}
        resizeMode="cover">
        <View>
          <View style={styles.logoContainer}>
            <Image source={logo} resizeMode="contain" style={styles.carLogo} />
          </View>

          <View style={styles.textContainer}>
            <Text style={[styles.title, styles.title2]}>Lets start </Text>
            <Text style={[styles.title, styles.title2]}>A New Experience </Text>
            <Text style={[styles.title, styles.title2]}>With Car rental.</Text>
          </View>
        </View>
        <View>
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoText}>
              Discover your next adventure with CarIO.we're here to
            </Text>
            <Text style={styles.infoText}>
              provide you with a seamless car rental experience.
            </Text>
            <Text style={styles.infoText}>
              Let's get started on your jorney
            </Text>
          </View>
          <Button
            text="Get Started"
            onPress={() => navigate('SignInScreen')}
            buttonStyles={styles.buttonStyle}
            textStyles={styles.buttonText}
          />{' '}
        </View>
      </ImageBackground>
    </ImageBackground>
  );
};

export default OnBoardingScreenTwo;
