
import React, { useState } from 'react';
import {
    View, StyleSheet, FlatList, Text, TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import STYLES from './STYLES'
import Button1 from './Component/Button1';
import TextInput1 from './Component/TextInput1';
import Spinner from 'react-native-loading-spinner-overlay';




const DriverOrderDetails = ({ navigation }) => {
    const [spinnerState, spinnerSetState] = useState(false);
    const loadingScreen = () => {
        console.log('dddddddddddd')

        spinnerSetState(true)

        setTimeout(() => {
            //     navigation.navigate('Thisiswhatwegotforyouscreen')
        }, 3000)
    }


    return (

        <ScrollView>
            <View style={[STYLES.container,]}>
                <View style={style.header}>

                    <Text style={STYLES.textfont19gibson454F63}>Order Details</Text>

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
                    <View style={{ flex: 0.5, justifyContent: 'space-evenly' }}>
                        <Text style={STYLES.textfont19gibson454F63}>Your Bid : </Text>

                        <TextInput1 placeholder="Price for A Service" />
                        <TextInput style={STYLES.textarea} placeholder="Additonal Detail"
                            multiline={true}
                            numberOfLines={6} />

                        {/* <View style={{ paddingLeft: '2%' }}>
                        <ImageGamilPrice />
                    </View> */}
                    </View>
                    {/* <View style={{
                    flex: 0.3, justifyContent: 'space-evenly',
                    paddingLeft: '2%'
                }}>
                    <Text style={STYLES.textfont18gibson}>Service Detail</Text>
                    <Text numberOfLines={8}
                        style={STYLES.textfont14gibsoncolorblack}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua......….eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat

                    </Text>

                </View> */}

                </View>
                <View style={style.footer}>
                    <Button1 text="Bid Now" onPress={() => loadingScreen()}
                    // onPress={() => navigation.navigate('Thisiswhatwegotforyouscreen')}
                    />

                </View>
                <Spinner textStyle={style.stylespinner}
                    visible={spinnerState}
                    color={'#FFA900'}
                    animation="none"
                    textContent={`Hold On tight
     Waiting for Customer Response`}
                //textStyle={styles.spinnerTextStyle}
                />

            </View >
        </ScrollView>


    );
};



export default DriverOrderDetails;


const style = StyleSheet.create({
    header: {
        flex: 0.05, //backgroundColor: 'red',

        paddingHorizontal: '5%',
        justifyContent: 'flex-end'

    },
    content: {
        flex: 0.80,
        //  backgroundColor: 'green',
        justifyContent: "space-evenly",
        paddingHorizontal: '5%',
    },
    footer: {
        flex: 0.15, //backgroundColor: 'red',
        // paddingVertical: '2%',
        justifyContent: "flex-end",
        paddingHorizontal: '7%',
    },
    stylespinner: {
        fontSize: 19,
        color: '#454F63',
        textAlign: 'center',
        // backgroundColor: 'blue'

    }

});