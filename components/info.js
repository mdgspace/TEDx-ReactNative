import React from 'react';
import { StyleSheet, Text, View, Image, Linking, TouchableWithoutFeedback } from 'react-native';

export default class InfoScreen extends React.Component {
static navigationOptions = {header: null };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={styles.iconholder}>
                        <Image source={require('./../images/sponsors.png')} style={styles.icons} />
                    </View>
                    <View style={styles.textholderview}>
                        <Text style={styles.text} onPress={() => navigate('sponsors')}>
                            Sponsors
                        </Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.iconholder}>
                        <Image source={require('./../images/team.png')} style={styles.icons} />
                    </View>
                    <View style={styles.textholderview}>
                        <Text style={styles.text} onPress={() => navigate('team')}>
                            Team
                        </Text>
                    </View>
                </View>
                <View style={styles.follow}>
                    <View style={{ backgroundColor: '#fff', flex: 0.3, flexDirection: 'row', alignSelf: 'flex-start', marginLeft: 15 }}>
                        <View style={{ backgroundColor: '#fff', flex: 1 }}>
                            <Text style={{ fontSize: 25 }}>Follow Us</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#fff', flex: 0.7, flexDirection: 'row', alignSelf: 'flex-start', marginTop: 9 }}>
                        <View style={{ flex: 1, marginLeft: 40, flexDirection: 'row' }}>
                            <TouchableWithoutFeedback onPress={() => Linking.openURL(`${(this.props.facebook)}`)} ><Image source={require('./../images/fb.png')} style={styles.social} /></TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => Linking.openURL(`${(this.props.linkedin)}`)} ><Image source={require('./../images/linkedin.png')} style={styles.social} /></TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => Linking.openURL(`${(this.props.twitter)}`)} ><Image source={require('./../images/twitter.png')} style={styles.social} /></TouchableWithoutFeedback>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0.45,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        borderRadius: 2,
        borderWidth: 1.33,
        borderColor: '#e5e5e5',
        margin: 20
    },
    row: {
        flex: 0.5,
        flexDirection: 'row',
        backgroundColor: '#fff',
        margin: 10,
        marginTop: 0,
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(0,0,0,0.3)'
    },
    icons: {
        height: 36,
        width: 36
    },
    text: {
        fontSize: 20,
    },
    textholderview: {
        flex: 0.8,
        alignItems: 'flex-start',
        alignSelf: 'center',
    },
    iconholder: {
        flex: 0.2,
        padding: 5,
        alignItems: 'center',
        alignSelf: 'center'
    },
    follow: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'space-around'
    },
    social:{
        width: 48,
        height: 48,
        marginRight: 15
    }
});
