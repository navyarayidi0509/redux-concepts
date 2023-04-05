import React from 'react';
import { View, Text, AppRegistry } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import { buyGroceries, buyVeggies, restockGroceries, restockVeggies } from './action';
import rootReducer from './reducer'; // Import the rootReducer from the reducer.js file

// Map state to props
const mapStateToProps = (state) => {
  return {
    numOfGroceries: state.groceries.numOfGroceries,
    numOfVeggies: state.veggies.numOfVeggies,
  };
};

// Map dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    buyGroceries: () => dispatch(buyGroceries()),
    buyVeggies: () => dispatch(buyVeggies()),
    restockGroceries:()=>dispatch(restockGroceries()),
    restockVeggies:()=>dispatch(restockVeggies())
  };
};

// Connected App component
class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Number of groceries: {this.props.numOfGroceries}</Text>
        <Text>Number of veggies: {this.props.numOfVeggies}</Text>
        <Text onPress={this.props.buyGroceries}>Buy groceries</Text>
        <Text onPress={this.props.buyVeggies}>Buy veggies</Text>
        <Text onPress={this.props.restockGroceries}>restock groceries</Text>
        <Text onPress={this.props.restockVeggies}>restock veggies</Text>
      </View>
    );
  }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

// Register the app
AppRegistry.registerComponent('MyApp', () => ConnectedApp);

// Wrap the app with the Provider component
const ReduxApp = () => (
  <Provider store={createStore(rootReducer)}>
    <ConnectedApp />
  </Provider>
);

export default ReduxApp;
