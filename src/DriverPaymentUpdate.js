
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, TextInput, StyleSheet } from 'react-native'
import STYLES from './STYLES';
import Text1 from '../src/Component/Text1'
import Button1 from '../src/Component/Button1'
import ButtonCancel from '../src/Component/ButtonCancel';


import SVG, { Path, Defs, G, Rect } from 'react-native-svg'
import Viewcardnumbername from '../src/Component/Viewcardnumbername'
import Viewexpirescvc from './Component/Viewexpirescvc';
import CountryPicker from 'react-native-country-picker-modal'
const DriverPaymentUpdate = ({ navigation }) => {
    const [countryCode, setCountryCode] = useState()
    // const [country, setCountry] = useState(null)
    const [withCountryNameButton, setWithCountryNameButton] = useState(
        true
    )
    const [withFlagButton, setWithFlagButton] = useState(true)
    const [withCallingCodeButton, setWithCallingCodeButton] = useState(
        true
    )
    const [withFlag, setWithFlag] = useState(true)
    // const [withEmoji, setWithEmoji] = useState(true)
    const [withFilter, setWithFilter] = useState(true)
    const [withAlphaFilter, setWithAlphaFilter] = useState(true)
    const [withCallingCode, setWithCallingCode] = useState(true)
    const [withModal, setWithModal] = useState(true)
    ////
    const [visible, setVisible] = useState(false)
    const [dark, setDark] = useState(false)
    const [fontScaling, setFontScaling] = useState(true)
    const [disableNativeModal, setDisableNativeModal] = useState(false)
    const onSelect = (country) => {
        setCountryCode(country.cca2)
        // setCountry(country)
    }
    return (
        <ScrollView>
            <View style={[STYLES.container, { paddingHorizontal: '5%' }


            ]}>

                <View style={
                    style.header
                }>
                    <Text1 style={[STYLES.textfont19gibson454F63, {

                    }]} text="Payments" />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}>
                        <Viewcardnumbername text1="Card number" text2="0123 4567 8910 1112" />
                        <Viewexpirescvc text1="Expires" text2="MM/YY" />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}>
                        <Viewcardnumbername text1="Name" text2="JOHN DOE" />
                        <Viewexpirescvc text1="CVC" text2="000" />
                    </View>
                    {/* <Text1 text="Country" /> */}
                    <View style={STYLES.viewcountrynamepicker}>
                        {/* <Text1 text="Country" /> */}
                        <CountryPicker
                            {...{
                                // allowFontScaling: fontScaling,
                                countryCode,
                                withFilter,
                                withFlag,
                                // withCallingCodeButton,
                                withCountryNameButton,
                                withAlphaFilter,
                                withCallingCode,
                                //  withModal,
                                // withFlagButton,
                                onSelect,
                                modalProps: {
                                    visible,
                                },
                                onClose: () => setVisible(false),
                                onOpen: () => setVisible(true),
                            }}
                        />
                    </View>
                    <TextInput style={STYLES.textarea} placeholder="Address"
                        multiline={true}
                        numberOfLines={6} />

                </View>


                <View style={
                    style.footer
                }>

                    <Button1 text="Update"
                        onPress={() => { navigation.navigate("MyProfile") }} />
                </View>

            </View>
        </ScrollView >
    );
};



export default DriverPaymentUpdate;
const style = StyleSheet.create({
    header: {
        flex: 0.60,
        // marginBottom: '5%',

        justifyContent: 'space-evenly',
        // backgroundColor: 'red',

    },

    footer: {
        flex: 0.40,
        //  backgroundColor: 'blue',
        justifyContent: 'flex-end'
    }




});



