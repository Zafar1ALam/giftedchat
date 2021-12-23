import React from 'react';
import PropTypes from 'prop-types';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Payment from './src/Payment'
import TabNavigation from './src/TabNavigation';
import WelcomeToApp from './src/WelcomeToApp';
import Successful from './src/Successful';
import SuccessfulRating from './src/SuccessfulRating';
import Thisiswhatwegotforyouscreen from './src/Thisiswhatwegotforyouscreen';
import ServiceNameHere from './src/ServiceNameHere';
import OrderHistory from './src/OrderHistory'
import MainYourLocationHere from './src/MainYourLocationHere'
import FlatListYourLocationHere from './src/FlatListYourLocationHere';
import YourOrderIsInProgress from './src/YourOrderIsInProgress';
import Gothroughdetailagain from './src/Gothroughdetailagain';
import MyProfile from './src/MyProfile';
import UpdatePavement from './src/UpdatePavement';
import DriverMainYourLocationHere from './src/DriverMainYourLocationHere';
import DriverYourLocationHere from './src/DriverYourLocationHere';
import DriverOrderDetails from './src/DriverOrderDetails';
import DriverOrderHistory from './src/DriverOrderHistory';
import DriverMyProfile from './src/DriverMyProfile';
import DriverGiftedChat from './src/DriverGiftedChat';
import DriverPaymentUpdate from './src/DriverPaymentUpdate';
import DriverRatingCustomer from './src/DriverRatingCustomer';
import DriverYouHaveGotANewOrderFrom from './src/DriverYouHaveGotANewOrderFrom';



const App = props => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="WelcomeToApp" component={WelcomeToApp}
          options={{ headerShown: false }} />
        <Stack.Screen name="ServiceNameHere"
          options={{ headerShown: false }} component={ServiceNameHere} initialRouteName="ServiceNameHere" />



        <Stack.Screen name="TabNavigation"
          options={{ headerShown: false }} component={TabNavigation} />
        <Stack.Screen name="Payment"
          options={{ headerShown: false }} component={Payment} />
        <Stack.Screen name="Successful"
          options={{ headerShown: false }} component={Successful} />
        <Stack.Screen name="MainYourLocationHere"
          options={{ headerShown: false }} component={MainYourLocationHere} />
        <Stack.Screen name="FlatListYourLocationHere"
          options={{ headerShown: false }} component={FlatListYourLocationHere} />

        <Stack.Screen name="OrderHistory"
          options={{ headerShown: false }} component={OrderHistory} />

        <Stack.Screen name="Thisiswhatwegotforyouscreen"
          options={{ headerShown: false }} component={Thisiswhatwegotforyouscreen} />

        <Stack.Screen name="Gothroughdetailagain"
          options={{ headerShown: false }} component={Gothroughdetailagain} />
        <Stack.Screen name="YourOrderIsInProgress"
          options={{ headerShown: false }} component={YourOrderIsInProgress} />
        <Stack.Screen name="SuccessfulRating"
          options={{ headerShown: false }} component={SuccessfulRating} />
        <Stack.Screen name="MyProfile"
          options={{ headerShown: false }} component={MyProfile} />
        <Stack.Screen name="UpdatePavement"
          options={{ headerShown: false }} component={UpdatePavement} />
        <Stack.Screen name="DriverMainYourLocationHere"
          options={{ headerShown: false }} component={DriverMainYourLocationHere} />
        <Stack.Screen name="DriverYourLocationHere"
          options={{ headerShown: false }} component={DriverYourLocationHere} />
        <Stack.Screen name="DriverOrderHistory"
          options={{ headerShown: false }} component={DriverOrderHistory} />
        <Stack.Screen name="DriverOrderDetails"
          options={{ headerShown: false }} component={DriverOrderDetails} />
        <Stack.Screen name="DriverMyProfile"
          options={{ headerShown: false }} component={DriverMyProfile} />

        <Stack.Screen name="DriverGiftedChat"
          options={{ headerShown: false }} component={DriverGiftedChat} />
        <Stack.Screen name="DriverPaymentUpdate"
          options={{ headerShown: false }} component={DriverPaymentUpdate} />
        <Stack.Screen name="DriverRatingCustomer"
          options={{ headerShown: false }} component={DriverRatingCustomer} />
        <Stack.Screen name="DriverYouHaveGotANewOrderFrom"
          options={{ headerShown: false }} component={DriverYouHaveGotANewOrderFrom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;