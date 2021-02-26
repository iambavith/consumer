import React from "react"
import {View, Text, Dimensions, StyleSheet} from "react-native"
import {IconButton} from "react-native-paper"

const screenHeight = Dimensions.get("screen").height
const screenWidth = Dimensions.get("screen").width

class Legal extends React.Component{
    render() {
        return (
             <View style={styles.Root} >
             
             <View style={styles.Header} >
                    <IconButton icon="chevron-left"  style={{
                        marginLeft : 0.05*screenWidth,
                        backgroundColor : "#fff"
                    }} size={0.065*screenWidth} onPress={() => {this.props.navigation.goBack()}} />
                    <Text style={styles.Profile} >Legal</Text>
                </View>

                <Text style={styles.Title} >Team and Conditions</Text>

                <Text style={styles.Des} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar sagittis, a blandit mattis a dignissim diam augue id. Ornare consectetur sed amet sit ac et ac est. Mollis nec pretium, at mollis. Nibh sit eget ornare sit molestie in phasellus enim donec. um eu sed urna, sit sodales sed. Mattis ac aliquam, eget tempor viverra</Text>

                <Text style={styles.Title} >Privacy Policy</Text>


                <Text style={styles.Des}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar sagittis, a blandit mattis a dignissim diam augue id. Ornare consectetur sed amet sit ac et ac est. Mollis nec pretium, at mollis. Nibh sit eget ornare sit molestie in phasellus enim donec. um eu sed urna, sit sodales sed. Mattis ac aliquam, eget tempor viverra</Text>

             </View>
        );
    }
}

export default Legal

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
        fontFamily : "Bold",
        marginLeft : 0.08*screenWidth,
        fontSize : 0.045*screenWidth,
        color : "#3E4958",
        marginVertical : 0.02*screenHeight,
    },
    Des : {
        fontFamily : "Medium",
        marginLeft : 0.08*screenWidth,
        fontSize : 0.04*screenWidth,
        color : "#3E4958",
        marginVertical : 0.02*screenHeight,
        width : 0.85*screenWidth
    }
})