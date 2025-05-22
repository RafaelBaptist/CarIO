import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import {scale} from '../../app/theme/scale';
import {colors} from '../../app/theme/colors';
import {createStyles} from './checkbox.styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ICheckBoxProps} from './ICheckbox.props';
const CheckBoxComponent = ({
  onPress = () => {},
  isChecked = false,
}: ICheckBoxProps) => {
  const styles = createStyles();
  const [checked, setChecked] = useState(isChecked);
  return (
    <Pressable
      onPress={() => {
        setChecked(!checked);
        onPress(checked);
      }}
      style={styles.container}>
      {checked && (
        <MaterialIcons
          name="check"
          style={styles.checkIcon}
          size={scale(20)}
          color={colors.white}
        />
      )}
    </Pressable>
  );
};

export default CheckBoxComponent;
