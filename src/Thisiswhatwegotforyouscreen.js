
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import {
    View, StyleSheet, FlatList, Text, TextInput,
    TouchableOpacity,
    ScrollView, Image, Dimensions
} from 'react-native'
import STYLES from './STYLES'
import RBSheet from "react-native-raw-bottom-sheet";

import ImageGamilPrice from './Component/ImageGamilPrice';
import Button1 from './Component/Button1';
import { NavigationContainer } from '@react-navigation/native';

const Thisiswhatwegotforyouscreen = ({ navigation }) => {
    const refRBSheet = useRef();
    const [flatList, setFlatList] = useState([{
        id: 1,
        name: "#1234556",
        price: 1000,
        data: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua......….eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat'

    },
    {
        id: 2,
        name: "#1234556",
        price: 1000,
        data: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua......….eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat'



    },
    {
        id: 3,
        name: "#1234556",
        price: 1000,
        data: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua......….eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat'



    },
    {
        id: 4,
        name: "#1234556",
        price: 1000,
        data: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua......….eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat'



    },
    {
        id: 5,
        name: "#1234556",
        price: 1000,
        data: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua......….eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat'



    },
    {
        id: 6,
        name: "#1234556",
        price: 1000,
        data: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua......….eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat'



    },
    {
        id: 7,
        name: "#1234556",
        price: 1000,
        data: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua......….eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat'



    },
    {
        id: 8,
        name: "#1234556",
        price: 1000,
        data: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua......….eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat'



    },
    {
        id: 9,
        name: "#1234556",
        price: 1000,
        data: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua......….eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat'



    },
    {
        id: 10,
        name: "#1234556",
        price: 1000,
        data: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua......….eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat'



    },

    ])
    return (

        <View style={[STYLES.container]}>
            <View style={style.header}>

                <Text style={STYLES.textfont19gibson454F63}>This is what we got for you</Text>
            </View>
            <View style={style.content}>
                <FlatList
                    data={flatList}
                    renderItem={({ item }) => {

                        return (
                            <View style={{
                                backgroundColor: '#FFFFFF',
                                borderRadius: 20,

                                paddingVertical: '2%',
                                height: 80,
                                flexDirection: 'row',
                                marginBottom: '2%',
                                // marginHorizontal: '5%'
                                // borderColor: '#707070',
                                // borderWidth: 1,
                                // justifyContent: 'space-evenly'
                            }} >
                                <View style={{ justifyContent: 'center' }}>
                                    <Image source={require('./Images/humanbeing.png')}
                                        style={STYLES.humanbeingimagestyle
                                        } />
                                </View>

                                <View style={{
                                    paddingLeft: "3%",
                                    //  backgroundColor: 'yellow',
                                    flex: 1,
                                }}>
                                    <View style={{
                                        flexDirection: 'row',
                                        // backgroundColor: 'green',


                                        justifyContent: 'space-between'
                                    }}>

                                        <View>
                                            <Text style={{
                                                color: '#FFA900', fontSize: 14,
                                                //        fontFamily:'gibson'
                                            }}>{item.name}</Text>
                                            <Text style={{
                                                color: '#454F63', fontSize: 13,
                                                // fontFamily:'gibson'
                                            }}>My Price:{item.price} Rs</Text>
                                        </View>
                                        <View style={{ justifyContent: 'center' }} >
                                            <TouchableOpacity style={

                                                STYLES.smallbuttonrightsideTouchableopacitystyle
                                            }>
                                                <Text style={[STYLES.smallbuttonrightsidefontstyle, { fontSize: 12 }
                                                ]}>Chat Now</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <TouchableOpacity onPress={() => refRBSheet.current.open()}>
                                        <Text numberOfLines={3} style={{
                                            fontSize: 10,
                                            fontFamily: 'arial'
                                        }}>{item.data}</Text>
                                    </TouchableOpacity>
                                </View>


                            </View >
                        )
                    }}
                    keyExtractor={(item) => item.id}


                />

            </View >
            <RBSheet

                animationType="fade"
                height={Dimensions.get("window").height / 1.5}
                ref={refRBSheet}


                customStyles={{

                    container: {
                        borderTopLeftRadius: 34,
                        borderTopRightRadius: 34,// backgroundColor: 'red',
                        paddingHorizontal: '5%',
                        paddingTop: '5%'
                    },

                }}
            >
                <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
                    <View style={{
                        flex: .15,// backgroundColor: 'yellow',
                    }}>
                        <ImageGamilPrice />
                    </View>
                    <View style={{
                        flex: .60,// backgroundColor: 'green', 
                        justifyContent: 'space-evenly'
                    }}>
                        <Text style={STYLES.textfont18gibson}>Service Detail</Text>
                        <Text numberOfLines={14}
                            style={STYLES.textfont14gibsoncolorblack}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua......….eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat

                        </Text>
                    </View>
                    <View style={{
                        flex: .20,// backgroundColor: 'pink', 
                        justifyContent: 'flex-end'
                    }}>
                        <Button1 text="Book Now" onPress={() => navigation.navigate("Gothroughdetailagain")} />
                    </View>

                </View>
            </RBSheet>
        </View>


    );
};



export default Thisiswhatwegotforyouscreen;


const style = StyleSheet.create({
    header: {
        flex: 0.1, backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        paddingHorizontal: '5%',

    },
    content: {
        flex: 0.9,
        // backgroundColor: 'green',

        paddingHorizontal: '5%',
    },


});