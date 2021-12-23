import React, { useState } from 'react';
import STYLES from './STYLES';
import {
    View, Dimensions, Image, Text, ImageBackground,
    TouchableOpacity, StyleSheet, Modal, ScrollView
} from 'react-native'
import TextInput1 from './Component/TextInput1';
import Button1 from './Component/Button1';
import SVG, { Path } from 'react-native-svg';

import ButtonManagePavements from './Component/ButtonManagePavements';
import ImagePicker from 'react-native-image-crop-picker';
import CountryCodeWithPhoneNo from './Component/CountryCodeWithPhoneNo';
import ProfileImageabsoluteCamera from './Component/ProfileImageabsoluteCamera';

const DriverMyProfile = ({ navigation }) => {
    const [stateModal, setStateModal] = useState(false)
    const [stateimage, setStateImage] = useState(require('./Images/humanbeing.png'))

    const toggleModal = () => {
        { console.log('bb') }
        setStateModal(!stateModal);
    };
    const imagecapturecamera = () => {

        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image.path);
            setStateImage({ uri: image.path })
        });

        toggleModal()
    }

    const imagefromgallery = () => {

        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            setStateImage({ uri: image.path })
        });
        toggleModal()
    }
    return (
        <ScrollView>
            <View style={[STYLES.container, STYLES.containerpadding, {


            }]}>
                <View style={style.header}>
                    <Text style={STYLES.textfont19gibson454F63}>My Profile</Text>

                    <ProfileImageabsoluteCamera source={stateimage}
                        onPress={toggleModal} />
                </View>
                <View style={style.content}>
                    <TextInput1 placeholder="Full Name" />
                    <TextInput1 placeholder="Username" />
                    <TextInput1 placeholder="Email" />
                    <TextInput1 placeholder="Password" />
                    <CountryCodeWithPhoneNo />
                </View>
                <View style={style.footer}>
                    <ButtonManagePavements text="$ Manage Payments"
                        onPress={() => navigation.navigate("UpdatePavement")} />
                    <Button1 text="Update" />


                </View>
                <Modal visible={stateModal} transparent={true} >
                    <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: '15%' }}>
                        <View style={{
                            height: '40%', alignSelf: 'center', paddingHorizontal: '5%', backgroundColor: 'grey',
                            width: '90%', paddingVertical: '5%', justifyContent: "space-around", borderRadius: 30,
                            borderColor: 'black', borderWidth: 1
                        }}>
                            <Text style={{
                                fontSize: 26, fontWeight: 'bold',
                                borderBottomWidth: 1, borderBottomColor: 'black', paddingBottom: 10
                            }}>Add Photo!</Text>
                            <TouchableOpacity onPress={imagecapturecamera} >
                                <Text style={{ fontSize: 26 }}>Take Photo</Text>
                            </TouchableOpacity >
                            <TouchableOpacity onPress={imagefromgallery} >
                                <Text style={{ fontSize: 26, }}>Choose from Library</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={toggleModal}
                            >
                                <Text style={{ fontSize: 26, }}>Cancel</Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                </Modal>
            </View>
        </ScrollView >
    );
};


export default DriverMyProfile;


const style = StyleSheet.create({
    header: {
        flex: 0.20,
        // backgroundColor: 'red',

    },
    content: {
        flex: 0.55,
        //  backgroundColor: 'red',
        //   backgroundColor: 'green',
        justifyContent: 'space-evenly'
    },
    footer: {
        flex: 0.30,
        //  backgroundColor: 'blue',
        justifyContent: 'flex-end'

    }




});