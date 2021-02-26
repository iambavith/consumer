import React from "react"
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity} from "react-native"

const screenHeight = Dimensions.get("screen").height
const screenWidth = Dimensions.get("screen").width

class Welcome extends React.Component{
    render(){
        return(
            <View style={styles.Root} >
                <Image
                    source={require("../../assets/images/logo.png")}
                    style={{
                        height : 0.1*screenHeight,
                        width : 0.76*screenWidth,
                        marginVertical : 0.02*screenHeight
                    }}
                />

                    <Image
                        source={require("../../assets/images/illustration-2.png")}
                        style={{
                            height : 0.4*screenHeight,
                            width : 0.8*screenWidth
                        }}
                    />

                        <TouchableOpacity style={styles.Button} onPress={() => {this.props.navigation.push("SignUp")}} >
                            <Text style={styles.Text} >Get Start</Text>
                        </TouchableOpacity>

            </View>
        )
    }
}

export default Welcome

const styles = StyleSheet.create({
    Root : {
        flex : 1,
        backgroundColor : "#fff",
        alignItems : "center",
        justifyContent : "center"
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
        marginTop : 0.1*screenHeight
    },
    Text : {
        fontFamily : "Bold",
        fontSize : 0.045*screenWidth,
        color : "#fff"
    },
})