import React from "react"
import {View, Text, Dimensions, StyleSheet, FlatList, TouchableOpacity, CheckBox} from "react-native"
import {IconButton} from "react-native-paper"

const screenHeight = Dimensions.get("screen").height
const screenWidth = Dimensions.get("screen").width

class CancelRide extends React.Component{
    render(){
        return(
            <View style={styles.Root} >
                <View style={styles.Header} >
                    <IconButton icon="chevron-left"  style={{
                        marginLeft : 0.05*screenWidth,
                    }} size={0.065*screenWidth} onPress={() => {this.props.navigation.goBack()}} />
                    <Text style={styles.Profile} >Cancel Ride</Text>
                </View>

                    <Text style={{
                        fontFamily : "Medium",
                        fontSize : 0.045*screenWidth,
                        marginLeft : 0.08*screenWidth,
                        marginTop : 0.02*screenHeight,
                        color : "#3E4958"
                    }} >
                    Please select the reason {"\n"}for cancellation:
                    </Text>

                    <View style={{
                        marginTop : 0.03*screenHeight
                    }} >
                        <FlatList
                            data={Reasons}
                            renderItem={({item}) => (
                                <TouchableOpacity style={{
                                    flexDirection : "row",
                                    alignItems : "center",
                                    marginLeft : 0.05*screenWidth,
                                    marginVertical : 0.02*screenHeight
                                }} >
                                    <CheckBox
                                        value={false}
                                    />
                                    <Text style={styles.Text} >{item}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>

                    <TouchableOpacity style={[styles.Button, {position : "absolute", bottom : 0.015*screenHeight}]} >
                    <Text style={[styles.Profile, {marginLeft : 0, color : "#fff"}]} >Submit</Text>
                    </TouchableOpacity>

            </View>
        )
    }
}

export default CancelRide

const Reasons = [
    "Driver denied to go to destination",
    "Unable to contact driver",
    "Driver is late",
    "Expected a shorter wait time",
    "My reason is not listed"
]

const styles = StyleSheet.create({
    Root : {
        flex : 1,
        backgroundColor : "#fff"
    },
    Header : {
        flexDirection : "row",
        marginTop : 0.05*screenHeight,
        alignItems : "center"
    },
    Profile : {
        fontFamily : "Bold",
        marginLeft : 0.05*screenWidth,
        fontSize : 0.045*screenWidth,
        color : "#3E4958"
    },
    Text : {
        fontFamily  : "Regular",
        color : "#3E4958",
        fontSize : 0.04*screenWidth,
        marginLeft : 0.05*screenWidth
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
        alignSelf : "center"
    },
})