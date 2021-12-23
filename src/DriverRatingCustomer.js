import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Image, Text } from 'react-native'
import STYLES from './STYLES'
import CircleTickTextSuccessful from './Component/CircleTickTextSuccessful';
import Button1 from './Component/Button1';
import { Rating, AirbnbRating } from 'react-native-ratings';


const DriverRatingCustomer = ({ navigation }) => {
    const ratingCompleted = (rating) => {
        //  console.log("Rating is: " + rating)
        setstaterating(rating)
        console.log(staterating)

    }
    const [staterating, setstaterating] = useState(3)
    return (
        <View style={[STYLES.container, STYLES.containerpadding, {


        }]}>
            <View style={style.header}>
                <CircleTickTextSuccessful />
            </View>
            <View style={style.content}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center', justifyContent: 'center',
                    backgroundColor: '#FFFFFF',
                    marginBottom: '5%'
                }}>
                    <Image source={require('./Images/humanbeing.png')}
                        style={STYLES.humanbeingimagestyle} />
                    <View style={{ paddingLeft: '5%' }}>
                        <Text style={STYLES.textfont26gibson}>@jhondeo</Text>
                    </View>

                </View>
                <Text style={{ fontSize: 31, color: '#454F63', marginBottom: '5%' }}>Rating you Got</Text>










                <AirbnbRating
                    count={5}
                    onFinishRating={ratingCompleted}
                    showRating={false}
                    selectedColor="#FFA900"
                    // unSelectedColor="green"

                    //  starContainerStyle={{ backgroundColor: 'red', width: '100%', alignSelf: 'center' }}
                    //  ratingContainerStyle={{ backgroundColor: 'orange', width: '90%', alignContent: 'space-around' }}


                    size={40}
                />


            </View>
            <View style={style.footer}>
                <Button1 text="Go to Home" onPress={() => { navigation.navigate("MainYourLocationHere") }} />

            </View>









        </View>
    );
};



export default DriverRatingCustomer;

const style = StyleSheet.create({
    header: {
        flex: 0.40,
        // marginBottom: '5%',
        paddingVertical: '10%',
        justifyContent: 'center',
        // backgroundColor: 'red',
        justifyContent: 'flex-end'
    },
    content: {
        flex: 0.40,
        //  backgroundColor: 'red',
        paddingVertical: '2%', justifyContent: "center",
        alignItems: 'center',
        // backgroundColor: 'green'
    },
    footer: {
        flex: 0.20,
        //  backgroundColor: 'blue',
        justifyContent: 'flex-end'
    }




});