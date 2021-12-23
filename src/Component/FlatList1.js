import { stringLiteralTypeAnnotation } from '@babel/types';
import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, BackHandler } from 'react-native';

const FlatList1 = props => {

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
  ]);





  return (

    <FlatList
      data={flatList}
      renderItem={({ item }) => {
        console.log(item.userName)
        console.log(item.id)
        return (
          <View style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 20,
            paddingHorizontal: '4%',
            height: 80,
            marginBottom: '2%',
            // borderColor: '#707070',
            // borderWidth: 1,
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



  );
};



export default FlatList1;
const style = StyleSheet.create({
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

