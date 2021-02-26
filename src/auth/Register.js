import React from "react"
import {View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, CheckBox} from "react-native"
import {IconButton} from "react-native-paper"

const screenHeight = Dimensions.get("screen").height
const screenWidth = Dimensions.get("screen").width

class Register extends React.Component{

    state = {
        name : "",
        mobile : "",
        male : false,
        female : false
    }

    render(){
        return(
            <View style={styles.Root} >
                    <View style={styles.Header} >
                    <IconButton icon="chevron-left"  style={{
                        marginLeft : 0.05*screenWidth,
                    }} size={0.065*screenWidth} onPress={() => {this.props.navigation.goBack()}} />
                    <Text style={styles.Profile} >Register</Text>
                </View>

                <Text style={[styles.Des, {marginTop : 0.04*screenHeight, fontSize : 0.045*screenWidth}]} >Name</Text>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Enter Name"
                    value={this.state.name}
                    onChangeText={(name) => {
                        this.setState({
                            name : name
                        })
                    }}
                />

                
                <Text style={[styles.Des, {marginTop : 0.04*screenHeight, fontSize : 0.045*screenWidth}]} >Mobile</Text>
                <TextInput
                    style={styles.TextInput}
                    placeholder="9xxxxxxxx1"
                    value={this.state.mobile}
                    onChangeText={(mobile) => {
                        this.setState({
                            mobile : mobile
                        })
                    }}
                />

            <Text style={[styles.Des, {marginTop : 0.04*screenHeight, fontSize : 0.045*screenWidth}]} >Gender</Text>

                    <View style={{flexDirection : "row", alignItems : "center"}} >


                    <CheckBox
                            value={this.state.male}
                            style={{
                                marginVertical : 0.02*screenHeight,
                                marginLeft : 0.08*screenWidth
                            }}
                            onChange={() => {
                                this.setState({
                                    female : false,
                                    male : true
                                })
                            }}
                        />
                          <Text style={[styles.Des, {marginTop : 0, fontSize : 0.045*screenWidth, marginLeft : 0.02*screenWidth}]} >Male</Text>



                          <CheckBox
                            value={this.state.female}
                            style={{
                                marginVertical : 0.02*screenHeight,
                                marginLeft : 0.08*screenWidth
                            }}
                            onChange={() => {
                                this.setState({
                                    female : true,
                                    male : false
                                })
                            }}
                        />
                          <Text style={[styles.Des, {marginTop : 0, fontSize : 0.045*screenWidth, marginLeft : 0.02*screenWidth}]} >female</Text>


                    </View>

                <TouchableOpacity style={styles.Button} onPress={() => {
                    this.props.navigation.push("Main")
                }} >
                <Text style={styles.Text} >Submit</Text>
                </TouchableOpacity>


            </View>
        )
    }
}

export default Register

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
    }
})