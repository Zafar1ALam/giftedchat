import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    View, StyleSheet, FlatList, Text, TextInput,
    TouchableOpacity,
    ScrollView, Image
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
import { SvgXml } from 'react-native-svg'
import svgs from './svgs';



const DriverYouHaveGotANewOrderFrom = ({ navigation }) => {



    return (


        <View style={[STYLES.container,]}>
            <View style={style.header}>

                <View style={{
                    height: 70, width: 70, borderRadius: 152,
                    backgroundColor: '#FFA900', justifyContent: 'center',
                    alignItems: "center",
                }}>

                    <SvgXml xml={svgs.tick} />


                </View>
                <View style={{
                    flex: 0.7, justifyContent: 'space-evenly', paddingLeft: '3%', //backgroundColor: 'green',

                }}>
                    <Text style={STYLES.textfont21gibson454F63}>Your have Got a New Order From : </Text>

                    <View style={{
                        flexDirection: 'row', alignItems: 'center',
                        //  backgroundColor: 'blue', //alignSelf: 'stretch'
                    }}>
                        <Image style={STYLES.humanbeingimagestyle}
                            source={require('./Images/humanbeing.png')} />
                        <View style={{
                            //         backgroundColor: 'yellow',
                            marginLeft: '5%',
                            flex: 1
                        }}>
                            <Text style={STYLES.textfont26gibsonFFA900}>@jhondeo</Text>
                            <Text style={[STYLES.textfont19gibson454F63, {
                                position: 'absolute',
                                bottom: '-45%'
                            }]}>ORDER NO : qwr-234da</Text>
                        </View>

                    </View>
                </View>
            </View>
            <View style={style.content}>




                <Text style={STYLES.textfont15gibson}>Service type here</Text>
                <Text style={STYLES.textfont15gibson}>Price for A Service</Text>
                <Text style={STYLES.textfont14gibsoncolor78849E}>Your Current location Here</Text>



                <Text style={STYLES.textfont15gibson}>Additional Detail</Text>
                <Text numberOfLines={6}
                    style={STYLES.textfont14gibsoncolorblack}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua......….eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</Text>

                <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                    <Text style={STYLES.textfont19gibson454F63}>Your Bid : </Text>
                    <Text style={STYLES.textfont18gibson}>Price : 999 Rs </Text>

                </View>

                <Text style={STYLES.textfont18gibson}>Service Detail</Text>
                <Text numberOfLines={5}
                    style={STYLES.textfont14gibsoncolorblack}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua......….eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat

                </Text>



            </View>
            <View style={style.footer}>
                <Button1 text="Mark as Complete" onPress={() => navigation.navigate("YourOrderIsInProgress")}

                />

            </View>

        </View >


    );
};



export default DriverYouHaveGotANewOrderFrom;


const style = StyleSheet.create({
    header: {
        flex: 0.30,// backgroundColor: 'red',

        paddingHorizontal: '5%',
        //backgroundColor: '#FFFFFF',
        //paddingLeft: '9%',
        justifyContent: 'space-evenly',
        alignItems: 'center'

    },
    content: {
        flex: 0.60,
        //backgroundColor: 'green',
        backgroundColor: '#FFFFFF',
        justifyContent: "space-evenly",
        paddingHorizontal: '5%',
    },
    footer: {
        flex: 0.1, //backgroundColor: 'red',
        //paddingVertical: '2%',
        justifyContent: "flex-end",
        paddingHorizontal: '7%',
        backgroundColor: '#FFFFFF'
    }

});