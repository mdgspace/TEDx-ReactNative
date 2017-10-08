import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        borderRadius: 2,
        borderWidth: 1.33,
        borderColor: '#e5e5e5',
        backgroundColor: '#fff'
    },
    innerContainer1: {
        flexDirection: 'row',
        marginRight: 30
    },
    innerContainer2: {
        flexDirection: 'column',
    },
    name: {
        marginLeft: 12,
        fontSize: 20,
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

const Row = (data) => (
    <View style={styles.container}>
        <View style={styles.innerContainer1}>
            <Text style={styles.name}>
                {`${data.name}`}{'\n'}
            </Text>
        </View>
        <View style={styles.innerContainer2}>
            <Image source={require('./../images/iitr.png')} style={styles.photo} />
        </View>
    </View>
);

export default Row;