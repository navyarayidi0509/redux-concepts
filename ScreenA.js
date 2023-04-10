import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setAddress, setName } from './store';

const ScreenA = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.name);
  const address = useSelector(state => state.address);

  // const handleSetName = (name) => {
  //   dispatch(setName(name));
  // };

  return (
    <View>
      <Text>Screen A</Text>
      <Text>Name: {name}</Text>
      {/* <TextInput value={name} onChangeText={handleSetName} /> */}
      <Text>Address: {address}</Text>
    </View>
  );
};

export default ScreenA;