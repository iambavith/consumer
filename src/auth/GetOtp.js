import React from "react"
import {View, Text, Dimensions, TouchableOpacity, StyleSheet, TextInput} from "react-native"
import {IconButton} from "react-native-paper"
import OTPTextView from 'react-native-otp-textinput';

const screenHeight = Dimensions.get("screen").height
const screenWidth = Dimensions.get("screen").width

class GetOtp extends React.Component{

    state = {
        otpInput: '',
        inputText: '',
        text : "00:30",
        isInValid : false,
        enterInviteCode : false,
        inviteCode : ""
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

                <Text style={{
                    marginLeft : 0.1*screenWidth,
                    fontFamily : "Medium",
                    fontSize : 0.04*screenWidth,
                    color : "#3E4958",
                    width : 0.85*screenWidth,
                    marginBottom : 0.06*screenHeight
                }} >We have sent a One Time Password to your registered mobile number 77******58.</Text>



                <View style={{marginBottom : 0.05*screenHeight}} >

                <OTPTextView
                handleTextChange={(e) => {}}
                containerStyle={styles.textInputContainer}
                textInputStyle={styles.roundedTextInput}
                inputCount={4}
                secureTextEntry={true}
                />
                
                {
                    this.state.isInValid ?
                    <Text style={{
                    right : 0.06*screenWidth,
                    fontFamily : "Medium",
                    fontSize : 0.04*screenWidth,
                    color : "#3B3C78",
                    position : "absolute",
                    bottom : -0.04*screenHeight
                }} >
                  Resend OTP
                </Text>
                :
                <Text style={{
                    right : 0.06*screenWidth,
                    fontFamily : "Medium",
                    fontSize : 0.04*screenWidth,
                    color : "#FC5555",
                    position : "absolute",
                    bottom : -0.04*screenHeight
                }} >
                    {this.state.text}
                </Text>
                }

                {
                    this.state.isInValid ? 
                    <Text style={{
                    left : 0.06*screenWidth,
                    fontFamily : "Medium",
                    fontSize : 0.04*screenWidth,
                    color : "#FC5555",
                    position : "absolute",
                    bottom : -0.04*screenHeight
                }} >
                   Invalid OTP
                </Text>
                :
                null
                }
                    

                </View>

                    <TouchableOpacity style={styles.Button} onPress={() => {this.setState({
                        isInValid : true
                    })}} >
                            <Text style={styles.Add}  >Submit</Text>
                        </TouchableOpacity>

                    <Text style={{
                    fontFamily : "Medium",
                    fontSize : 0.04*screenWidth,
                    color : "#3B3C78",
                    alignSelf : "center"
                }} onPress={() => {
                    this.setState({
                        enterInviteCode : true
                    })
                }} >
                  Do you Have Invite Code?
                </Text>


                {
                    this.state.enterInviteCode ? 
                    <View style={{
                        height : "100%",
                        width : "100%",
                        backgroundColor : "rgba(0,0,0,0.5)",
                        position : "absolute",
                        zIndex : 100
                    }} >

                        <View style={styles.Container} >
                        <Text style={[styles.Des, {marginTop : 0.058*screenHeight, fontSize : 0.045*screenWidth}]} >Enter Invite Code</Text>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Enter invite Code"
                    value={this.state.inviteCode}
                    onChangeText={(inviteCode) => {
                        this.setState({
                            inviteCode : inviteCode
                        })
                    }}
                />

                <Text style={[styles.Des, {marginTop : 0.058*screenHeight, fontSize : 0.045*screenWidth, color:"#0FBB85"}]} >You and Your friend will get Rs.10</Text>

                
                    <TouchableOpacity style={styles.Button} onPress={() => {this.props.navigation.push("Register")}} >
                    <Text style={styles.Text} >Done</Text>
                    </TouchableOpacity>

                        </View>


                    </View>
                    :
                    null
                }

            </View>
        )
    }
}

export default GetOtp

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
      Container : { 
          position: "absolute",
          bottom : 0,
          width : screenWidth,
          backgroundColor : "#fff",
          borderTopLeftRadius : 0.08*screenWidth,
          borderTopRightRadius : 0.08*screenWidth
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
    Des : {
        fontFamily : "Medium",
        fontSize : 0.035*screenWidth,
        color : "#3E4958",
        marginLeft : 0.08*screenWidth
    },
    Text : {
        fontFamily : "Bold",
        fontSize : 0.045*screenWidth,
        color : "#fff"
    }
})