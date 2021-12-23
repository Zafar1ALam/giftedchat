import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    View, StyleSheet, FlatList, Text, TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import STYLES from './STYLES'
import LogoLocationTextYourLocationHere from './Component/LogoLocationTextYourLocationHere'
import Button1 from './Component/Button1';
import ImageNameGmail from './Component/ImageNameGmail'
import Textleftsidebuttonreightside from './Component/Textleftsidebuttonreightside';
import ServiceBox from './Component/ServiceBox';
import FlatList1 from './Component/FlatList1';
import TextInput1 from './Component/TextInput1';
import { Picker } from '@react-native-picker/picker';
import Spinner from 'react-native-loading-spinner-overlay';
import ImageGamilPrice from './Component/ImageGamilPrice';



const YourOrderIsInProgress = ({ navigation }) => {



    return (


        <View style={[STYLES.container,]}>
            <View style={style.header}>

                <Text style={STYLES.textfont19gibson}>Your Order is in Progress</Text>

            </View>
            <View style={style.content}>
                <View style={{ flex: 0.25, justifyContent: 'space-evenly' }}>
                    <Text style={STYLES.textfont15gibson}>Service type here</Text>
                    <Text style={STYLES.textfont15gibson}>Price for A Service</Text>
                    <Text style={STYLES.textfont14gibsoncolor78849E}>Your Current location Here</Text>
                </View>

                <View style={{ flex: 0.25, justifyContent: 'space-evenly' }} >
                    <Text style={STYLES.textfont15gibson}>Additional Detail</Text>
                    <Text numberOfLines={6}
                        style={STYLES.textfont14gibsoncolorblack}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua......….eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</Text>
                </View>
                <View style={{ flex: 0.2, justifyContent: 'space-evenly' }}>
                    <Text style={STYLES.textfont19gibson}>What you will Get : </Text>
                    <View style={{ paddingLeft: '2%' }}>
                        <ImageGamilPrice />
                    </View>
                </View>
                <View style={{
                    flex: 0.3, justifyContent: 'space-between',
                    paddingLeft: '2%',
                }}>
                    <View style={{ flex: 0.8, justifyContent: 'space-between' }}>
                        <Text style={STYLES.textfont18gibson}>Service Detail</Text>
                        <Text numberOfLines={5}
                            style={STYLES.textfont14gibsoncolorblack}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua......….eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat

                        </Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: "flex-end" }}>
                        <Text style={STYLES.textfont19gibson}>ORDER NO: qwer-234da</Text>
                    </View>

                </View>

            </View>
            <View style={style.footer}>
                <Button1 text="Mark as Confirm" onPress={() => navigation.navigate("SuccessfulRating")}

                />

            </View>

        </View >


    );
};



export default YourOrderIsInProgress;


const style = StyleSheet.create({
    header: {
        flex: 0.05,// backgroundColor: 'red',

        paddingHorizontal: '5%',
        justifyContent: 'flex-end'

    },
    content: {
        flex: 0.80,
        // backgroundColor: 'green',
        justifyContent: "space-evenly",
        paddingHorizontal: '5%',
    },
    footer: {
        flex: 0.15, //backgroundColor: 'red',
        // paddingVertical: '2%',
        justifyContent: "flex-end",
        paddingHorizontal: '7%',
    }

});