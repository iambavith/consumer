import React from "react"
import {View, Text, Dimensions, TouchableOpacity, StyleSheet} from "react-native"
import {IconButton} from "react-native-paper"
import OTPTextView from 'react-native-otp-textinput';

const screenHeight = Dimensions.get("screen").height
const screenWidth = Dimensions.get("screen").width

class VerifyCode extends React.Component{

    state = {
        otpInput: '',
        inputText: '',
      };

    alertText = () => {
        const {otpInput = ''} = this.state;
        if (otpInput) {
          alert(otpInput);
        }
      };
    
      clear = () => {
        this.input1.clear();
      };
    
      updateOtpText = () => {
        this.input1.setValue(this.state.inputText);
      };


    render(){
        return(
            <View style={styles.Root} >

            <View style={styles.Header} >
                    <IconButton icon="chevron-left"  style={{
                        marginLeft : 0.05*screenWidth,
                    }} size={0.065*screenWidth} onPress={() => {this.props.navigation.goBack()}} />
                    <Text style={styles.Profile} >Verify Code</Text>
                </View>


                <Text style={{
                    marginVertical : 0.03*screenHeight,
                    marginLeft : 0.1*screenWidth,
                    fontFamily : "SemiBold",
                    fontSize : 0.045*screenWidth,
                    color : "#3E4958"
                }} >Enter OTP</Text>


                <View style={{marginBottom : 0.05*screenHeight}} >

                <OTPTextView
                handleTextChange={(e) => {}}
                containerStyle={styles.textInputContainer}
                textInputStyle={styles.roundedTextInput}
                inputCount={4}
                secureTextEntry={true}
                />

                    

                </View>

                <Text style={{
                    marginLeft : 0.1*screenWidth,
                    fontFamily : "Medium",
                    fontSize : 0.04*screenWidth,
                    color : "#3E4958",
                    width : 0.85*screenWidth
                }} >We have sent a One Time Password to your registered mobile number 77******58.</Text>






            <Text style={{
                    marginVertical : 0.03*screenHeight,
                    fontFamily : "Medium",
                    fontSize : 0.045*screenWidth,
                    color : "#3E4958",
                    alignSelf : "center"
                }} >Resend OTP</Text>

                    <TouchableOpacity style={styles.Button} onPress={() => {this.props.navigation.push("VerifyCode")}} >
                            <Text style={styles.Add} >Submit</Text>
                        </TouchableOpacity>

            </View>
        )
    }
}

export default VerifyCode

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
    },
    textInputContainer: {
        marginBottom: 0,
      },
      roundedTextInput: {
        borderRadius: 10,
        borderWidth: 2,
        marginHorizontal : 0.06*screenWidth
      },
})