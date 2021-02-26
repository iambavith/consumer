import React from "react"
import {View, Text, Dimensions, StyleSheet, Image, TouchableOpacity} from "react-native"
import {IconButton} from "react-native-paper"

const screenHeight = Dimensions.get("screen").height
const screenWidth = Dimensions.get("screen").width

class Arrived extends React.Component{
    render(){
        return(
            <View style={styles.Root} >

                <IconButton
                    icon="close"
                    size={0.06*screenWidth}
                    style={{
                        backgroundColor : "#fff",
                        position : "absolute",
                        top : 0.03*screenHeight,
                        left : 0.05*screenWidth
                    }}
                />

                <View style={styles.Container} >
                    <Image
                        source={require("../assets/images/bike-2.png")}
                        style={{
                            height : 0.2*screenHeight,
                            width : 0.2*screenWidth
                        }}
                    />
                    <Text style={styles.Text} >Your Bike has arrived</Text>

                    <View style={{
                                flexDirection : "row",
                                alignItems : "center",
                                justifyContent : "center",
                                top : 0.04*screenHeight
                            }} >

                            <TouchableOpacity style={[styles.Button, {width : 0.35*screenWidth}]}
                             >
                            <Text style={{
                                fontFamily : "SemiBold",
                                fontSize : 0.04*screenWidth,
                                color:"#fff"
                            }} >
                           I'm Coming
                            </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.Button, {width : 0.35*screenWidth, backgroundColor: "#F3F5F6"}]} onPress={() => {
                                this.props.navigation.push("CancelRide")
                            }} >
                            <Text style={{
                                fontFamily : "SemiBold",
                                fontSize : 0.04*screenWidth,
                            }} >
                           Call
                            </Text>
                            </TouchableOpacity>

                            </View>
                </View>
            </View>
        )
    }
}

export default Arrived

const styles = StyleSheet.create({
    Root : {
        height : "100%",
        width : "100%",
        backgroundColor : "rgba(0,0,0,0.5)",
        position : "absolute",
        zIndex : 100,
        alignItems : "center",
        justifyContent : "center"
    },
    Container : {
        height : 0.54*screenHeight,
        width : 0.88*screenWidth,
        backgroundColor : "#fff",
        borderRadius : 0.055*screenWidth,
        alignItems : "center",
        justifyContent : "center"
    } ,
     Text : {
        fontFamily : "Bold",
        fontSize : 0.045*screenWidth,
        color : "#3E4958",
        marginVertical : 0.02*screenHeight
    },
    Button : {
        height : 0.07*screenHeight,
        width : 0.9*screenWidth,
        backgroundColor : "#13DA9C",
        alignItems : "center",
        justifyContent : "center",
        marginHorizontal : 0.03*screenWidth,
        borderRadius : 0.03*screenWidth,
        marginVertical : 0.015*screenHeight,
        alignSelf : "center"
    }
})