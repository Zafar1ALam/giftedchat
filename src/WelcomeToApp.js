import React from 'react';
import PropTypes from 'prop-types';
import Text1 from './Component/Text1';
import STYLES from './STYLES';
import { View, Dimensions, Image, Text, ImageBackground } from 'react-native'

import Button1 from './Component/Button1';
const WelcomeToApp = ({ navigation }) => {
    return (
        <View style={[STYLES.imagebackgroundcontainer]}>
            <ImageBackground source={require('./Images/BackgroundImage.png')} style={{
                resizeMode: "cover", //justifyContent: 'center', alignItems: 'center',
                flex: 1,


            }} >
                <View style={[STYLES.imagebackgroundcontainer, STYLES.containerpadding]}>
                    <View style={{ justifyContent: 'flex-end', flex: 0.6 }}>
                        <Text1 style={{ fontSize: 52, textAlign: 'center', color: 'white', }} text="Welcome to App" />
                        <Text1 style={{ fontSize: 14, textAlign: 'center', color: 'white' }} text="Your subtitle here" />
                    </View>
                    <View style={{ justifyContent: 'flex-end', flex: 0.4 }}>
                        <Button1 text="GET STARTED" onPress={() => { navigation.navigate("TabNavigation") }} />
                    </View>
                </View>


            </ImageBackground>


        </View >


    );
};



export default WelcomeToApp;