import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native'
import STYLES from './STYLES'
import FlatList1 from './Component/FlatList1';
const OrderHistory = props => {
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

    {
        id: 3,
        orderno: "#1234556",
        subtotal: 1000

    },
    {
        id: 4,
        orderno: "#1234556",
        subtotal: 1000


    },
    {
        id: 5,
        orderno: "#1234556",
        subtotal: 1000

    },
    {
        id: 6,
        orderno: "#1234556",
        subtotal: 1000


    },
    {
        id: 7,
        orderno: "#1234556",
        subtotal: 1000

    },
    {
        id: 8,
        orderno: "#1234556",
        subtotal: 1000


    },
    ])
    return (
        <View style={[STYLES.container, STYLES.containerpadding]}>
            <View style={style.header}>
                <Text style={STYLES.textfont19gibson454F63}>Order History</Text>
            </View>
            <View style={style.content}>

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
                                borderColor: '#707070',
                                borderWidth: 1,
                                justifyContent: 'space-evenly'
                            }} >
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={style.textfullopacity}>Order No:</Text>
                                    <Text style style={style.textfullopacity}>{item.orderno}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={style.texthalfopacity}>Subtotal</Text>
                                    <Text style={style.texthalfopacity}>{item.subtotal}</Text>
                                </View>


                            </View>
                        )
                    }}
                    keyExtractor={(item) => item.id}


                />


            </View>





        </View>
    );
};



export default OrderHistory;


const style = StyleSheet.create({
    header: {
        flex: 0.07,
        paddingVertical: '2%',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF'
    },
    content: {
        flex: 0.93,
        //  backgroundColor: 'red',
        paddingVertical: '2%', justifyContent: "space-evenly",
        //paddingHorizontal: '5%',
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