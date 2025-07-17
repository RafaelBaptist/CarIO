import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import {createStyles} from './home.styles';
import assets from '../../assets';
import Octicons from 'react-native-vector-icons/Octicons';
import {scale} from '../../theme/scale';

const HomeScreen = () => {
  const {logoBlack} = assets;
  const styles = createStyles();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.flexRow}>
          <Image source={logoBlack} style={styles.carLogo} />
          <Text style={styles.titleStyle}>CarIO</Text>
        </View>
        <View>
          <Octicons name="bell" size={scale(28)} />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
