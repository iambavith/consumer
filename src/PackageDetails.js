import React from "react"
import {View, Text, Dimensions, StyleSheet, ScrollView, Image, TextInput, Switch, TouchableOpacity} from "react-native"
import { IconButton } from "react-native-paper";

const screenHeight = Dimensions.get("screen").height
const screenWidth = Dimensions.get("screen").width

class PackageDetails extends React.Component{

    state = {
        swith : false
    }

    render(){
        return(
            <View style={styles.Root} >
                <View style={styles.Header} >
                    <IconButton icon="chevron-left"  style={{
                        marginLeft : 0.05*screenWidth,
                    }} size={0.065*screenWidth} onPress={() => {this.props.navigation.goBack()}} />
                    <Text style={styles.Profile} >package details</Text>
                </View>

                    <ScrollView>

                        <View style={{
                            flexDirection : "row",
                            alignItems : "center",
                            marginVertical : 0.02*screenHeight,
                            marginLeft : 0.05*screenWidth
                        }} >
                            <Image
                                source={require("../assets/images/avatar.png")}
                            />

                            <View>
                                <Text style={styles.ItemName} >Patrick</Text>
                                <Text style={styles.Item} >Sender</Text>
                            </View>

                        </View>

                        <View style={styles.Box} >

                            <Text style={styles.Text} >Pick Point</Text>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="24, Ocean Avenue"
                            />

                            <Text style={[styles.Text, {marginTop : 0.02*screenHeight}]} >Pick Point</Text>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Enter Number"
                            />

                        </View>

                        <Text style={[styles.ItemName, {marginTop : 0.025*screenHeight}]} >Receiver Detail</Text>

                        <View style={styles.Box} >

                            <Text style={styles.Text} >Drop Point</Text>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Enter Drop Point"
                            />

                            <Text style={[styles.Text, {marginTop : 0.02*screenHeight}]} >Receiver Name</Text>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Enter Name"
                            />

                            
                            <Text style={[styles.Text, {marginTop : 0.02*screenHeight}]} >Phone Number</Text>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Enter Number"
                            />

                            
                            <Text style={[styles.Text, {marginTop : 0.02*screenHeight}]} >Pin Code</Text>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Enter Pin Code"
                            />

                        </View>




                        <Text style={[styles.ItemName, {marginTop : 0.025*screenHeight}]} >Package Size</Text>

                        <View style={styles.Box} >

                            <Text style={styles.Text} >Width (in cm)</Text>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Enter Package Width"
                            />

                            <Text style={[styles.Text, {marginTop : 0.02*screenHeight}]} >Weight (in cm)</Text>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Enter Package Weight"
                            />

                            
                            <Text style={[styles.Text, {marginTop : 0.02*screenHeight}]} >Height (in cm)</Text>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Enter Package Height"
                            />

                            
                            <Text style={[styles.Text, {marginTop : 0.02*screenHeight}]} >Length (in cm)</Text>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Enter Package Length"
                            />

                        </View>


                        <View style={{
                            flexDirection : "row",
                            alignItems : "center"
                        }} >
                            <View>
                            <Text style={[styles.ItemName, {marginTop : 0.025*screenHeight}]} >Package Size</Text>
                            <Text style={[styles.Text, {marginLeft : 0.05*screenWidth}]} >For receiver messages</Text>
                            </View>

                            <Switch
                                value={this.state.swith}
                                style={{
                                    position : "absolute",
                                    right : 0.05*screenWidth
                                }}
                            />
                        </View>


                        <TouchableOpacity style={styles.Button} onPress={() => {this.props.navigation.push("GoLocal")}} >
                        <Text style={[styles.ItemName, {marginTop : 0, marginLeft : 0, color : "#fff"}]} >Next</Text>
                        </TouchableOpacity>

                    </ScrollView>

            </View>
        )
    }
}

export default PackageDetails

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
    Item : {
        fontFamily : "Regular",
        fontSize : 0.045*screenWidth,
        color : "#3E4958",
        marginLeft : 0.05*screenWidth,
    },
    ItemName : {
        fontFamily : "Bold",
        marginLeft : 0.05*screenWidth,
        fontSize : 0.045*screenWidth,
        color : "#3E4958"
    },
    Text : {
        fontFamily : "Medium",
        marginLeft : 0.028*screenWidth,
        fontSize : 0.045*screenWidth,
        color : "#3E4958",
        marginTop : 0.015*screenWidth
    },
    TextInput: {
        width : 0.75*screenWidth,
        borderBottomWidth : 2,
        borderColor : "#D5DDE0",
        marginTop : 0.012*screenHeight,
        alignSelf : "center",
    },
    Box : {
        borderWidth : 2,
        padding : 0.02*screenHeight,
        width : 0.9*screenWidth,
        marginVertical : 0.01*screenHeight,
        alignSelf : "center",
        borderRadius : 0.045*screenWidth,
        borderColor : "#D5DDE0",
        paddingBottom : 0.025*screenHeight
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