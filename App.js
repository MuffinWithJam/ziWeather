import React, {Component} from 'react';
import {
  StyleSheet,
  AppRegistry,
  View
} from 'react-native';
import {Provider} from 'react-redux';
import {connect} from 'react-redux';
import store from './app/store/store.js';
import MainContainer from './app/containers/MainContainer';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainContainer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
