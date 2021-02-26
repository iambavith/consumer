import React from 'react'
import {View, Text, Dimensions, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity} from "react-native"
import {IconButton} from "react-native-paper"

const screenHeight = Dimensions.get("screen").height
const screenWidth = Dimensions.get("screen").width

class Insaurance extends React.Component{
    render(){
        return(
            <View style={styles.Root} >

                <View style={styles.Header} >
                    <IconButton icon="chevron-left"  style={{
                        marginLeft : 0.05*screenWidth,
                    }} size={0.065*screenWidth} onPress={() => {this.props.navigation.goBack()}} />
                    <Text style={styles.Profile} >Insaurance</Text>
                </View>

                    <ScrollView>

                    <View style={{
                        height : 0.08*screenHeight, 
                        width : 0.9*screenWidth, 
                        backgroundColor : "rgba(19, 218, 156, 0.16)",
                        borderWidth : 2,
                        borderColor : "#B9E6D8",
                        borderRadius : 0.03*screenWidth,
                        alignSelf : 'center',
                        alignItems : "center",
                        justifyContent : "center",
                        marginVertical : 0.015*screenHeight
                        }} >

                        <Text
                            style={{
                                fontFamily : "Medium",
                                color : "#0F825E",
                                fontSize : 0.038*screenWidth
                            }}
                        >You insurance coverrage is vaild for all rides on {"\n"} GoRider</Text>

                    </View>

                    <Text
                        style={{
                            fontSize : 0.045*screenWidth,
                            fontFamily : "Medium",
                            color : "#3E4958",
                            marginVertical : 0.01*screenHeight,
                            marginLeft : 0.06*screenWidth
                        }}
                    >Policy Coverage</Text>

                   <FlatList
                       data={data}
                       ItemSeparatorComponent={() => (
                           <View style={{
                               height : 2,
                               width : 0.65*screenWidth,
                               backgroundColor : "rgba(0,0,0,0.08)",
                               alignSelf : "flex-end",
                               marginVertical : 0.015*screenHeight,
                               marginRight : 0.1*screenWidth
                           }} />
                       )}
                       renderItem={({item}) => (
                        <View style={{
                        flexDirection  :"row",
                        alignItems : "center",
                        marginLeft : 0.05*screenWidth,
                        marginTop : 0.025*screenHeight
                    }} >
                        <Image
                            source={require("../assets/images/noti-1.png")}
                            style={{
                                height : 0.08*screenHeight,
                                width : 0.08*screenHeight
                            }}
                        />
                        <View style={{
                            marginLeft : 0.045*screenWidth,
                            justifyContent : "center"
                        }} >
                            <Text style={{
                                fontFamily : "Medium",
                                fontSize : 0.04*screenWidth,
                                color : "#333333"
                            }} >{item.title}</Text>

                                <Text style={styles.Des} >{item.des}</Text>
                        </View>
                    </View>
                       )}
                   />

                    <Text
                        style={{
                            fontSize : 0.045*screenWidth,
                            fontFamily : "SemiBold",
                            color : "#333333",
                            marginTop : 0.025*screenHeight,
                            marginLeft : 0.06*screenWidth
                        }}
                    >Legal</Text>

                    <View style={{flexDirection : "row", alignItems : "center", marginVertical : 0.015*screenHeight, marginLeft : 0.05*screenWidth}} >
                        <Text style={styles.Des} >Claim Procedure</Text>

                        <Text style={{
                                fontFamily : "SemiBold",
                                fontSize : 0.04*screenWidth,
                                color : "#064AA7",
                                position : "absolute",
                                right : 0.05*screenWidth
                        }} >View</Text>
                    </View>

                    <View style={{flexDirection : "row", alignItems : "center", marginVertical : 0.0*screenHeight, marginLeft : 0.05*screenWidth}} >
                        <Text style={styles.Des} >Terms and Condition</Text>

                        <Text style={{
                                fontFamily : "SemiBold",
                                fontSize : 0.04*screenWidth,
                                color : "#064AA7",
                                position : "absolute",
                                right : 0.05*screenWidth
                        }} >View</Text>
                    </View>

                    <Text
                        style={{
                            fontSize : 0.045*screenWidth,
                            fontFamily : "SemiBold",
                            color : "#064AA7",
                            marginTop : 0.025*screenHeight,
                            marginLeft : 0.06*screenWidth
                        }}
                    >Note:</Text>

                    <Text style={[styles.Des, {marginLeft : 0.06*screenWidth, marginVertical : 0.01*screenHeight}]} >Phone number, email id, date of birth are {"\n"}mandatory for the claim</Text>

                    <Text style={[styles.Des, {marginLeft : 0.06*screenWidth, marginVertical : 0.01*screenHeight}]} >For any insurance related queries, contact{"\n"}{
                        <Text style={[styles.Des, {marginLeft : 0.06*screenWidth, marginVertical : 0.01*screenHeight, color : "#064AA7"}]} >186093030003</Text>
                    }</Text>

                    <TouchableOpacity style={styles.Button} >
                        <Text style={[styles.Profile, {color : "#fff"}]} >Claim Insurance</Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        )
    }
}

export default Insaurance

const data = [
    {
        "title" : "Personal accident/ accident death",
        "des" : "Up to Rs 5,00,000"
    },
    {
        "title" : "Medical Expenses for Hospitalization",
        "des" : "Up to Rs 1,00,000"
    },
    {
        "title" : "OPD Treatement",
        "des" : "Up to Rs 3,000"
    },
    {
        "title" : "Medical Expenses for Hospitalization",
        "des" : "Up to Rs 1,00,000"
    }
]

const styles = StyleSheet.create({
    Root : {
        flex: 1,
        backgroundColor : "#fff"
    },
    Header : {
        flexDirection : "row",
        marginTop : 0.05*screenHeight,
        alignItems : "center",
    },
    Profile : {
        fontFamily : "SemiBold",
        marginLeft : 0.05*screenWidth,
        fontSize : 0.045*screenWidth,
        color : "#3E4958"
    },
    Des : {
        fontFamily : "Regular",
        fontSize : 0.04*screenWidth,
        color : "#333333"
},
Button : {
    height : 0.07*screenHeight,
    width : 0.9*screenWidth,
    backgroundColor : "#13DA9C",
    alignItems : "center",
    justifyContent : "center",
    borderRadius : 0.03*screenWidth,
    marginVertical : 0.025*screenHeight,
    alignSelf : "center",
}
})