import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const ScreenC = () => {
  const counter = useSelector(state => state.counter);

  return (
    <View>
      <Text>Screen B</Text>
      {/* <Text>Counter: {counter}</Text> */}
    </View>
  );
};

export default ScreenC;
