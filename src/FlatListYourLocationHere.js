import React, { useState } from 'react';
import {
    SafeAreaView, KeyboardAvoidingView,
    View, FlatList, StyleSheet, Text, StatusBar, BackHandler, ScrollView
} from 'react-native';

import TextInput1 from './Component/TextInput1';
import STYLES from './STYLES';

const FlatListYourLocationHere = props => {

    const [flatList, setFlatList] = useState([{
        id: 1,
        location: 'New Location'

    },
    {
        id: 2,
        location: 'New Location'


    },
    {
        id: 3,
        location: 'New Location'

    },
    {
        id: 4,
        location: 'New Location'

    },
    {
        id: 5,
        location: 'New Location'

    },
    {
        id: 6,
        location: 'New Location'

    },
    ])





    return (
        <ScrollView>
            <View style={[STYLES.container, STYLES.containerpadding]}>
                <View style={style.header}>
                    <TextInput1
                        style={[STYLES.textfont16gibson78849E, style.textinput1]}
                        placeholder="Your location Here" />
                </View>
                <View style={style.footer}>

                    <FlatList
                        data={flatList}
                        renderItem={({ item }) => {
                            console.log(item.userName)
                            console.log(item.id)
                            return (
                                <View style={{
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: 10,
                                    paddingHorizontal: '4%',
                                    height: 50,
                                    marginBottom: '2%',
                                    // borderColor: '#707070',
                                    // borderWidth: 1,
                                    justifyContent: 'space-evenly'
                                }} >
                                    <Text style={STYLES.textfont16gibson78849E}>{item.location}</Text>


                                </View>
                            )
                        }}
                        keyExtractor={(item) => item.id}


                    />

                </View>





            </View>

        </ScrollView>



    );
};



export default FlatListYourLocationHere;
const style = StyleSheet.create({
    header: {
        flex: 0.1,
        backgroundColor: '#FFFFFF',
        marginBottom: '10%'
        // backgroundColor: 'red',
        //   borderWidth: 3,
        //   ,
        // shadowColor: 'green',
        // shadowOffset: { width: 1, height: 1 },
        // shadowRadius: 4,
        // shadowOpacity: 6,
        // width: 150,
        // elevation: 10,
        // height: 150

    },
    textinput1: {
        // backgroundColor: 'red',
        // shadowColor: '#455B63',
        // shadowOffset: { width: 0, height: 12 },
        // shadowRadius: 16, paddingLeft: '10%'
    },
    footer: {
        flex: 0.85
    }

});

