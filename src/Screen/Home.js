import React from 'react'
import { View, Text, Image, ImageBackgroundage, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import { Button, Txt } from '../Component'
import { wp, hp, twofingers, amazon, notification, lightgrey,settinglines, heartoutline, edit, coding, molecular, verified, facebook,apple } from '../Style/helper'

export default function Home() {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ marginLeft: wp('2%') }}>
                    <View style={{ flexDirection: 'row', marginTop: hp('2%') }}>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: wp('5%') }}>Hi John</Text>
                                <Image source={twofingers} style={{ width: wp('4%'), height: hp('3%'), marginLeft: 5 }} />
                            </View>
                            <Text style={{ fontFamily: 'Arial', fontSize: wp('5.5%'), fontWeight: 'bold', }}>Find your perfect job!</Text>
                        </View>
                        <View style={{ height: hp('7.5%'), width: wp('15%'), backgroundColor: '#F3F3F3', marginLeft: wp('20%'), justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}>
                            <Image source={notification} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Txt
                            placeholder='What are you looking for?'
                            styleinput={{ width: wp('65%'), marginLeft: 0 }} />
                        <Button stylebutton={styles.button} txt='null' source={settinglines} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Banner txt='Product' />
                        <Banner txt='Design' />
                        <Banner txt='Development' bannerstyle={{ width: wp('30%') }} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontFamily: 'Arial', fontSize: wp('5.5%'), fontWeight: 'bold'}} >Popular Job</Text>
                        <Text style={{ marginLeft: wp('48%'), marginTop: 5 }}>See All</Text>
                    </View>
                    <ScrollView horizontal={true}>
                        <Job />
                        <Job jobstyle={{ backgroundColor: '#CFE6EB', borderRadius: 20 }} />
                    </ScrollView>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontFamily: 'Arial', fontSize: wp('5.5%'), fontWeight: 'bold'}} >Job category</Text>
                        <Text style={{ marginLeft: wp('48%'), marginTop: 5 }}>See All</Text>
                    </View>
                    <ScrollView horizontal={true}>
                        <Category source={edit} txt='Design' />
                        <Category source={coding} txt='Software' catstyle={{width:wp('10%')}} />
                        <Category source={molecular} txt='Networking' />
                        <Category source={verified} txt='special' />
                    </ScrollView>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontFamily: 'Arial', fontSize: wp('5.5%'), fontWeight: 'bold'}} >Job for you</Text>
                        <Text style={{ marginLeft: wp('48%'), marginTop: 5 }}>See All</Text>
                    </View>
                    <You source={facebook} txt='Facebook'/>
                    <You source={apple} txt='Apple'/>
                </View>               
            </ScrollView>
        </SafeAreaView>
    )
}

const Banner = ({ txt, bannerstyle }) => {
    return (
        <View style={[styles.banner, bannerstyle]}>
            <Text>{txt}</Text>
        </View>
    )
}

const Job = ({ jobstyle }) => {
    return (
        <View style={[styles.job, jobstyle]}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'column' }}>
                    <Text>Amazon</Text>
                    <Text style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: 16 }}>Lead Product Manger</Text>
                </View>
                <View style={[styles.amazon, { backgroundColor: 'white' }]} >
                    <Image source={amazon} />
                </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: hp('2%') }}>
                <View style={{ flexDirection: 'column' }}>
                    <Text>Bangalore, Karnataka</Text>
                    <Text style={[styles.amazon, { fontFamily: 'Arial', fontWeight: 'bold', fontSize: 16, width: wp('30%'), marginLeft: 0, padding: 8,backgroundColor:'white' }]}>7.5 - 10 LPA</Text>
                </View>
                <View style={[styles.amazon, { marginTop: hp('2%'), marginLeft: wp('14%') }]} >
                    <Image source={heartoutline} />
                </View>
            </View>
        </View>
    )
}

const Category = ({source,txt,catstyle}) => {
    return (
        <View style={styles.category}>
            <Image source={source} />
            <Text>{txt}</Text>
            <Text style={{fontFamily:'Arial',fontWeight:'bold'}}>3.2k Jobs</Text>
        </View>
    )
}
const You = ({source,txt}) => {
    return(
        <View style={styles.you}>
            <Image source={source} style={{margin:10}}/>
            <View style={{flexDirection:'column',marginLeft:20}}>
                <Text style={{fontFamily:'Arial',fontWeight:'bold',fontSize:18}}>UI/UX Designer</Text>
                <Text>{`${txt}. Full time`}</Text>
            </View>
            <View style={[styles.amazon,{width:wp('30%'),backgroundColor:lightgrey}]} >
                <Text> 7.5-10 LPA</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        marginTop: hp('1.2%'),
        marginLeft: wp('5%'),
        width: wp('15%'),
        height: hp('7%'),
        borderRadius: 15,
    },
    banner: {
        height: hp('4%'),
        width: wp('20%'),
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        margin: wp('2%')
    },
    job: {
        height: hp('20%'),
        width: wp('70%'),
        backgroundColor: '#EDDCD285',
        margin: wp('2%'),
        borderRadius: 20,
        padding: wp('3%')
    },
    amazon: {
        marginLeft: wp('8%'),
        marginTop: hp('0.5%'),
        // backgroundColor: 'white',
        height: hp('5%'),
        width: wp('10%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    category: {
        height: hp('15%'),
        width: wp('30%'),
        borderWidth: 1,
        borderRadius: 15,
        marginTop: 5,
        alignItems:'center',
        justifyContent:'center',
        marginRight:10
    },
    you:{
        width:wp('95%'),
        height:hp('10%'),
        borderWidth: 1,
        borderRadius:10,
        marginTop:5,
       // justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    }
})
