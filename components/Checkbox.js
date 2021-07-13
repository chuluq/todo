import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Checkbox = ({ checked, setChecked }) => {
  const onCheckmarkPress = () => {
    setChecked(!checked);
  };

  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={onCheckmarkPress}
    >
      {checked && <Ionicons name='checkmark' size={24} color='white' />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'coral',
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    backgroundColor: 'coral',
  },
});

export default Checkbox;
