import React from "react"
import {View, Text, Dimensions, StyleSheet, Image, FlatList, TouchableOpacity} from "react-native"
import {IconButton} from "react-native-paper"

const screenHeight = Dimensions.get("screen").height
const screenWidth = Dimensions.get("screen").width

class Pass extends React.Component{
    render(){
        return(
            <View style={styles.Root} >

                <View style={styles.Header} >
                    <IconButton icon="chevron-left"  style={{
                        marginLeft : 0.05*screenWidth,
                    }} size={0.065*screenWidth} onPress={() => {this.props.navigation.goBack()}} />
                    <Text style={styles.Profile} >Pass</Text>
                </View>

                <Text style={styles.Title} >Introducing GoRider Pass</Text>
                <Text style={styles.Des} >Enjoy dicounted fares on your daily commute.</Text>

                <View style={{marginTop : 0.02*screenHeight, marginLeft : 0.05*screenWidth}} >

                <View style={{flexDirection : "row", alignItems : "center"}} >
                    <Image
                        source={require("../assets/images/Icons/arrow-up.png")}
                        style={{
                            height : 0.03*screenHeight,
                            width : 0.03*screenHeight
                        }}
                    />
                    <Text style={styles.Des} >Rides at flat fares or less</Text>
                </View>

                <View style={{flexDirection : "row", alignItems : "center", marginTop : 0.02*screenHeight}} >
                    <Image
                        source={require("../assets/images/Icons/arrow-up-cut.png")}
                        style={{
                            height : 0.03*screenHeight,
                            width : 0.03*screenHeight
                        }}
                    />
                    <Text style={styles.Des} >No peak on flat fares</Text>
                </View>
                </View>

                <View style={styles.Dotted} ></View>

                <View style={{flexDirection : "row", alignItems : "center", marginTop : 0.02*screenHeight}} >
                <Text style={[styles.Title,{fontFamily : "SemiBold"}]} >Your Passes</Text>
                <Text style={[styles.Title,{fontFamily : "SemiBold", color : "#064AA7", position : "absolute", right : 0.05*screenWidth, top : 0.0*screenWidth}]} >SEE ALL</Text>
                </View>

                    <FlatList
                        data={data}
                        renderItem={({item}) => (

                            <TouchableOpacity activeOpacity={1} onPress={() => {this.props.navigation.push("PassDetail", {detail : item})}} >
                            <View style={styles.Container} >
                            <Image source={require("../assets/images/card-1.png")} 
                                style={{
                                    height : "100%",
                                    width : "100%",
                                    position : "absolute"
                                }}
                            />
                             <Image source={require("../assets/images/bike.png")} 
                                style={{
                                    height : 0.05*screenHeight,
                                    width : 0.16*screenWidth,
                                    position : "absolute",
                                    right : 0.05*screenWidth,
                                    top : 0.02*screenHeight
                                }}
                            />
                            <Text style={[styles.Title, {color : "#fff"}]}>{item.title}</Text>
                            <Text style={[styles.Des, {color : "#fff", marginTop : 0.05*screenHeight, fontFamily : "SemiBold"}]}>{item.des}</Text>


                                <View style={{flexDirection : "row", alignItems : "center", marginTop : 0.015*screenHeight}} >
                                <View>
                                <Text style={[styles.Des, {color : "#fff"}]} >BIKE</Text>
                                <Text style={[styles.Title, {color : "#fff", marginTop : 0}]} >{item.bike}</Text>
                                </View>

                                <View style={{left : 0.2*screenWidth, position : "absolute"}} >
                                <Text style={[styles.Des, {color : "#fff"}]} >AUTO</Text>
                                <Text style={[styles.Title, {color : "#fff", marginTop : 0}]} >{item.auto}</Text>
                                </View>
                                </View>


                                <View style={{flexDirection : "row", alignItems : "center", marginTop : 0.012*screenHeight}} >
                                <View>
                                <Text style={[styles.Des, {color : "#fff"}]} >RIDE LEFT</Text>
                                <Text style={[styles.Title, {color : "#fff", marginTop : 0}]} >{item.rideLeft}</Text>
                                </View>

                                <View style={{left : 0.2*screenWidth, position : "absolute"}} >
                                <Text style={[styles.Des, {color : "#fff"}]} >VALID TILL</Text>
                                <Text style={[styles.Title, {color : "#fff", marginTop : 0}]} >{item.validTill}</Text>
                                </View>

                                <View style={{left : 0.58*screenWidth, position : "absolute"}} >
                                <Text style={[styles.Des, {color : "#fff", fontFamily : "SemiBold"}]} >VALID ONLY IN</Text>
                                <Text style={[styles.Des, {color : "#fff", fontFamily : "SemiBold"}]} >{item.validOn}</Text>
                                </View>
                                </View>

                            </View>
                            </TouchableOpacity>
                        )}
                    />

            </View>
        )
    }
}

export default Pass

const data = [
    {
        "title" : "RIDE PASS - 15KM",
        "des" : "PAY FLAT FARE OR LESS PER RIDE",
        "bike" : "150",
        "auto" : "150",
        "rideLeft" : "17",
        "validTill" : "19 OCT 2020",
        "validOn" : "DELHI NCR",
        "icon" : require("../assets/images/bike.png")
    }
]

const styles = StyleSheet.create({
    Root : {
        flex : 1,
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
    Title : {
        fontFamily : "Bold",
        color : "#3E4958",
        fontSize : 0.05*screenWidth,
        marginTop : 0.02*screenHeight,
        marginLeft : 0.05*screenWidth
    },
    Des :{
        fontSize : 0.04*screenWidth,
        fontFamily : "Regular",
        marginLeft : 0.05*screenWidth,
        width : 0.55*screenWidth,
        color : "#848484"
    },
    Dotted  : {
        borderWidth: 1,
        borderRadius: 1,
        width : screenWidth,
        alignSelf : "center",
        marginTop : 0.05*screenHeight,
        borderColor : "#D5DDE0"
    },
    Container : {
        height : 0.32*screenHeight,
        width : 0.94*screenWidth,
        alignSelf : "center",
        marginVertical : 0.02*screenHeight,
        overflow : "hidden",
        borderRadius : 0.04*screenWidth
    }
})