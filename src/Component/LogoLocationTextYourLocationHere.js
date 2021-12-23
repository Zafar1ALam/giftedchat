import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import SVG, { Path } from 'react-native-svg'
import TextInput1 from './TextInput1';
import Text1 from './Text1'
import STYLES from '../STYLES';

const LogoLocationTextIinputYourLocationHere = props => {
    return (
        <TouchableOpacity style={style.viewstyle} onPress={props.onPress}>
            <SVG width="17.5" height="25" viewBox="0 0 17.5 25" style={{ marginRight: '15%' }}>
                <Path id="Icon_material-location-on" data-name="Icon material-location-on" d="M16.25,3A8.744,8.744,0,0,0,7.5,11.75C7.5,18.313,16.25,28,16.25,28S25,18.313,25,11.75A8.744,8.744,0,0,0,16.25,3Zm0,11.875a3.125,3.125,0,1,1,3.125-3.125A3.126,3.126,0,0,1,16.25,14.875Z" transform="translate(-7.5 -3)" fill="#fea800" />
            </SVG>
            <Text1 text={props.text}
                style={
                    STYLES.textfont16gibson78849E
                } />

        </TouchableOpacity>
    );
};



export default LogoLocationTextIinputYourLocationHere;

const style = StyleSheet.create({
    viewstyle: {

        backgroundColor: 'white',
        height: 60,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '5%'

    },

});