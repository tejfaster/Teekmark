import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { orange, wp, hp } from '../../Style/helper'

export default function Buton({ txt, source, style, onPress, stylebutton, styletxt }) {
    return (
        <View>
            <TouchableOpacity
                onPress={onPress}
                style={[styles.button, stylebutton]}>
                {
                    txt === 'null' ?
                        <Image source={source} style={style} /> :
                        <Text style={[styles.txtstyle, styletxt]} >{txt}</Text>
                }
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        height: hp('6%'),
        width: wp('10%'),
        backgroundColor: orange,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtstyle: {
        // fontWeight: 'bold',
        fontFamily: 'Arial',
        color: 'white',
    }
})