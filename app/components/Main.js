import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import VerticalViewPager from 'react-native-vertical-view-pager';
import MainInfo from '../components/MainInfo';
import LocationButton from '../components/LocationButton';
import SearchModal from '../components/SearchModal';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default class Main extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View
          style={styles.backgroundImageContainer}>
        <Image
          style={styles.backgroundImage}
          source={require('../img/bg_rain.png')} />
        </View>
        <View
          style={styles.backgroundImageContainer}>
          <Image
            style={[styles.backgroundImage, {opacity: 0.5}]}
            source={require('../img/gradient.png')} />
        </View>

        <VerticalViewPager
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={[0]}
          bounces={false}>
          <View style={styles.mainInfo} onPress>
            <MainInfo currentWeather={this.props.mainInfoState.currentWeather}
                      uiActions={this.props.uiActions}
                      infoActions={this.props.infoActions}
                      isGeo={this.props.mainInfoState.currentWeather.isGeo}/>
          </View>
          <View style={styles.moreInfo}>
            <Text>INFO SCREEN</Text>
          </View>
        </VerticalViewPager>

        <LocationButton uiActions={this.props.uiActions} />

        <SearchModal opened={this.props.uiState.searchState.opened}
                     value={this.props.uiState.searchState.text}
                     uiActions={this.props.uiActions}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignSelf: 'stretch',
    padding: 0,
  },
  backgroundImageContainer: {
    position: 'absolute',
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'stretch',
  },
  contentContainer: {
    alignSelf: 'stretch',
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: 'red',
    alignItems:'stretch',
  },
  mainInfo: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: width,
    height: height*2/5,
    marginTop: height*3/5,
    paddingTop: 8,
    //borderWidth: 1,
    //borderColor: 'yellow',
  },
  moreInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height*3/5,
    marginTop: height*2/5,
    //borderWidth: 1,
    //borderColor: 'yellow',
  },
});
