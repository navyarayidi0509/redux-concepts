import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const ScreenB = () => {
  const data = useSelector(state => state.data);

  return (
    <View>
      <Text>Screen B</Text>
      <Text>{data}</Text>
    </View>
  );
};

export default ScreenB;
