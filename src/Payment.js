import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, TextInput, Text } from 'react-native'
import STYLES from './STYLES';
import Text1 from '../src/Component/Text1'
import TextArea from './Component/TextArea';

import ButtonCancel from '../src/Component/ButtonCancel';


import SVG, { Path, Defs, G, Rect } from 'react-native-svg'
import Viewcardnumbername from '../src/Component/Viewcardnumbername'
import Viewexpirescvc from './Component/Viewexpirescvc';
import ButtonApply from './Component/ButtonApply';
import CountryPicker from 'react-native-country-picker-modal'
import CountryNamePicker from './Component/CountryNamePicker';

import { cc } from './Context';
const Payment = ({ navigation }) => {
    const [stateCountryName, setStateCountryName] = useState('');
    const [stateAddress, setStateAddress] = useState('');


    const funcCountryNameSelect = (country) => {
        console.log(country)
        setStateCountryName(country)
    }

    return (
        <ScrollView>
            <View style={[STYLES.container, STYLES.containerpadding, {


            }]}>
                <View style={{
                    flex: 0.4, //backgroundColor: 'red',
                    justifyContent: 'space-between'
                }}>
                    <View style={{
                        flex: 0.5,// backgroundColor: "green"
                    }}>
                        <SVG width="24" height="24" viewBox="0 0 24 24"
                            onPress={() => { navigation.goBack() }}>

                            <G id="icons_back" data-name="icons/back" //clip-path="url(#clip-path)"
                            >
                                <Rect id="bg" width="24" height="24" fill="none" />
                                <G id="ico" transform="translate(-178 -48)">
                                    <Path id="union" d="M1597.541-4.4l-5.879-5.88a.749.749,0,0,1-.362-.642.748.748,0,0,1,.1-.378.744.744,0,0,1,.128-.171.751.751,0,0,1,.078-.068l5.932-5.932a.751.751,0,0,1,1.061,0,.751.751,0,0,1,0,1.061l-4.739,4.738h12.688a.75.75,0,0,1,.75.751.75.75,0,0,1-.75.75h-12.66l4.711,4.711a.751.751,0,0,1,0,1.061.749.749,0,0,1-.531.219A.749.749,0,0,1,1597.541-4.4Z" transform="translate(-1408.3 70.92)" fill="#454f63" />
                                </G>
                            </G>
                        </SVG>
                        <Text1 style={STYLES.textfont40gibson454F63} text="Payment" />
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

                </View>
                <View style={{
                    flex: 0.4,
                    justifyContent: "space-evenly"
                }}>
                    <cc.Provider value={{ funcCountryNameSelect }} >
                        <CountryNamePicker />

                    </cc.Provider>



                    <TextArea placeholder="Address" />
                </View>
                <View style={{
                    flex: 0.4, //: 'red',
                    justifyContent: "flex-end",
                }}>
                    <View style={{
                        flexDirection: "row",// backgroundColor: 'green',
                        flex: .4, justifyContent: 'space-evenly',
                        alignItems: 'center',
                    }}>
                        <ButtonCancel text="CANCEL" style={{ flex: .45, }} />
                        <ButtonApply text="APPLY" style={{ flex: .45 }}
                            onPress={() => { navigation.navigate("Successful") }} />
                    </View>
                </View>

            </View>
        </ScrollView >
    );
};



export default Payment;