import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const ScreenC = () => {
  const data = useSelector(state => state.data);

  return (
    <View>
      <Text>Screen C</Text>
      <Text>{data}</Text>
    </View>
  );
};

export default ScreenC;
