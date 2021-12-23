import React, { useState, useCallback, useEffect } from 'react'
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat'
import { SafeAreaView, StyleSheet, View, Image, Text, ViewBase } from 'react-native';
import STYLES from './STYLES';
import { SvgXml } from 'react-native-svg'
import svgs from './svgs';
import { ScrollView } from 'react-native-gesture-handler';

const CustomerGiftedChat = props => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
            {
                _id: 2,
                text: 'Hello World',
                createdAt: new Date(),
                user: {
                    _id: 1,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])


    const renderBubble = (props) => {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: '#FFA900',
                        //  alignSelf: "center"


                        //borderRadius: 30,
                        //  borderBottomRightRadius: 30,
                        borderBottomLeftRadius: 30,
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30
                        // marginBottom: 10,
                        // padding: 5,

                        // justifyContent: "flex-end",
                        // alignSelf: 'stretch',
                        // marginLeft: 0,
                        // alignSelf: "center"

                    },
                    left: {
                        backgroundColor: '#EAECF2'
                    },


                }}
                textStyle={{
                    left: {
                        fontSize: 12,
                        color: '#63697B'
                    },
                    right: {
                        fontSize: 12,
                        color: '#FFFFFF',
                    }

                }}

            />
        )
    }

    const renderSend = (props) => {
        return (
            <Send {...props}>
                <View>
                    <SvgXml xml={svgs.giftedchatsend} style={{
                        marginBottom: '25%',
                        marginRight: '3%'
                    }} />
                </View>
            </Send>
        )
    }
    // const renderTime = (props) => {
    //     return (
    //         { ...props }



    //     )
    // }


    return (

        <SafeAreaView style={STYLES.container}>

            {/* <View style={{ flex: 1 }}> */}
            <View style={[style.giftedchatheader,]}>
                <SvgXml xml={svgs.leftarrowgiftedchat} style={{ marginRight: '8%' }} />
                <View style={{
                    //backgroundColor: 'blue'
                }}>
                    <Image style={STYLES.giftedchathumanbeingimagestyle} source={require('./Images/humanbeing.png')} />
                    <View style={style.giftedchatimageuppersmallview} />
                </View>
                <View style={style.giftedchatviewnameandonline}>
                    <Text style={STYLES.textfont19gibsonwhite}>Blair Dota</Text>
                    <Text style={STYLES.textfont16gibsonwhite}>Online</Text>
                </View>

            </View>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}
                alwaysShowSend
                renderBubble={renderBubble}
                renderSend={renderSend}
                placeholder="Type something"
                renderAvatar={null}
            // renderTime={renderTime}
            // timeFormat={null}
            />
            {/* </View> */}

        </SafeAreaView>

    )

}


const style = StyleSheet.create({
    giftedchatheader: {
        flex: 0.14,
        backgroundColor: '#FFA900',
        alignItems: 'center',
        paddingHorizontal: '5%',
        flexDirection: 'row'
    },
    giftedchatimageuppersmallview: {
        backgroundColor: '#84C857', height: 10, width: 10, borderRadius: 10,
        borderWidth: 1, borderColor: '#F3F4F9', position: 'absolute',
        right: '-40%', top: '-5%'
    },
    giftedchatviewnameandonline: {
        marginLeft: '10%',
        paddingVertical: '2%',
        //backgroundColor: "green"
    }


});

export default CustomerGiftedChat;