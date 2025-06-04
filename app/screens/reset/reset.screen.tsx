import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import {createStyles} from './reset.styles';
import assets from '../../assets';

const ResetScreen = () => {
  const styles = createStyles();
  const {logoBlack} = assets;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.flexRow}>
        <Image source={logoBlack} style={styles.carLogo} />
        <Text style={styles.textLogo}>CarIO</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.textStyle, styles.textCenter]}>Sign Up</Text>
      </View>
      {'   '}
    </ScrollView>
  );
};

export default ResetScreen;
