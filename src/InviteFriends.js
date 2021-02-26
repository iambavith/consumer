import React from "react"
import {View, Text, Dimensions, StyleSheet, Image, TouchableOpacity, ScrollView, Share} from "react-native"
import {IconButton} from "react-native-paper"
import Icon from "react-native-vector-icons/Feather"

const screenHeight = Dimensions.get("screen").height
const screenWidth = Dimensions.get("screen").width

class InviteFriends extends React.Component{
    render(){
        return(
            <View style={styles.Root} >

                <View style={styles.Header} >
                    <IconButton icon="chevron-left"  style={{
                        marginLeft : 0.05*screenWidth,
                    }} size={0.065*screenWidth} onPress={() => {this.props.navigation.goBack()}} />
                    <Text style={styles.Profile} >Invite Friends</Text>
                </View>

                    <ScrollView>

                <Image
                    source={require("../assets/images/illustration.png")}
                    style={{
                        width : screenWidth,
                        height : 0.25*screenHeight,
                        marginVertical : 0.03*screenHeight
                    }}
                />

                    <Text style={styles.Title} >Invite your friends Reward{"\n"}yourself</Text>

                    <View style={styles.Dotted} />

                    <Text style={styles.Des} >You and your friend will recieve 10 Rs Credit</Text>


                    <TouchableOpacity style={styles.CodeContainer} >

                        <View>
                            <Text style={[styles.Des, {color : "#47927B", marginTop : 0.015*screenHeight}]} >Your invite code</Text>
                            <Text style={[styles.Des, {color : "#13DA9C", fontFamily : "SemiBold", fontSize : 0.075*screenWidth}]} >UxiN89</Text>
                        </View>

                        <Icon name="copy" size={0.07*screenWidth} color="#0D4735" style={{
                            position : "absolute",
                            right : 0.1*screenWidth
                        }} />

                    </TouchableOpacity>

                        <TouchableOpacity style={styles.Button} onPress={() => {
                            Share.share({
                                message : "Click here to download"
                            })
                        }} >
                            <Text style={[styles.Title, {fontFamily : "Bold", color : "#fff", fontSize : 0.05*screenWidth}]} >Share</Text>
                        </TouchableOpacity>

                    </ScrollView>

            </View>
        )
    }
}

export default InviteFriends

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
        fontFamily : "Medium",
        fontSize : 0.045*screenWidth,
        color : "#3E4958",
        alignSelf : "center",
        textAlign : "center",
        marginVertical : 0.02*screenHeight
    },
    Des : {
        fontFamily : "Medium",
        fontSize : 0.038*screenWidth,
        marginLeft : 0.05*screenWidth,
        color : "#333333",
        alignSelf : "center"
    },
    Dotted  : {
        borderWidth: 1,
        borderRadius: 1,
        width : 0.3*screenWidth,
        alignSelf : "center",
        marginVertical : 0.03*screenHeight,
        borderColor : "#D5DDE0"
    },
    CodeContainer : {
        width: 0.8*screenWidth,
        height : 0.12*screenHeight,
        backgroundColor : "#EAFFF8",
        marginVertical : 0.05*screenHeight,
        alignSelf : "center",
        borderRadius : 0.03*screenWidth,
        borderWidth : 3,
        borderColor : "#13DA9C",
        borderStyle : "dashed",
        flexDirection : "row",
        alignItems : "center"
    },
    Button : {
        height : 0.07*screenHeight,
        width : 0.9*screenWidth,
        backgroundColor : "#13DA9C",
        alignItems : "center",
        justifyContent : "center",
        borderRadius : 0.03*screenWidth,
        marginVertical : 0.025*screenHeight,
        alignSelf : "center"
    }
})