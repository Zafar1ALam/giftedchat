import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Image } from 'react-native'
import STYLES from '../STYLES'
import Button1 from './Button1';


const ImageGamilPrice = props => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <Image source={require('../Images/humanbeing.png')}
                style={STYLES.humanbeingimagestyle} />
            <View style={{ marginLeft: '3%', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 26, color: '#FFA900' }} >@jhondeo</Text>
                <Text style={{ fontSize: 18, color: '#454F63' }} >Price : 999 Rs</Text>
            </View>
        </View>
    );
};



export default ImageGamilPrice;

const style = StyleSheet.create({
    header: {

    },

});