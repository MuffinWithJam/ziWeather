import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Animated,
} from 'react-native';
import {
  SearchBar
} from 'react-native-elements';

export default class SearchModal extends Component {
  //Local states for animations
  state = {
    barPos: new Animated.Value(-80),
    opacity: new Animated.Value(0),
    cities: [],
  }

  componentWillUpdate(nextProps, nextState) {
    if(nextProps.value && this.props.value) {
        if (nextProps.value.length > this.props.value.length && this.state.cities.length < 20 && this.state.cities.length > 0) {
            let newCities = [];
            this.state.cities.forEach(function(city) {
                if (city.startsWith(nextProps.value)) {
                    newCities.push(city);
                }
            });
            this.setState({cities: newCities});
            console.log("Changing internal array...");
        }
        else if (nextProps.value.length >= 3 && this.props.value != nextProps.value) {
            var url = "http://gd.geobytes.com/AutoCompleteCity?q=" + nextProps.value;
            fetch(url)
                .then(res => res.json())
                .then(responseText => this.setState({cities: responseText}))
                .catch(err => console.log(err));
            console.log("Made request");
        }
    }
  }

  render() {
    let {barPos} = this.state.barPos;
    let {opacity} = this.state.opacity;

    if(this.props.opened) {
      Animated.parallel([
        Animated.timing( this.state.opacity, {
            toValue: 1000,
            duration: 300,
          }),
        Animated.timing( this.state.barPos, {
            toValue: 1000,
            duration: 300,
          })
      ]).start();

      return (
        <Animated.View style={[styles.main, {
            backgroundColor:
              this.state.opacity.interpolate({
              inputRange: [0, 1000],
              outputRange: ['#00000000', '#000000aa'],
              })
          }]}>
          <Animated.View style={[styles.searchBarContainer, {
            marginTop:
              this.state.barPos.interpolate({
              inputRange: [0, 1000],
              outputRange: [-80, 0],
              })
          }]}>
            <SearchBar
              round
              clearIcon = {{ color: '#86939e', style: {fontSize: 24, marginTop: -5}}}
              onChangeText={(text) => {this.props.uiActions.updateSearch(text)}}
              onClearText={() => {this.props.uiActions.closeSearch(); this.setState({cities: []})}}
              containerStyle={{
                borderTopWidth: 0,
                borderBottomWidth: 0,
              }}
              placeholder='City...'
              value={this.props.value}/>
          </Animated.View>
        </Animated.View>
      );
    }
    else {
      Animated.parallel([
        Animated.timing( this.state.opacity, {
          toValue: 0,
          duration: 300,
        }),
        Animated.timing( this.state.barPos, {
          toValue: 0,
          duration: 300,
        })
      ]).start(() => {
        console.log('123');
        return(
          <View pointerEvents="none"></View>
        );
      });

      return (
        <Animated.View pointerEvents="none" style={[styles.main, {
            backgroundColor:
              this.state.opacity.interpolate({
              inputRange: [0, 1000],
              outputRange: ['#00000000', '#000000bb'],
              })
          }]}>
          <Animated.View style={[styles.searchBarContainer, {
            marginTop:
              this.state.barPos.interpolate({
              inputRange: [0, 1000],
              outputRange: [-80, 0],
              })
          }]}>
            <SearchBar
              round
              clearIcon
              onChangeText={() => {}}
              onClearText={() => {}}
              containerStyle={{
                borderTopWidth: 0,
                borderBottomWidth: 0,
              }}
              placeholder='City...'/>
          </Animated.View>
        </Animated.View>
      );
    }
  }
}

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  searchBarContainer: {
    backgroundColor: '#393E42',
    paddingTop: 30,
  },
});