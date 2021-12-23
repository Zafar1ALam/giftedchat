import TextArea from './Component/TextArea';
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

const textfunc = () => {
    return (
        <Text style={{ color: '#454F63', fontSize: 19, textAlign: 'center' }}>
            Hold On tight
            We are Getting things for you
        </Text>
    )
}

const ServiceNameHere = ({ navigation }) => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [spinnerState, spinnerSetState] = useState(false);
    const loadingScreen = () => {
        console.log('dddddddddddd')

        spinnerSetState(true)

        setTimeout(() => {
            //  navigation.navigate('Thisiswhatwegotforyouscreen')
        }, 3000)
    }


    return (

        <ScrollView>
            <View style={[STYLES.container]}>
                <View style={style.header}>

                    <Text style={STYLES.textfont19gibson454F63}>Service Name here</Text>
                </View>
                <View style={style.content}>
                    <Picker style={{
                        backgroundColor: "#FFFFFF",
                        borderRadius: 12,
                        elevation: 5, shadowColor: '#455B63'
                    }}
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                        }>
                        <Picker.Item label="Service type here" enabled={false}
                            style={{ color: 'rgba(120,132,158,0.56)' }} />
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>

                    <TextInput1 placeholder="Price for a Service" keyboardType='numeric' />
                    <View style={{
                        flexDirection: 'row', height: 60,
                        elevation: 5, shadowColor: '#455B63',
                        alignItems: 'center', paddingLeft: '5%', paddingRight: '3%'
                        , backgroundColor: '#FFFFFF', justifyContent: 'space-between'
                    }}>
                        <Text style={{
                            color: 'rgba(120, 132, 158,0.52)'
                        }}>Your Current location Here</Text>
                        <TouchableOpacity style={{
                            backgroundColor: "#FFA900", borderRadius: 15, padding: '2%',
                            alignItems: 'center'
                        }} onPress={() => navigation.navigate("FlatListYourLocationHere")}>
                            <Text style={{ color: '#FFFFFF', fontSize: 13 }}>Change</Text>
                        </TouchableOpacity>
                    </View>

                    <TextArea placeholder="Additional Detail" />

                </View>
                <View style={style.footer}>
                    <Button1 text="Get Help Now" onPress={() => loadingScreen()}
                    // onPress={() => navigation.navigate('Thisiswhatwegotforyouscreen')}
                    />
                    {/* STYLES.textfont19gibson454F63 */}
                </View>
                <Spinner textStyle={style.stylespinner
                }
                    visible={spinnerState}
                    color={'#FFA900'}

                    textContent={`Hold On tight\nWe are Getting things for you`}
                //textStyle={styles.spinnerTextStyle}
                />
            </View >
        </ScrollView>

    );
};



export default ServiceNameHere;


const style = StyleSheet.create({
    header: {
        flex: 0.1,// backgroundColor: 'red',
        paddingTop: '2%',
        paddingHorizontal: '5%',
        justifyContent: 'center'

    },
    content: {
        flex: 0.60,
        // backgroundColor: 'green',
        justifyContent: "space-evenly",
        paddingHorizontal: '7%',
    },
    footer: {
        flex: 0.39, //backgroundColor: 'red',
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