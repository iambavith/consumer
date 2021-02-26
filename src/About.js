import React from "react"
import {View, Text, Dimensions, StyleSheet, Image} from "react-native"
import {IconButton} from "react-native-paper"

const screenHeight = Dimensions.get("screen").height
const screenWidth = Dimensions.get("screen").width

class About extends React.Component{
    render(){
        return(
            <View style={styles.Root} >
             <View style={styles.Header} >
                    <IconButton icon="chevron-left"  style={{
                        marginLeft : 0.05*screenWidth,
                        backgroundColor : "#fff"
                    }} size={0.065*screenWidth} onPress={() => {this.props.navigation.goBack()}} />
                    <Text style={styles.Profile} >About</Text>
                </View>

                    <Image
                        source={require("../assets/images/logo.png")}
                        style={{
                            height : 0.06*screenHeight,
                            width : 0.47*screenWidth,
                            alignSelf : "center",
                            marginTop : 0.03*screenHeight
                        }}
                    />

                        <Text style={styles.Des} >Version 1.0</Text>

                        <Text style={styles.Des1} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar sagittis, a blandit mattis a dignissim diam augue id. Ornare consectetur sed amet sit ac et ac est. Mollis nec pretium, at mollis. Nibh sit eget ornare sit molestie in phasellus enim donec. um eu sed urna, sit sodales sed. Mattis ac aliquam, eget tempor viverra {"\n"} {"\n"}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar sagittis, a blandit mattis a dignissim diam augue id. Ornare consectetur sed amet sit ac et ac est. Mollis nec pretium, at mollis. Nibh sit eget ornare sit molestie in phasellus enim donec. um eu sed urna, sit sodales sed. Mattis ac aliquam, eget tempor viverra{"\n"} {"\n"}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar sagittis, a blandit mattis a dignissim diam augue id. Ornare consectetur sed amet sit ac et ac est. Mollis nec pretium, at mollis. Nibh sit eget ornare sit molestie in phasellus enim donec. um eu sed urna, sit sodales sed. Mattis ac aliquam, eget tempor viverra

</Text>

            </View>
        )
    }
}

export default About

const styles = StyleSheet.create({
    Root : {
        flex  :1,
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
    Des : {
        fontFamily : "SemiBold",
        fontSize : 0.04*screenWidth,
        color : "#3E4958",
        marginVertical : 0.02*screenHeight,
        alignSelf : "center"
    },
    Des1 : {
        fontFamily : "Medium",
        fontSize : 0.04*screenWidth,
        color : "#3E4958",
        marginVertical : 0.02*screenHeight,
        alignSelf : "center",
        width: 0.85*screenWidth,
    }
})