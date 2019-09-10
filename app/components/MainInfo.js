import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default class MainInfo extends Component {
  state = {
      location: null,
      errorMessage: null,
  }

  componentDidMount() {
      if (Platform.OS === 'android' && !Constants.isDevice) {
          this.setState({
              errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
          });
      } else {
          this._getLocationAsync();
      }
  }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }

        let location = await Location.getCurrentPositionAsync({});
        this.props.infoActions.getMainInfoFromGeo(location.coords.latitude, location.coords.longitude)
        this.setState({ location });
    };

  render() {
    let geoIcon = "";
    if (this.props.isGeo)
        geoIcon = <Feather name="navigation" size={24} color="white" />;

    return (
      <View style={styles.mainInfo}>
        <Text style={styles.city}>{this.props.currentWeather.city} {geoIcon}</Text>
        <Text style={styles.temperature}>{this.props.currentWeather.temperature}°C</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainInfo: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: 20,
    paddingTop: 20,
  },
  city: {
    color: '#eee',
    fontSize: 34,
    fontFamily: 'HelveticaNeue-Medium',
    paddingLeft: 10,
  },
  temperature: {
    color: '#eee',
    fontSize: 100,
    fontFamily: 'HelveticaNeue-UltraLight',
  },
});
