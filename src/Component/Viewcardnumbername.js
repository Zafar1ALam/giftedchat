import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
const Viewcardnumbername = props => {
    return (
        <View style={style.viewstyle}>
            <Text style={{
                fontSize: 11, color: '#FFFFFF'
                //FONT FAMILY GIBSON REGULAR
            }}>{props.text1}</Text>
            <Text style={{
                fontSize: 14, color: '#FFFFFF'
                //FONT FAMILY GIBSON SMIBOLD
            }}>{props.text2}</Text>
        </View>
    );
};



export default Viewcardnumbername;

const style = StyleSheet.create({
    viewstyle: {
        flex: 0.6,
        borderRadius: 8,
        paddingVertical: '2%',
        justifyContent: 'space-evenly',
        paddingHorizontal: '4%',
        backgroundColor: '#FFA900'
    },

});