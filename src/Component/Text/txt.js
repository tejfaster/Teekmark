import React from 'react'
import { View, Text, StyleSheet ,Image} from 'react-native'
import { TextInput } from 'react-native-paper'
import { wp, hp, bluewhite,hide } from '../../Style/helper'

export default function Txt({ placeholder,mode,label,source ,styleinput, secureTextEntry, value, onChange }) {
    return (
        <View style={{borderRadius:25,flexDirection:'row',marginTop:10}}>
            
            <TextInput
                mode={mode}
                placeholder={placeholder}
                label={label}
                secureTextEntry={secureTextEntry}
                value={value}
                onChange={onChange}
                underlineColor='white'
                style={[styles.txtinput, styleinput]}
            />
            <View style={[styles.hide,{ height:hp('7.25%'),width:wp('10%'),}]}>
               <Image source={source} style={[styles.hide,{marginTop:hp('2.5%')}]}/>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    txtinput: {
        fontSize: hp('2%'),
        backgroundColor: bluewhite,
        //margin:wp('2%'),
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        width:wp('85%'),
        marginLeft:wp('2%')
    },
    hide:{
        width:wp('5%'),
        height:hp('2%'),
        backgroundColor: bluewhite,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        
    }
})