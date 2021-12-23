import * as React from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useValue } from 'react-native-reanimated';
import STYLES from '../STYLES';

const RadioButton1 = () => {
    // const [checked, setChecked] = React.useState('first');

    // return (
    //     <View>
    //         <View style={{
    //             flexDirection: 'row',
    //             alignItems: 'center'
    //         }}>
    //             <RadioButton color="#FFA900"
    //                 // value="first"

    //                 status={checked === 'first' ? 'checked' : 'unchecked'}
    //                 onPress={() => setChecked('first')}
    //             />
    //             <Text style={STYLES.textfont20gibson454F63}>Driver
    //             </Text>
    //         </View>
    //         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    //             <RadioButton color="#FFA900"
    //                 // value="second"
    //                 status={checked === 'second' ? 'checked' : 'unchecked'}
    //                 onPress={() => setChecked('second')}
    //             />
    //             <Text style={STYLES.textfont20gibson454F63}>Customer
    //             </Text>
    //         </View>
    //     </View>
    // );

    const [checked, setChecked] = React.useState('driver');

    return (
        <View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <RadioButton color="#FFA900"
                    value="customer"

                    status={checked === 'driver' ? 'checked' : 'unchecked'}
                    onPress={() => { setChecked('driver') }}
                />
                <Text style={STYLES.textfont20gibson454F63}>Driver
                </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton color="#FFA900"
                    value="customer"
                    status={checked === 'customer' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('customer')}
                />
                <Text style={STYLES.textfont20gibson454F63}>Customer
                </Text>
            </View>
        </View>

    );
};

export default RadioButton1;
