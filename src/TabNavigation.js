import React from 'react';
import PropTypes from 'prop-types';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { Text } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";




const TabNavigation = props => {
    const Tab = createMaterialTopTabNavigator();
    return (
        //    <NavigationContainer>
        <Tab.Navigator
            screenOptions={{
                //tabBarActiveTintColor: 'red',
                // tabBarScrollEnabled: false

            }}
        >
            <Tab.Screen
                options={{





                }} name="Sign In" component={SignIn} />
            <Tab.Screen name="Sign Up" component={SignUp} />

        </Tab.Navigator>
        //   </NavigationContainer>

    );
};

export default TabNavigation;