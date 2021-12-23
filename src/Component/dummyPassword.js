import React, { useContext, useState } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Text
} from 'react-native';

import RNPasswordStrengthMeter from 'react-native-password-strength-meter';
import { cc } from '../Context'

const DummyPassword = props => {
    const { passwordComeFromChildComponent, displayPasswordError } = useContext(cc)

    onChange = (password, score, { label, labelColor, activeBarColor }) => {

        passwordComeFromChildComponent(password)

    }



    return (
        //  <View style={styles.container}>
        <>
            <RNPasswordStrengthMeter
                containerWrapperStyle={style.container}
                onChangeText={onChange}
            //  meterType="bar"
            />
            <Text style={{ fontSize: 15, color: 'red', display: displayPasswordError }}>Please Enter Password</Text>
        </>
    );
};



export default DummyPassword;

const style = StyleSheet.create({
    container: {
        elevation: 5, shadowColor: '#455B63',
        height: 60,
        // borderRadius: 12,
        color: 'rgba(120,132,158,0.56)',
        fontSize: 15,
        //   fontFamily:'GIBSON' SEMIBOLD
        //paddingLeft: '5%',
        // borderWidth: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
    },
    imagewrapper: {
        backgroundColor: 'green',
    },
    imageStyle: {
        height: 200
    },
    placeholderStyle: { fontSize: 40 }
});