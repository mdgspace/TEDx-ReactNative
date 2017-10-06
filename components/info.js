import React from 'react';
import { StyleSheet, Text, View, Platform, TouchableHighlight, TouchableNativeFeedback, Image } from 'react-native';

export default class InfoScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Image source={require('./../images/speakers-red.png')} style={styles.icons} />
                    <TouchableHighlight>
                    <View style={styles.textholderview}><Text style={styles.text}>SPONSORS</Text></View>
                    </TouchableHighlight>
                </View>
                <View style={{
                    flex: 1,
                    alignItems: 'flex-start',
                    flexDirection: 'row',
                    justifyContent: 'space-around', backgroundColor: 'yellow'
                }}>
                    <Image source={require('./../images/speakers-red.png')} style={styles.icons} />
                    <TouchableHighlight>
                       <View style={styles.textholderview}><Text style={styles.text}>TEAM</Text></View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0.2,
        marginTop: 40,
        backgroundColor: '#fff',

    },
    row: {
        flex: 1,
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'blue'
    },
    icons: {
        flex: 0.2,
        height: 20,
        width: 20,
        flexDirection: 'row',
        alignSelf: 'center',
        marginLeft: 10
    },
    text: {
        flex: 1,
        alignSelf: 'center',        
        marginLeft: 50,
        marginRight: 40
    },
    textholderview:{
        flex: 1,
        marginTop: 10,
        alignSelf: 'auto',
    }
});
