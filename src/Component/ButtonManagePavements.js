import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import { StyleSheet } from 'react-native';

const ButtonManagePavements = props => {
    return (
        <TouchableOpacity style={[style.touchableopacity, props.style]} onPress={props.onPress}>

            <Text style={style.text}>{props.text}</Text>
        </TouchableOpacity>
    );
};



export default ButtonManagePavements;
const style = StyleSheet.create({
    touchableopacity: {
        borderColor: '#FFA900',
        borderWidth: 1,
        marginBottom: '5%',// marginHorizontal: '5%',
        borderRadius: 20, backgroundColor: '#FFFFFF',
        height: 60, justifyContent: 'center'
    },
    text: { fontSize: 15, textAlign: "center", color: '#FFA900' }
});