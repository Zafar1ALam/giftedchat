import React from 'react';
import { Surface, } from 'react-native-paper';
import { TouchableOpacity, Text, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
const TextInput1 = props => {
    return (
        <Surface style={{
            elevation: 5, shadowColor: '#455B63', borderRadius: 12,
        }}>
            <TextInput style={[style.input]} onPressIn={props.onPress}

                secureTextEntry={props.secureTextEntry}
                placeholder={props.placeholder}
                placeholderTextColor='rgba(120,132,158,0.56)'
                keyboardType={props.keyboardType}
                onChangeText={props.onChangeText}
            />
        </Surface>
    );
};



export default TextInput1;
const style = StyleSheet.create({
    input: {
        // backgroundColor: 'green',
        height: 60,
        borderRadius: 12,
        color: 'rgba(120,132,158,0.56)',
        fontSize: 15,
        //   fontFamily:'GIBSON' SEMIBOLD
        paddingLeft: '5%',
        // borderWidth: 1,
        backgroundColor: '#FFFFFF',
        // shadowColor: '#455B63',
        // shadowOffset: { width: 0, height: 1 },
        // shadowRadius: 16,
        // shadowOpacity: 1,

    },

});