import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import ScreenC from './ScreenC';

const App = () => {
  return (
    <Provider store={store}>
      <ScreenA />
      <ScreenB />
      <ScreenC />
    </Provider>
  );
};

export default App;
