import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Txt, Button } from '../Component'
import { wp, hp, darkblue, logo, orange, hide,showngrey } from '../Style/helper'

export default function Login({navigation}) {
    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.teek}>Teekmark</Text>
            </View>
            <Text style={styles.wlc}>Hey,</Text>
            <Text style={styles.sign}>Fill in the details to get started</Text>
            <Txt
                placeholder="Enter your full name"
                label="Name"
            />
            <Txt
                placeholder="Enter your Email address"
                label="Email"
            />
            <Txt
                label="Password"
                placeholder="Enter Password"
                secureTextEntry={true}
                source={hide}
            />
             <Txt
                label="Confirm Password"
                placeholder="Enter Password"
                secureTextEntry={true}
                source={hide}
            />
              <Txt
                label="Location"
                placeholder="Enter Location"                          
            />
            <Text style={styles.forgot}>Forget Password?</Text>
            <Button txt='Sign Up' stylebutton={styles.buton} onPress={()=>navigation.navigate("Home")}/>
            <View style={{ justifyContent: 'center', flexDirection: 'row', marginTop: hp('2%') }}>
                <Text style={{ fontFamily: 'sans-serif', fontWeight: 'bold' }}> Already a member? </Text>
                <TouchableOpacity  onPress={() => navigation.navigate('Login')}>
                    <Text style={{ fontFamily: 'sans-serif', fontWeight: 'bold', color: orange }}>Login</Text>
                </TouchableOpacity>
            </View>
            <Text style={{alignSelf:'center',color:showngrey,marginTop:10}}>By Creating an account, you are agreeing to</Text>
            <View style={{ flexDirection:'row',justifyContent:'center'}}>
            <Text style={{color:showngrey,marginTop:10}}>our</Text>
            <Text style={{color:'black',marginTop:10,marginLeft:5,fontFamily
        :'Arial',fontWeight:'bold'}}>Terms of Services</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        height: hp('10%'),
        width: wp('18%'),
        alignSelf: 'center'
    },
    teek: {
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 5
    },
    wlc: {
        fontFamily: 'Roboto',
        color: darkblue,
        fontWeight: 'bold',
        fontSize: hp('4%'),
        marginTop: hp('4%'),
        marginLeft: wp('1%')
    },
    sign: {
        fontFamily: 'Roboto',
        fontSize: hp('2%'),
        margin: hp('1%')
    },
    forgot: {
        fontFamily: 'Roboto',
        color: darkblue,
        marginLeft: wp('65%'),
        marginTop: hp('1%')
    },
    buton: {
        alignSelf: 'center',
        width: wp('40%'),
        height: hp('7%'),
        borderRadius: 10,
        marginTop: hp('5%')
    },

})