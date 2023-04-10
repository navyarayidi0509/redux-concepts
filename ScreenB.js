import React from 'react';
import { View, Text, TextInput,Button} from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import { setName } from './store';

const ScreenB = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.name);

  const handleSetName = (name) => {
    dispatch(setName(name));
  };

  return (
    <View>
      <Text>Screen B</Text>
      <Text>name: {name}</Text> 
      <TextInput value={name} onChangeText={handleSetName} />
    </View>
  );
};

export default ScreenB;