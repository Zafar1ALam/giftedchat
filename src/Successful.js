import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native'
import STYLES from './STYLES'
import CircleTickTextSuccessful from './Component/CircleTickTextSuccessful';
import Button1 from './Component/Button1';

const Successful = ({ navigation }) => {
    return (
        <View style={[STYLES.container, STYLES.containerpadding, {


        }]}>
            <View style={{ flex: 0.55, justifyContent: 'flex-end' }}>

                <CircleTickTextSuccessful />
            </View>
            <View style={{ flex: 0.55, justifyContent: 'flex-end' }}>

                <Button1 text="Go to Home" onPress={() => { navigation.navigate("MainYourLocationHere") }} />
            </View>




        </View>
    );
};



export default Successful;