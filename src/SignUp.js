import React, { useState, useEffect, } from 'react';
import Text1 from './Component/Text1';
import STYLES from './STYLES';
import { View, Dimensions, Image, Text, ImageBackground, StyleSheet, StatusBar, } from 'react-native'
import TextInput1 from './Component/TextInput1';
import Button1 from './Component/Button1';

import CountryCodeWithPhoneNo, { setPhoneNo } from './Component/CountryCodeWithPhoneNo'
import { ScrollView } from 'react-native-gesture-handler';
import RadioButton1 from './Component/RadioButton';
import { RadioButton } from 'react-native-paper';
import PhoneInput from 'react-native-phone-number-input';

import DummyPassword from './Component/dummyPassword';

import { cc } from './Context'


const SignUp = ({ navigation }) => {
    const [stateFullName, setStateFullName] = useState('')
    const [stateUserName, setStateUserName] = useState('')
    const [stateEmail, setStateEmail] = useState('')

    const [statePassword, setStatePassword] = useState('')
    const [stateRole, setStateRole] = useState('driver');
    const [statePhoneNo, setStatePhoneNo] = useState('');




    const [displayFullNameError, setDisplayFullNameError] = useState('none');
    const [displayUserNameError, setDisplayUserNameError] = useState('none');
    const [displayEmptyEmailError, setDisplayEmptyEmailError] = useState('none');
    const [displayInValidEmailError, setDisplayInValidEmailError] = useState('none');
    const [displayPasswordError, setDisplayPasswordError] = useState('none');
    const [displayPhoneNoError, setDisplayPhoneNoError] = useState('none');




    const checkEmail = () => {
        // console.log('pppppppppp')
        var validator = require("email-validator");
        if (validator.validate(stateEmail)) {
            setDisplayInValidEmailError('none')
            setDisplayEmptyEmailError('none')
        }
        if (validator.validate(stateEmail) == false && stateEmail.length != 0) {
            // console.log('gggggggg')
            // console.log(displayEmptyEmailError.length)
            setDisplayInValidEmailError('flex')
            setDisplayEmptyEmailError('none')

        }
    }



    const sendData = () => {




        console.log(`FullName: ${stateFullName},
            Email: ${stateEmail},
            Password: ${statePassword},
            PhoneNumber: ${statePhoneNo},
           
            "DOB": "2-5-2000",
            "Address": "aaaaaaaa",
            "Role": ${stateRole}`)
        console.log(statePhoneNo + "phone no send data")
        // if (stateFullName.length === 0 || stateUserName.length === 0 || stateEmail.length === 0
        //     || statePassword.length === 0 || statePhoneNo.length === 0
        // ) {


        if (stateFullName.length != 0) {
            setDisplayFullNameError('none')
            console.log('fullnamenone')
        }
        if (stateUserName.length != 0) {
            setDisplayUserNameError('none')
            console.log('usernamenone')
        }
        if (stateEmail.length != 0) {
            setDisplayEmptyEmailError('none')
            //  setDisplayInValidEmailError('none')
            console.log('emailnone')
        }
        if (statePassword.length != 0) {
            setDisplayPasswordError('none')
            console.log('passwordnone')
        }
        if (statePhoneNo.length != 0) {
            setDisplayPhoneNoError('none')
            console.log('phonenonone')
        }


        console.log(statePhoneNo)
        if (stateFullName.length === 0) {
            setDisplayFullNameError('flex')
            console.log('fullname')
        }
        if (stateUserName.length === 0) {
            setDisplayUserNameError('flex')
            console.log('username')
        }
        if (stateEmail.length === 0) {
            setDisplayEmptyEmailError('flex')
            setDisplayInValidEmailError('none')
            console.log('email')
        }
        if (statePassword.length === 0) {
            setDisplayPasswordError('flex')
            console.log('password')
        }
        if (statePhoneNo.length === 0) {
            setDisplayPhoneNoError('flex')
            console.log('phoneno')
        }



        checkEmail()
        // }
        if (stateFullName.length != 0 && stateUserName.length != 0 && stateEmail.length != 0
            && statePassword.length != 0 && statePhoneNo.length != 0 && displayInValidEmailError === 'none'
        ) {
            console.log('data save successfully')
            fetch('https://mtechub-project-cheers.herokuapp.com/api/user/signup', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({

                    // "FullName":"zafaralam",
                    // "Email":"zafaralam.za24@gmail.com",
                    // "Password":"123456789",
                    // "PhoneNumber":"03245089558",
                    // "DOB":"2-5-2000",
                    // "Address":"aaaaaaaa",
                    // "Role":"customer"
                    FullName: stateFullName,
                    Email: stateEmail,
                    Password: statePassword,
                    PhoneNumber: statePhoneNo,//statePhoneNo,
                    //"PhoneNumber": "0321555555",
                    "DOB": "2-5-2000",
                    "Address": "aaaaaaaa",
                    "Role": stateRole


                })
            })
                .then((response) => response.json())
                .then((data) => console.log(data))
                .catch((error) => {
                    console.error(error);
                })






        }

    }

    const passwordComeFromChildComponent = (password) => {
        console.log(password)
        setStatePassword(password)
    }
    const phoneNoComeFromChildComponent = (phoneNo) => {
        console.log(phoneNo)
        setStatePhoneNo(phoneNo)
    }
    return (
        <ScrollView>
            <View style={[STYLES.container, STYLES.containerpadding]}>

                <View style={{ flex: 0.65, justifyContent: 'space-evenly' }}>
                    <TextInput1 placeholder="Full Name" onChangeText={text => setStateFullName(text)} />

                    <Text style={{ fontSize: 15, color: 'red', display: displayFullNameError }}>Please Enter Full Name</Text>



                    <TextInput1 placeholder="Username" onChangeText={text => setStateUserName(text)} />
                    <Text style={{ fontSize: 15, color: 'red', display: displayUserNameError }}>Please Enter User Name</Text>
                    <TextInput1 placeholder="Email" onChangeText={text => setStateEmail(text)}
                    />
                    <Text style={{ fontSize: 15, color: 'red', display: displayEmptyEmailError }}>Please Enter Email</Text>
                    <Text style={{ fontSize: 15, color: 'red', display: displayInValidEmailError }}>Enter Valid Email</Text>


                    <cc.Provider value={{
                        passwordComeFromChildComponent,
                        displayPasswordError,
                        phoneNoComeFromChildComponent,
                        displayPhoneNoError
                    }}>
                        <DummyPassword />
                        <CountryCodeWithPhoneNo />

                    </cc.Provider>









                </View>
                <View style={{
                    flex: 0.35, // backgroundColor: 'red',
                    justifyContent: 'space-between'
                }}>
                    <View style={{
                        justifyContent: 'space-between', //backgroundColor: 'green',

                    }}>
                        <Text1 style={[STYLES.textfont20gibson454F63, { marginBottom: '5%' }]} text="I am a :" />
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <RadioButton color="#FFA900"
                                value="driver"

                                status={stateRole === 'driver' ? 'checked' : 'unchecked'}
                                onPress={() => { setStateRole('driver'), console.log(stateRole) }}
                            />
                            <Text style={STYLES.textfont20gibson454F63}>Driver
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton color="#FFA900"
                                value="customer"
                                status={stateRole === 'customer' ? 'checked' : 'unchecked'}
                                onPress={() => { setStateRole('customer'), console.log(stateRole) }}
                            />
                            <Text style={STYLES.textfont20gibson454F63}>Customer
                            </Text>
                        </View>
                        {/* <RadioButton1    /> */}
                    </View>
                    <Button1 text="CONTINUE" //onPress={() => { navigation.navigate("Payment") }}
                        onPress={() => { sendData() }}
                    />
                </View>


            </View>

        </ScrollView>
    );
};


export default SignUp;
export { cc };



const style = StyleSheet.create({


    containerstylephoneinput: {
        borderColor: 'grey',// borderWidth: 1,
        // backgroundColor: 'red',
        height: 60, width: 'auto',
        paddingLeft: 0,
        borderRadius: 10,
        elevation: 5,
        shadowColor: '#000000'
    },
    textinputstylephoneno: {

        //   backgroundColor: 'blue'
    },
    textcontainerstylephoneno: {
        justifyContent: 'center',

        paddingTop: '1%', borderRadius: 10, marginLeft: 0,
        paddingBottom: '1%',
        //  backgroundColor: 'green'
    },
});