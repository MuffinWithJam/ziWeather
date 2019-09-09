import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

export default class LocationButton extends Component {
  render() {
    return (
        <TouchableHighlight
          onPress={this.props.uiActions.openSearch}
          underlayColor="transparent"
          style={styles.locationButton}>
          <EvilIcons name="location" size={40} color="white" />
        </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  locationButton: {
    position: 'absolute',
    justifyContent: 'center',
    flex: 1,
    top: 30,
    right: 0,
    width: 50,
    height: 50,
  }
});
