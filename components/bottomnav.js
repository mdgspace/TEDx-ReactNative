import React from 'react';
import {Image} from 'react-native';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'

export default class BottomNav extends React.Component {

  render() {
    return (
      <BottomNavigation
        labelColor="white"
        rippleColor="white"
        style={{ height: 56, elevation: 8, position: 'absolute', left: 0, bottom: 0, right: 0 }}
        /* onTabChange={(newTabIndex) => alert(`New Tab at position ${newTabIndex}`)} */>
        <Tab
          barBackgroundColor="#37474F"
          label="Speakers"
          icon={<Image source={require('./../images/speakers-black.png')} style={{height: 24, width: 22}}/>}
        />
        <Tab
          barBackgroundColor="#00796B"
          label="Schedule"
          icon={<Image source={require('./../images/schedule-black.png')} style={{height: 24, width: 24}}/>}
        />
        <Tab
          barBackgroundColor="#5D4037"
          label="Events"
          icon={<Image source={require('./../images/events-black.png')} style={{height: 24, width: 22.4}}/>}
        />
        <Tab
          barBackgroundColor="#3E2723"
          label="About Us"
          icon={<Image source={require('./../images/about-black.png')} style={{height: 24, width: 19.672}}/>}
        />
      </BottomNavigation>
    );
  }
}