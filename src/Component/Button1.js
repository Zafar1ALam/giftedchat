import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import { StyleSheet } from 'react-native';
const Button1 = props => {
    return (
        <TouchableOpacity style={[style.touchableopacity, props.style]} onPress={props.onPress}>

            <Text style={style.text}>{props.text}</Text>
        </TouchableOpacity>
    );
};

Button1.propTypes = {

};

export default Button1;
const style = StyleSheet.create({
    touchableopacity: {
        marginBottom: '5%',// marginHorizontal: '5%',
        borderRadius: 12, backgroundColor: '#FFA900', height: 60, justifyContent: 'center'
    },
    text: {
        fontSize: 15, textAlign: "center",
        //FONTFAMILY:GIBSON SEMIBOLD
        color: '#FFFFFF'
    }
});