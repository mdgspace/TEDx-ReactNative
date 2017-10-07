import React from 'react';
import {Image} from 'react-native';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'

export default class BottomNav extends React.Component {
  
  render() {
    return (
      <BottomNavigation
        labelColor="white"
        rippleColor="red"
        style={{ height: 56, elevation: 8, position: 'absolute', left: 0, bottom: 0, right: 0 }}
        /* onTabChange={(newTabIndex) => alert(`New Tab at position ${newTabIndex}`)} */>
        <Tab
          barBackgroundColor="#fff"
          label="Speakers"
          labelColor="black"
          icon={<Image source={require('./../images/speakers-black.png')} style={{height: 24, width: 22}}/>}
        />
        <Tab
          barBackgroundColor="#fff"
          label="Schedule"
          labelColor="black"
          icon={<Image source={require('./../images/schedule-black.png')} style={{height: 24, width: 24}}/>}
        />
        <Tab
          barBackgroundColor="#fff"
          label="Events"
          labelColor="black"
          icon={<Image source={require('./../images/events-black.png')} style={{height: 24, width: 22.4}}/>}
        />
        <Tab
          barBackgroundColor="#fff"
          label="About Us"
          labelColor="black"
          icon={<Image source={require('./../images/about-black.png')} style={{height: 24, width: 19.672}}/>}
        />
      </BottomNavigation>
    );
  }
}

