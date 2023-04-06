import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCounter } from './store';

const ScreenA = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  const handleIncrementCounter = () => {
    dispatch(incrementCounter());
  };

  return (
    <View>
      <Text>Screen A</Text>
      <Text>Counter: {counter}</Text>
      <Button title="Increment counter" onPress={handleIncrementCounter} />
    </View>
  );
};

export default ScreenA;
