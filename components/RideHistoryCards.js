import React from "react"
import {View, Text, Dimensions, StyleSheet, Image, } from "react-native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const screenHeight = Dimensions.get("screen").height
const screenWidth = Dimensions.get("screen").width

class RideHistoryCards extends React.Component{
    render(){
        return(
            <View style={styles.Container} >
                {
                    this.props.sheduled ? 
                    <View style={{height : "100%", width : "100%"}} >
                        <View style={{flexDirection : "row", alignItems : "center"}} >
                            <Image
                                source={
                                    this.props.vechicle === "Bike" ?
                                    require("../assets/images/bike-1.png")
                                    : this.props.vechicle === "Rickshaw" ?
                                    require("../assets/images/rickshaw.png")
                                    : null
                                }
                                style={{
                                    height : 0.07*screenHeight,
                                    width : 0.07*screenHeight,
                                    marginLeft : 0.05*screenWidth,
                                    marginTop : 0.02*screenHeight,
                                }}
                            />
                            <Text style={[styles.Text1, {marginTop : 0.02*screenHeight}]} >Bike Rental</Text>
                            <Text style={[styles.Text2, {top : 0.04*screenHeight}]} >SHEDULED</Text>
                        </View>


                        <View style={{flexDirection : "row", alignItems : "center", marginLeft : 0.05*screenWidth}} >
                        <Icon name="checkbox-blank-circle" color="#13DA9C" />
                        <Text style={styles.Text1} >{this.props.to}</Text>
                        </View>

                                <View style={styles.Dotted} />

                        <Text style={styles.Text3} >{this.props.date}</Text>
                        <Text style={styles.Text1} >{this.props.description}</Text>
                    </View>
                    :
                    <View style={{height : "100%", width : "100%"}} >
                        <View style={{flexDirection : "row", alignItems : "center"}} >
                            <Image
                                source={
                                    this.props.vechicle === "Bike" ?
                                    require("../assets/images/bike-1.png")
                                    : this.props.vechicle === "Rickshaw" ?
                                    require("../assets/images/rickshaw.png")
                                    : null
                                }
                                style={{
                                    height : 0.05*screenHeight,
                                    width : 0.05*screenHeight,
                                    marginLeft : 0.05*screenWidth,
                                    marginTop : 0.02*screenHeight,
                                }}
                            />
                            <View>
                            <Text style={[styles.Text4, {marginTop : 0.02*screenHeight, }]} >{this.props.number}</Text>
                            <Text style={[styles.Text4, {fontSize : 0.035*screenWidth}]} >{this.props.vechicle}</Text>
                            </View>


                            <View style={{flexDirection : "row", marginLeft : 0.06*screenWidth, alignItems : "center"}} >
                            <Image source={require("../assets/images/avatar.png")} style={{height : 0.05*screenHeight, width : 0.05*screenHeight}} />
                            <Text style={[styles.Text4, {width : 0.35*screenWidth, marginLeft : 0.03*screenWidth}]} >{this.props.username}</Text>
                            </View>


                        </View>

                                <View style={styles.Dotted} />

                        <View style={{flexDirection : "row"}} >
                        <Text style={styles.Text3} >{this.props.date}</Text>
                        <Text style={[styles.Text3, {position : "absolute", right : 0.045*screenWidth}]} >{this.props.price}</Text>
                        </View>
                        
                        <View style={{
                            marginVertical : 0.02*screenHeight,
                            marginLeft : 0.05*screenWidth
                        }} >
                        <View style={{flexDirection : "row", alignItems : "center"}} >
                            <Text style={styles.Text5} >{this.props.pickuptime}</Text>
                            <Icon name="checkbox-blank-circle" color="#13DA9C" style={{marginLeft : 0.05*screenWidth}} />
                            <Text style={styles.Text1} >{this.props.from}</Text>
                        </View>

                        <View
                            style={{
                                height : 0.025*screenHeight,
                                width : 1,
                                backgroundColor : "#3E4958",
                                marginLeft : 0.13*screenWidth
                            }}
                        />

                        <View style={{flexDirection : "row", alignItems : "center"}} >
                            <Text style={styles.Text5} >{this.props.pickuptime}</Text>
                            <Icon name="menu-down" color="#4B545A" style={{marginLeft : 0.03*screenWidth}} size={0.065*screenWidth} />
                            <Text style={[styles.Text1, {marginLeft : 0.02*screenWidth}]} >{this.props.to}</Text>
                        </View>
                        </View>
                    </View>
                }
            </View>
        )
    }
}

export default RideHistoryCards

const styles = StyleSheet.create({
    Container : {
        height : 0.3*screenHeight,
        width : 0.9*screenWidth,
        backgroundColor : "#fff",
        margin : 0.02*screenHeight,
        alignSelf : "center",
        borderRadius : 0.05*screenWidth,
        elevation : 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.1,
        shadowRadius: 9.51,
    },
    Text1 : {
        fontFamily : "Regular",
        fontSize : 0.045*screenWidth,
        color : "#383A3C",
        marginLeft : 0.04*screenWidth
    },
    Text2 : {
        fontFamily : "SemiBold",
        fontSize : 0.05*screenWidth,
        color : "#13DA9C",
        position : "absolute",
        right: 0.05*screenWidth,
    },
    Dotted  : {
        borderStyle: "dashed",
        borderWidth: 1,
        borderRadius: 1,
        width : "80%",
        alignSelf : "center",
        marginVertical : 0.02*screenHeight,
        borderColor : "#D5DDE0"
    },
    Text3 : {
        fontFamily : "SemiBold",
        fontSize : 0.05*screenWidth,
        color : "#383A3C",
        marginLeft : 0.05*screenWidth
    },
    Text4 : {
        fontFamily : "Medium", 
        fontSize : 0.04*screenWidth,
        color : "#383A3C",
        marginLeft : 0.04*screenWidth
    },
    Text5 : {
        fontFamily : "Regular", 
        fontSize : 0.04*screenWidth,
        color : "#97ADB6"
    },
})