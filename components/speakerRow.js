import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },
  innerContainer1:{
    flexDirection: 'row',
  },
  innerContainer2:{
    flexDirection: 'column',
  },
  name: {
    marginLeft: 12,
    fontSize: 24,
  },
  designation: {
    marginLeft: 12,
    fontSize: 12,
    marginTop: -5,
    color: 'rgba(0, 0, 0, 0.72)',
    marginBottom: 5
  },
  photo: {
    height: 100,
    width: 100,
    borderRadius: 50,
   },
  links: {
    height: 30,
    width: 30,
    marginLeft: 12 
  }
});

const data = [{ "name": "SUSHRUTI KRISHNA", "designation": "Model & Architect", "date": "2017-10-05", "about": "Model, Architect, Classical Dancer and Social worker, Sushruthi Krishna is really the woman extraordinaire. She was crowned the 1st runner up of FBB Femina Miss India 2016 contest. Though an architect by heart, Sushruthi has created something evocative out of beauty pageants. Her dream project Anatta, aptly titled Beauty titled Beauty with a purpose, an endeavor to empower girl child by creating healthy education environment has garnered universal acclaim. Sushruthi’s contagious enthusiasm, unique perspective and unrelenting pursuit for universal girl child education just go on to show her multifaceted genius.", "facebook": "https://www.facebook.com/sharer/sharer.php?u=www.tedxiitroorkee.com%2Findex.php", "linkedin": "https://www.facebook.com/sharer/sharer.php?u=www.tedxiitroorkee.com%2Findex.php", "twitter": "https://www.facebook.com/sharer/sharer.php?u=www.tedxiitroorkee.com%2Findex.php", "profile_pic": null }, { "name": "speaker2", "designation": "eng", "date": "2017-10-05", "about": "dsvfgsadsdartklkqwertyuiop\r\n';ldxcvbnm,vccvxvdfvcgnvhvgxfbcvvzxdfvxcvxf", "facebook": "https://www.facebook.com/sharer/sharer.php?u=www.tedxiitroorkee.com%2Findex.php", "linkedin": "https://www.facebook.com/sharer/sharer.php?u=www.tedxiitroorkee.com%2Findex.php", "twitter": "https://www.facebook.com/sharer/sharer.php?u=www.tedxiitroorkee.com%2Findex.php", "profile_pic": null }, { "name": "jskbd,ams", "designation": "cn.zc,", "date": "2017-10-16", "about": "BM,BMN,NCBVNBMN", "facebook": "http://127.0.0.1:8000/about/", "linkedin": "https://www.facebook.com/sharer/sharer.php?u=www.tedxiitroorkee.com%2Findex.php", "twitter": "https://www.facebook.com/sharer/sharer.php?u=www.tedxiitroorkee.com%2Findex.php", "profile_pic": null }]

const Row = (data) => (
  <View style={styles.container}>
    <View style={styles.innerContainer1}>
    <Image source={require('./../images/iitr.png')} style={styles.photo} />
    </View>
    <View style={styles.innerContainer2}>
    <Text style={styles.name}>
      {`${data.name}`}{'\n'}
    </Text>
    <Text style={styles.designation}>
      {`${data.designation}`}{'\n'}
    </Text>
    <View style={styles.innerContainer1}>
    <TouchableHighlight onPress={()=> this._linkPressed(`${(data.facebook)}`)} ><Image source={require('./../images/fb.png')} style={styles.links} /></TouchableHighlight>
    <TouchableHighlight onPress={()=> this._linkPressed(`${(data.linkedin)}`)} ><Image source={require('./../images/linkedin.png')} style={styles.links} /></TouchableHighlight>
    <TouchableHighlight onPress={()=> this._linkPressed(`${(data.twitter)}`)} ><Image source={require('./../images/fb.png')} style={styles.links} /></TouchableHighlight>

    </View>
    </View> 
    </View>
);
{/*const Row = (props) => (
  <View style={styles.container}>
    <Image source={{ uri: props.image}} style={styles.photo} />
    <Text style={styles.name}>
      {`${props.name}`}
    </Text>
    <Text style={styles.designation}>
      {`${props.designation}`}
    </Text>
    <TouchableHighlight onPress={()=> this._linkPressed(`${(props.fb)}`)} ><Image source={require('./../images/fb.png')} style={styles.links} /></TouchableHighlight>
    <TouchableHighlight onPress={()=> this._linkPressed(`${(props.linkedin)}`)} ><Image source={require('./../images/linkedin.png')} style={styles.links} /></TouchableHighlight>
    <TouchableHighlight onPress={()=> this._linkPressed(`${(props.twitter)}`)} ><Image source={require('./../images/fb.png')} style={styles.links} /></TouchableHighlight> 
    </View>
);*/}

export default Row;