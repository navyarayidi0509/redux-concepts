import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setAddress } from './store';

const ScreenC = () => {
  const dispatch = useDispatch();
  const address = useSelector(state => state.address);

  const handleSetAddress = (address) => {
    dispatch(setAddress(address));
  };

  return (
    <View>
      <Text>Screen C</Text>
      <Text>Address: {address}</Text>
      <TextInput value={address} onChangeText={handleSetAddress} />
    </View>
  );
};

export default ScreenC;