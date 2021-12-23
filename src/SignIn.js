import React, { useState, useEffect, } from 'react';
import Text1 from './Component/Text1';
import STYLES from './STYLES';
import {
    View, Dimensions, Image, Text, ImageBackground,
    TouchableOpacity, ScrollView
} from 'react-native'
import TextInput1 from './Component/TextInput1';
import Button1 from './Component/Button1';
import DummyPassword from './Component/dummyPassword';
import { cc } from './Context'





const SignIn = ({ navigation }) => {
    const [stateEmail, setStateEmail] = useState('')
    const [statePassword, setStatePassword] = useState('')

    const [displayEmptyEmailError, setDisplayEmptyEmailError] = useState('none');
    const [displayInValidEmailError, setDisplayInValidEmailError] = useState('none');
    const [displayPasswordError, setDisplayPasswordError] = useState('none');







    const checkEmail = () => {
        // console.log('pppppppppp')
        var validator = require("email-validator");
        if (validator.validate(stateEmail)) {
            setDisplayInValidEmailError('none')
            setDisplayEmptyEmailError('none')
        }
        if (validator.validate(stateEmail) == false && stateEmail.length != 0) {
            setDisplayInValidEmailError('flex')
            setDisplayEmptyEmailError('none')

        }
    }

    const sendData = () => {

        if (stateEmail.length === 0
            || statePassword.length === 0
        ) {

            if (stateEmail.length === 0) {
                setDisplayEmptyEmailError('flex')
                setDisplayInValidEmailError('none')
                console.log('email')
            }
            if (statePassword.length === 0) {
                setDisplayPasswordError('flex')
                console.log('password')
            }

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

        checkEmail()
        console.log(stateEmail + "Stateemail" + statePassword + "statepassword")
        if (stateEmail.length != 0
            && statePassword.length != 0 && displayInValidEmailError == 'none'
        ) {
            fetch('https://mtechub-project-cheers.herokuapp.com/api/user/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Email: stateEmail,
                    Password: statePassword
                })
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.success) {

                    }
                }
                    //  console.log(data)

                )
                .catch((error) => {
                    console.error(error);
                })
        }

        // navigation.navigate("Payment")
    }

    const passwordComeFromChildComponent = (password) => {
        console.log(password)
        setStatePassword(password)
    }
    return (
        <ScrollView>
            <View style={[STYLES.container, STYLES.containerpadding, {

                justifyContent: 'space-between',
            }]}>
                <View style={{ flex: 0.6, justifyContent: 'space-evenly' }}>
                    <TextInput1 placeholder="Email"
                        onChangeText={text => setStateEmail(text)} />

                    <Text style={{ fontSize: 15, color: 'red', display: displayEmptyEmailError }}>Please Enter Email</Text>
                    <Text style={{ fontSize: 15, color: 'red', display: displayInValidEmailError }}>Enter Valid Email</Text>


                    <cc.Provider value={{ passwordComeFromChildComponent: passwordComeFromChildComponent, displayPasswordError: displayPasswordError }}>
                        <DummyPassword />
                    </cc.Provider>
                    <TouchableOpacity style={{
                        height: 60, borderWidth: 0.1,
                        borderRadius: 1,
                        justifyContent: 'center', alignItems: 'center', alignContent: 'center',

                    }}>
                        <Text style={STYLES.textfont12gibsoncolor78849E}>FORGOT PASSWORD</Text>

                    </TouchableOpacity>
                </View>

                <Button1 text="CONTINUE"
                    onPress={() => { sendData() }}
                />



            </View>
        </ScrollView>
    );
};


export default SignIn;
export { cc };