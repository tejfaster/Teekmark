import React from 'react'
import { View, Text,Image,StyleSheet, TouchableOpacity } from 'react-native'
import {Txt,Button} from '../Component'
import {wp,hp,darkblue,logo,orange,hide} from '../Style/helper'

export default function Login({navigation}) {
    return (
        <View>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <Image source={logo} style={styles.logo}/>
            <Text style={styles.teek}>Teekmark</Text>
            </View>
            <Text style={styles.wlc}>Welcome Back,</Text>
            <Text style={styles.sign}>Sign in to Continue</Text>
            <Txt           
            placeholder="Enter your Email Password"
            label="Email"
            />
            <Txt 
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={true}
            source={hide}
            />
            <Text style={styles.forgot}>Forget Password?</Text>
            <Button txt='Login' stylebutton={styles.buton} onPress={()=> navigation.navigate('Home')}/>
            <View style={{justifyContent:'center',flexDirection:'row',marginTop:hp('2%')}}>
            <Text style={{fontFamily:'sans-serif',fontWeight:'bold'}}> No account yet? </Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Signup')} >
                <Text style={{fontFamily:'sans-serif',fontWeight:'bold',color:orange}}>Sign up</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    logo:{
        height:hp('10%'),
        width:wp('18%'),
        alignSelf:'center'
    },
    teek:{
        fontFamily:'Poppins',
        fontWeight:'bold',
        fontSize:20,
        marginLeft:5
    },
    wlc:{
        fontFamily:'Roboto',
        color:darkblue,
        fontWeight:'bold',
        fontSize:hp('4%'),
        marginTop:hp('4%'),
        marginLeft:wp('1%')
    },
    sign:{
        fontFamily:'Roboto',
        fontSize:hp('2%'),
        margin:hp('1%')
    },
    forgot:{
        fontFamily:'Roboto',
        color:darkblue,
        marginLeft:wp('65%'),
        marginTop:hp('1%')
    },
    buton:{
        alignSelf:'center',
        width:wp('40%'),
        height:hp('7%'),
        borderRadius:10,
        marginTop:hp('5%')
    },

})