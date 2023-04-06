import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const ScreenC = () => {
  const counter = useSelector(state => state.counter);

  return (
    <View>
      <Text>Screen C</Text>
      <Text>Counter: {counter+1}</Text>
    </View>
  );
};

export default ScreenC;
