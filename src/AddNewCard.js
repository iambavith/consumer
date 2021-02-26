import React from "react"
import {View, Text, Dimensions, StyleSheet, TextInput, TouchableOpacity} from "react-native"
import {IconButton} from "react-native-paper"

const screenHeight = Dimensions.get("screen").height
const screenWidth = Dimensions.get("screen").width

class AddNewCard extends React.Component{

    state = {
        cardNumber : "",
        validUpto : "",
        cvv : "",
        name : ""
    }

    render(){
        return(
            <View style={styles.Root} >

            
            <View style={styles.Header} >
                    <IconButton icon="chevron-left"  style={{
                        marginLeft : 0.05*screenWidth,
                    }} size={0.065*screenWidth} onPress={() => {this.props.navigation.goBack()}} />
                    <Text style={styles.Profile} >Add a Credit/Debit Card</Text>
                </View>

                    <Text style={styles.ItemName} >Card Number</Text>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Enter 16 digit Card Number"
                        placeholderTextColor="#CCCCCC"
                        value={this.state.cardNumber}
                        onChangeText={(cardNumber) => {this.setState({cardNumber : cardNumber})}}
                    />

                    <View style={{width : screenWidth, flexDirection : "row", marginTop : 0.02*screenHeight}} >
                    <View>
                    <Text style={styles.ItemName} >Valid upto</Text>
                    <TextInput
                        style={[styles.TextInput, {width : 0.3*screenWidth, alignSelf : "auto", marginLeft : 0.05*screenWidth}]}
                        placeholder="MM/YY"
                        placeholderTextColor="#CCCCCC"
                        value={this.state.validUpto}
                        onChangeText={(validUpto) => {this.setState({validUpto : validUpto})}}
                    />
                    </View>

                    <View style={{marginLeft : 0.04*screenWidth}} >
                    <Text style={styles.ItemName} >CVV</Text>
                    <TextInput
                        style={[styles.TextInput, {width : 0.3*screenWidth, alignSelf : "auto", marginLeft : 0.05*screenWidth}]}
                        placeholder="xxx"
                        placeholderTextColor="#CCCCCC"
                        value={this.state.cvv}
                        onChangeText={(cvv) => {this.setState({cvv : cvv})}}
                        secureTextEntry={true}
                    />
                    </View>

                    </View>

                    <Text style={[styles.ItemName, {marginTop : 0.03*screenHeight}]} >Name on Card</Text>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Enter your card name"
                        placeholderTextColor="#CCCCCC"
                        value={this.state.name}
                        onChangeText={(name) => {this.setState({name : name})}}
                    />

                        <TouchableOpacity style={styles.Button} onPress={() => {this.props.navigation.push("VerifyCode")}} >
                            <Text style={styles.Add} >Add Card</Text>
                        </TouchableOpacity>

            </View>
        )
    }
}

export default AddNewCard

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
    ItemName : {
        marginLeft : 0.05*screenWidth,
        marginVertical : 0.02*screenHeight,
        fontFamily : "Medium",
        fontSize : 0.045*screenWidth
    },
    TextInput : {
        fontFamily : "SemiBold",
        color : "#383A3C",
        fontSize : 0.04*screenWidth,
        height : 0.07*screenHeight,
        backgroundColor : "#FBFBFF",
        width : 0.9*screenWidth,
        alignSelf : "center",
        borderWidth : 1.5,
        borderColor : "#E8E9F9",
        borderRadius : 0.03*screenWidth,
        flexDirection : "row",
        paddingLeft : 0.05*screenWidth
    },
    Button : {
        height : 0.08*screenHeight,
        width: 0.9*screenWidth,
        backgroundColor : "#13DA9C",
        marginVertical : 0.04*screenHeight,
        alignSelf : "center",
        borderRadius : 0.03*screenWidth,
        alignItems : "center",
        justifyContent : "center"
    },
    Add : {
        color : "#fff",
        fontFamily : "Bold",
        fontSize : 0.045*screenWidth
    }
})