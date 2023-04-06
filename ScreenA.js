import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { updateData } from './store';

const ScreenA = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateData('new data'));
  }, [dispatch]);

  return (
    <View>
      <Text>Screen A</Text>
    </View>
  );
};

export default ScreenA;
