import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CounterApp from './src/CounterApp';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState = {
  counter: 0
}
const reducer = (state = initialState) => {
  return state
}
const store = createStore()


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterApp/>
      </Provider>
    );
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
