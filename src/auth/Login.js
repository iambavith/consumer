import React from "react"
import {View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity} from "react-native"

const screenHeight = Dimensions.get("screen").height
const screenWidth = Dimensions.get("screen").width

class Login extends React.Component{

    state = {
        number : ""
    }

    render(){
        return(
            <View style={styles.Root} >
                <Text style={styles.Title} >Login</Text>
                <Text style={styles.Des} >Please Enter your phone number begins</Text>
                <View
                    style={styles.Dash}
                />

                <Text style={[styles.Des, {marginTop : 0.058*screenHeight, fontSize : 0.045*screenWidth}]} >Mobile Number</Text>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Enter Mobile Number"
                    value={this.state.number}
                    onChangeText={(number) => {
                        this.setState({
                            number : number
                        })
                    }}
                    keyboardType="number-pad"
                />

                <TouchableOpacity style={styles.Button} onPress={() => {
                    this.props.navigation.push("GetOtp")
                }} >
                <Text style={styles.Text} >Get OTP</Text>
                </TouchableOpacity>


            </View>
        )
    }
}

export default Login

const styles = StyleSheet.create({
    Root : {
        flex : 1,
        backgroundColor : "#fff"
    },
    Title : {
        fontFamily : "SemiBold",
        fontSize : 0.045*screenWidth,
        color : "#3E4958",
        marginTop : 0.08*screenHeight,
        marginLeft : 0.08*screenWidth
    },
    Des : {
        fontFamily : "Medium",
        fontSize : 0.035*screenWidth,
        color : "#3E4958",
        marginLeft : 0.08*screenWidth
    },
    Dash : {
        height : 3,
        width : 0.1*screenWidth,
        marginLeft : 0.08*screenWidth,
        backgroundColor : "#000",
        marginTop : 0.02*screenHeight,
        borderRadius : screenHeight
    },
    TextInput : {
        height : 0.06*screenHeight,
        width: 0.84*screenWidth,
        borderWidth : 2,
        borderRadius : 0.02*screenWidth,
        borderColor : "#E8E9F9",
        paddingLeft : 0.05*screenWidth,
        paddingRight : 0.05*screenWidth,
        fontFamily : "Medium",
        alignSelf : "center",
        marginTop : 0.02*screenHeight
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
    }
})