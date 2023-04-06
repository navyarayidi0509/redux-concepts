import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import ScreenC from './ScreenC';

const App = () => {
  return (
    <Provider store={store}>
      <ScreenA initialName="navya" initialAddress="123 "/>
      <ScreenB />
      <ScreenC />
    </Provider>
  );
};

export default App;
