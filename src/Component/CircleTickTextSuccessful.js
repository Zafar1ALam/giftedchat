import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
import SVG, { Path } from 'react-native-svg'
import STYLES from '../STYLES';
const CircleTickTextSuccessful = props => {
    return (
        <View style={style.viewstyle}>
            <View style={{
                height: 80, width: 80, borderRadius: 153,
                backgroundColor: '#FFA900', justifyContent: 'center',
                alignItems: "center", marginBottom: '3%'
            }}>

                <SVG width="35.498" height="24.203" viewBox="0 0 35.498 24.203">
                    <Path id="check-1" d="M2.754,10.154A1.613,1.613,0,1,0,.473,12.436l11.3,11.295a1.614,1.614,0,0,0,2.282,0L35.026,2.754A1.613,1.613,0,1,0,32.744.473L12.909,20.308Z" transform="translate(35.498 24.203) rotate(180)" fill="#fff" />
                </SVG>


            </View>
            <Text style={STYLES.textfont40gibson454F63}>Successful</Text>
        </View>
    );
};



export default CircleTickTextSuccessful;

const style = StyleSheet.create({
    viewstyle: {
        alignItems: "center"
    },

});