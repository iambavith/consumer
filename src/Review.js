import React from "react"
import {View, Text, Dimensions, StyleSheet, Image, FlatList, TouchableOpacity, CheckBox, TextInput} from "react-native"
import {IconButton} from "react-native-paper"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const screenHeight = Dimensions.get("screen").height
const screenWidth = Dimensions.get("screen").width

class Review extends React.Component{
    
        state = {
            feedBack : ''
        }

    render(){
        return(
            <View style={styles.Root} >

                    <Image
                        source={require("../assets/images/avatar.png")}
                        style={{
                            alignSelf : "center",
                            marginTop : 0.05*screenHeight,
                            height : 0.1*screenHeight,
                            width : 0.1*screenHeight
                        }}
                    />

                    <Text style={{
                        fontFamily : "Medium",
                        color : "#fff",
                        fontSize : 0.06*screenWidth,
                        alignSelf : "center",
                        marginTop : 0.04*screenHeight
                    }} >Sunil Singh</Text>

                    <Text style={{
                        fontFamily : "Regular",
                        color : "#fff",
                        fontSize : 0.035*screenWidth,
                        alignSelf : "center",
                    }} >Rate your Ride</Text>

                    <View style={{
                        flexDirection : "row",
                        alignSelf : "center",
                        marginTop : 0.02*screenHeight
                    }} >
                        <Icon name="star" size={0.065*screenWidth} color="#FFB800" style={{
                            margin : 0.03*screenWidth
                        }} />
                        <Icon name="star" size={0.065*screenWidth} color="#FFB800" style={{
                            margin : 0.03*screenWidth
                        }} />
                        <Icon name="star" size={0.065*screenWidth} color="#FFB800" style={{
                            margin : 0.03*screenWidth
                        }} />
                        <Icon name="star" size={0.065*screenWidth} color="#FFB800" style={{
                            margin : 0.03*screenWidth
                        }} />
                        <Icon name="star" size={0.065*screenWidth} color="#ffffff" style={{
                            margin : 0.03*screenWidth
                        }} />
                    </View>

                <View style={styles.Container} >

                    <View style={{
                        marginTop : 0.035*screenHeight
                    }} >
                        <FlatList
                            data={data}
                            renderItem={({item}) => (
                                <TouchableOpacity style={{
                                    marginLeft : 0.05*screenWidth,
                                    marginVertical : 0.02*screenHeight,
                                    flexDirection : "row",
                                    alignItems : "center"
                                }} >
                                    <CheckBox
                                        value={false}
                                    />
                                    <Text style={{
                                        fontFamily : "Medium",
                                        fontSize : 0.04*screenWidth,
                                        marginLeft : 0.05*screenWidth
                                    }} >{item}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>

                    <View style={styles.InputBox} >
                            <TextInput
                                value={this.state.feedBack}
                                placeholder="Enter your feedback"
                                style={{
                                    fontFamily : "Medium",
                                    marginTop : 0.01*screenHeight,
                                    marginLeft : 0.05*screenWidth
                                }}
                            />
                    </View>

                    <TouchableOpacity style={styles.Button} >
                        <Text style={{
                            fontFamily : "Bold",
                            fontSize : 0.045*screenWidth,
                            color : "#fff"
                        }} >Submit</Text>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}

export default Review

const data = [
    "Good Behavior",
    "Polite and professional driver",
    "On-time pickup",
    "Driver familar with the rotue"
]

const styles = StyleSheet.create({
    Root : {
        flex : 1,
        backgroundColor : "#13DA9C"
    },
    Container : {
        height : 0.6*screenHeight,
        width : screenWidth,
        backgroundColor : "#fff",
        position : "absolute",
        bottom : 0,
        borderTopLeftRadius : 0.05*screenWidth,
        borderTopRightRadius : 0.05*screenWidth
    },
    InputBox : {
        height : 0.1*screenHeight,
        width: 0.84*screenWidth,
        backgroundColor : "#fff",
        alignSelf : "center",
        marginVertical : 0.02*screenHeight,
        borderWidth : 1,
        borderColor : "#B7B7B7",
        borderRadius : 0.04*screenWidth
    },
    Button : {
        height : 0.07*screenHeight,
        width : 0.9*screenWidth,
        backgroundColor : "#13DA9C",
        alignItems : "center",
        justifyContent : "center",
        marginHorizontal : 0.05*screenWidth,
        borderRadius : 0.03*screenWidth,
        marginVertical : 0.015*screenHeight,
        alignSelf : "center",
        position : "absolute",
        bottom : 0.03*screenWidth
    }
})