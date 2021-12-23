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
const UpdatePavement = ({ navigation }) => {
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
                {/* header */}
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
                    {/*
                    <View style={{
                        flex: 0.5,// backgroundColor: "green"
                    }}>
                        {/* <SVG width="24" height="24" viewBox="0 0 24 24">
                            {/* <Defs>
                            <clipPath id="clip-path">
                                <Rect width="24" height="24" fill="none" />
                            </clipPath>
                        </Defs> 
                        <G id="icons_back" data-name="icons/back" //clip-path="url(#clip-path)"
                        >
                            <Rect id="bg" width="24" height="24" fill="none" />
                            <G id="ico" transform="translate(-178 -48)">
                                <Path id="union" d="M1597.541-4.4l-5.879-5.88a.749.749,0,0,1-.362-.642.748.748,0,0,1,.1-.378.744.744,0,0,1,.128-.171.751.751,0,0,1,.078-.068l5.932-5.932a.751.751,0,0,1,1.061,0,.751.751,0,0,1,0,1.061l-4.739,4.738h12.688a.75.75,0,0,1,.75.751.75.75,0,0,1-.75.75h-12.66l4.711,4.711a.751.751,0,0,1,0,1.061.749.749,0,0,1-.531.219A.749.749,0,0,1,1597.541-4.4Z" transform="translate(-1408.3 70.92)" fill="#454f63" />
                            </G>
                        </G>
                    </SVG> 
                        <Text1 style={STYLES.textfont19gibson} text="Payments" />
                    </View>
                    <View style={{
                        flex: 0.5, paddingHorizontal: '3%', justifyContent: 'space-between'
                    }} >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}>
                            <Viewcardnumbername text1="Card number" text2="0123 4567 8910 1112" />
                            <Viewexpirescvc text1="Expires" text2="MM/YY" />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}>
                            <Viewcardnumbername text1="Name" text2="JOHN DOE" />
                            <Viewexpirescvc text1="CVC" text2="000" />
                        </View>
                    </View>
*/}
                </View>

                {/* //content */}

                {/* <Text1 text="Country" />
                    <TextInput style={STYLES.textarea} placeholder="Address"
                        multiline={true}
                        numberOfLines={6} /> */}



                {/* footer */}
                <View style={
                    style.footer
                }>
                    {/* <View style={{
                        flexDirection: "row",// backgroundColor: 'green',
                        flex: .4, justifyContent: 'space-evenly',
                        alignItems: 'center',
                    }}>
                        <ButtonCancel text="CANCEL" style={{ flex: .45, }} />
                        <Button1 text="APPLY" style={{ flex: .45 }}
                            onPress={() => { navigation.navigate("Successful") }} />
                    </View> */}
                    <Button1 text="Update"
                        onPress={() => { navigation.navigate("MyProfile") }} />
                </View>

            </View>
        </ScrollView >
    );
};



export default UpdatePavement;
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