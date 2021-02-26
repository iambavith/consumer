import React from "react"
import {View, Text, Dimensions, StyleSheet, TouchableOpacity, Image} from "react-native"
import {IconButton} from "react-native-paper"

const screenHeight = Dimensions.get("screen").height
const screenWidth = Dimensions.get("screen").width

class Help extends React.Component{
    render() {
        return (
             <View style={styles.Root} >
                <View style={styles.Header} >
                    <IconButton icon="chevron-left"  style={{
                        marginLeft : 0.05*screenWidth,
                        backgroundColor : "#fff"
                    }} size={0.065*screenWidth} onPress={() => {this.props.navigation.goBack()}} />
                    <Text style={styles.Profile} >Support</Text>
                </View>

                <Image
                    source={require("../assets/images/illustration-1.png")}
                    style={{
                        height : 0.2*screenHeight,
                        width : 0.2*screenHeight,
                        position : "absolute",
                        top : 0.15*screenHeight
                    }}
                />

                <View style={styles.Container} >

                        <TouchableOpacity style={{
                            flexDirection : "row",
                            marginTop : 0.02*screenHeight,
                            marginLeft : 0.08*screenWidth
                        }} onPress={() => {this.props.navigation.push("FAQ")}} >
                            <Text style={styles.Title} >Frequently asked questions</Text>
                            <IconButton icon="chevron-right"  style={{
                        right : 0.05*screenWidth,
                        position : "absolute"
                    }} size={0.065*screenWidth} color="#97ADB6" onPress={() => {this.props.navigation.push("FAQ")}} />
                        </TouchableOpacity>

                        <View style={styles.Dotted} />



                        <TouchableOpacity style={{
                            flexDirection : "row",
                            marginTop : 0.02*screenHeight,
                            marginLeft : 0.08*screenWidth
                        }} onPress={() => {this.props.navigation.push("Legal")}} >
                            <Text style={styles.Title} >Legal</Text>
                            <IconButton icon="chevron-right"  style={{
                        right : 0.05*screenWidth,
                        position : "absolute"
                    }} size={0.065*screenWidth} color="#97ADB6" onPress={() => {this.props.navigation.push("Legal")}} />
                        </TouchableOpacity>

                        <View style={styles.Dotted} />




                        <TouchableOpacity style={{
                            flexDirection : "row",
                            marginTop : 0.02*screenHeight,
                            marginLeft : 0.08*screenWidth
                        }} onPress={() => {this.props.navigation.push("About")}} >
                            <Text style={styles.Title} >About</Text>
                            <IconButton icon="chevron-right"  style={{
                        right : 0.05*screenWidth,
                        position : "absolute"
                    }} size={0.065*screenWidth} color="#97ADB6" onPress={() => {this.props.navigation.push("About")}} />
                        </TouchableOpacity>

                        <View style={styles.Dotted} />




                        <TouchableOpacity style={{
                            flexDirection : "row",
                            marginTop : 0.02*screenHeight,
                            marginLeft : 0.08*screenWidth
                        }}  onPress={() => {this.props.navigation.push("Chat")}} >
                            <Text style={styles.Title} >Chat with Us</Text>
                            <IconButton icon="chevron-right"  style={{
                        right : 0.05*screenWidth,
                        position : "absolute"
                    }} size={0.065*screenWidth} color="#97ADB6"  onPress={() => {this.props.navigation.push("Chat")}} />
                        </TouchableOpacity>



                        

                    </View>

                    <View style={{
                        height : 0.4*screenHeight,
                        width : screenWidth,
                        backgroundColor : "#fff",
                        position : "absolute",
                        bottom : 0,
                        zIndex : -100
                    }} >

                    </View>

             </View>
        );
    }
}

export default Help

const styles = StyleSheet.create({
    Root : {
        flex : 1,
        backgroundColor : "#13DA9C",
        alignItems : "center",
        justifyContent : "center"
    },
    Header : {
        flexDirection : "row",
        top : 0.05*screenHeight,
        alignItems : "center",
        backgroundColor : "#13DA9C",
        position : "absolute",
        left : 0
    },
    Profile : {
        fontFamily : "SemiBold",
        marginLeft : 0.05*screenWidth,
        fontSize : 0.045*screenWidth,
        color : "#fff"
    },
    Title : {
        fontFamily : "Medium",
        fontSize : 0.045*screenWidth,
        color : "#3E4958",
        alignSelf : "center",
        textAlign : "center",
        marginVertical : 0.02*screenHeight
    },
    Dotted  : {
        borderWidth: 1,
        borderRadius: 1,
        width : 0.8*screenWidth,
        alignSelf : "center",
        borderColor : "#D5DDE0"
    },
    Container : {
        height : 0.41*screenHeight,
        width : 0.9*screenWidth,
        backgroundColor : "#fff",
        elevation : 5,
        borderRadius : 0.05*screenWidth,
        marginTop : 0.2*screenHeight
    }
})