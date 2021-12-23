import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
const Viewexpirescvc = props => {
    return (
        <View style={style.viewstyle}>
            <Text style={{
                fontSize: 11, color: '#FFFFFF'
                //FONT FAMILY GIBSON REGULAR
            }}>{props.text1}</Text>
            <Text style={{
                fontSize: 13, color: '#FFFFFF'
                //FONT FAMILY GIBSON SMIBOLD
            }}>{props.text2}</Text>
        </View>
    );
};



export default Viewexpirescvc;

const style = StyleSheet.create({
    viewstyle: {
        flex: 0.3,
        borderRadius: 8,
        justifyContent: 'space-evenly',
        paddingHorizontal: '4%',
        backgroundColor: '#FFA900'
    },

});