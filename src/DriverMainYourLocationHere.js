import React, { useState } from 'react';

import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native'
import STYLES from './STYLES'
import LogoLocationTextYourLocationHere from './Component/LogoLocationTextYourLocationHere'

import ImageNameGmail from './Component/ImageNameGmail'
import Textleftsidebuttonreightside from './Component/Textleftsidebuttonreightside';

const DriverMainYourLocationHere = ({ navigation }) => {
    const [flatList, setFlatList] = useState([{
        id: 1,
        orderno: "#1234556",
        subtotal: 1000

    },
    {
        id: 2,
        orderno: "#1234556",
        subtotal: 1000


    },
    ])
    const [flatListDatePrice, setFlatListDatePrice] = useState([{
        id: 1,
        date: "01/01/1999",
        price: 300

    },
    {
        id: 2,
        date: "01/01/1999",
        price: 300


    },
    ])
    return (
        <View style={[STYLES.container]}>
            <View style={style.header}>
                <LogoLocationTextYourLocationHere text="Your location Here"
                    onPress={() => { navigation.navigate("DriverYourLocationHere") }} />
                <View style={{ justifyContent: "center", flex: 1, paddingLeft: '2%' }}>
                    <ImageNameGmail onPress={() => navigation.navigate("DriverMyProfile")}
                        name="Jhon Deo" gmail="@jhondeo"
                    />
                </View>

            </View>
            <View style={style.content}>
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: "#FFA900",
                    borderRadius: 14,
                    paddingHorizontal: '3%',
                    paddingVertical: '3%', justifyContent: 'space-between'
                }}>
                    <Text style={STYLES.textfont16gibsonwhite}>You Have A Nearby Customer</Text>
                    <TouchableOpacity>
                        <Text style={STYLES.textfont17arialboldwhite}>Details</Text>
                    </TouchableOpacity>
                </View>
                <Textleftsidebuttonreightside texttext="My Earning History"
                    textbutton="see All" />
                <View >
                    <FlatList
                        data={flatListDatePrice}
                        renderItem={({ item }) => {
                            console.log(item.date)
                            console.log(item.price)
                            return (
                                <View style={{
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: 14,
                                    borderColor: 'rgba(112,112,112,0.33)',
                                    paddingHorizontal: '4%',
                                    height: 50,
                                    marginBottom: '2%',
                                    // borderColor: '#707070',
                                    borderWidth: 1,
                                    justifyContent: 'space-evenly'
                                }} >
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={STYLES.textfont18gibson4A4B4D_52}>{item.date}</Text>
                                        <Text style={STYLES.textfont18gibson4A4B4D_52}>Rs {item.price}</Text>
                                    </View>



                                </View>
                            )
                        }}
                        keyExtractor={(item) => item.id}


                    />

                </View>

            </View>
            <View style={style.footer}>
                <View >
                    <Textleftsidebuttonreightside
                        texttext="Orders in Progress"
                        textbutton="See All" onPress={() => { navigation.navigate("OrderHistory") }} />
                </View>
                <View >
                    <FlatList
                        data={flatList}
                        renderItem={({ item }) => {
                            console.log(item.userName)
                            console.log(item.id)
                            return (
                                <View style={{
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: 14,
                                    paddingHorizontal: '4%',
                                    height: 80,
                                    marginBottom: '2%',
                                    // borderColor: '#707070',
                                    borderWidth: 1,
                                    justifyContent: 'space-evenly'
                                }} >
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={style.textfullopacity}>Order No:</Text>
                                        <Text style style={style.textfullopacity}>{item.orderno}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={style.texthalfopacity}>Subtotal</Text>
                                        <Text style={style.texthalfopacity}>R {item.subtotal}</Text>
                                    </View>


                                </View>
                            )
                        }}
                        keyExtractor={(item) => item.id}


                    />
                </View>
            </View>





        </View>
    );
};



export default DriverMainYourLocationHere;


const style = StyleSheet.create({
    header: {
        flex: 0.20,
        paddingVertical: '2%',
        paddingHorizontal: '5%',
        backgroundColor: '#FFA900'
    },
    content: {
        flex: 0.33,
        //backgroundColor: 'red',
        paddingTop: '2%',
        justifyContent: "space-evenly",
        paddingHorizontal: '5%',
    },
    footer: {
        flex: 0.33, //backgroundColor: 'green',
        // paddingVertical: '2%',
        justifyContent: "space-evenly",
        paddingHorizontal: '5%',
    },
    textfullopacity: {
        fontSize: 18, fontWeight: "bold",
        color: 'rgba(74,75,77,1)',
    },
    texthalfopacity: {
        fontSize: 18, fontWeight: "bold",
        color: 'rgba(74,75,77,.52)',
        //color: '#4A4B4D'
    },

});