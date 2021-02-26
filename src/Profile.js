import React from "react"
import {View , Text, Dimensions, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, FlatList} from "react-native"
import {IconButton} from "react-native-paper"

const screenHeight = Dimensions.get("screen").height
const screenWidth = Dimensions.get("screen").width


class Profile extends React.Component{

    state = {
        email : "john@mobility.com",
        name : "",
        dob : "",
        gender : "Select",
        selectGender : false,
        panNumber : '',
        adhaarCardNumber : ''
    }

    render(){
        return(
            <View style={styles.Root} >
                <View style={styles.Header} >
                    <IconButton icon="chevron-left"  style={{
                        backgroundColor : "#fff",
                        elevation : 15,
                        marginLeft : 0.05*screenWidth
                    }} size={0.065*screenWidth} onPress={() => {this.props.navigation.goBack()}} />
                    <Text style={styles.Profile} >Profile</Text>
                </View>

                <ScrollView>
                    <Image source={require("../assets/images/avatar.png")} style={styles.Avatar} />
                    <Text style={styles.Email} >{this.state.email}</Text>

                    <View style={{height : 1.5, width : screenWidth, backgroundColor : "#D5DDE0", marginVertical : 0.02*screenHeight}} />

                    <View style={styles.Container} >
                        <Text style={styles.Title} >Your Name</Text>
                        <TextInput
                            style={styles.TextInput}
                            value={this.state.name}
                            placeholder="Enter your name.."
                            onChangeText={(name) => {this.setState({name : name})}}
                        />
                    </View>

                    <View style={styles.Container} >
                        <Text style={styles.Title} >D.O.B</Text>
                        <TextInput
                            style={styles.TextInput}
                            value={this.state.dob}
                            placeholder="DD-MM-YYYY"
                            onChangeText={(dob) => {this.setState({dob : dob})}}
                            keyboardType="decimal-pad"
                        />
                    </View>

                    <View style={styles.Container} >
                        <Text style={styles.Title} >Gender</Text>
                        <TouchableOpacity
                            style={[styles.TextInput, {alignItems : "center", justifyContent : "flex-start"}]}
                            onPress={() => {
                                this.setState({
                                    selectGender : true
                                })
                            }}
                        >
                            <Text style={styles.Gender} >{this.state.gender}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.Container} >
                        <Text style={styles.Title} >PAN Number</Text>
                        <TextInput
                            style={styles.TextInput}
                            value={this.state.panNumber}
                            placeholder="0340372003446"
                            onChangeText={(panNumber) => {this.setState({panNumber : panNumber})}}
                        />
                    </View>

                    <View style={styles.Container} >
                        <Text style={styles.Title} >Adhaar Card Number</Text>
                        <TextInput
                            style={styles.TextInput}
                            value={this.state.adhaarCardNumber}
                            placeholder="0340372003446"
                            onChangeText={(adhaarCardNumber) => {this.setState({adhaarCardNumber : adhaarCardNumber})}}
                        />
                    </View>

                    <View style={styles.Container} >
                        <TouchableOpacity
                            style={[styles.TextInput, {alignItems : "center", justifyContent : "center", backgroundColor : "#13DA9C", paddingLeft : 0, marginVertical : 0.02*screenHeight}]}
                            onPress={() => {
                                this.setState({
                                    selectGender : true
                                })
                            }}
                        >
                            <Text style={[styles.Gender, {color : "#fff"}]} >Save</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>



                {
                    this.state.selectGender ? 
                    <View style={{
                        backgroundColor : "rgba(0,0,0,0.5)", 
                        position  :"absolute", 
                        zIndex : 100, 
                        height : "100%", 
                        width : "100%",
                        alignItems : "center",
                        justifyContent : "center"
                        }} >
                            <View style={{
                                height : 0.16*screenHeight,
                                width : 0.4*screenWidth,
                                backgroundColor : "#fff",
                                borderRadius : 0.05*screenWidth,
                            }} >
                            <FlatList
                                ItemSeparatorComponent={() => (
                                    <View style={{
                                        height : 1, 
                                        width : "82%", 
                                        backgroundColor : "#D5DDE0",
                                        alignSelf : "center"
                                        }} ></View>
                                )}
                                data={gender}
                                renderItem={({item, index}) => (
                                    <TouchableOpacity key={index} style={{
                                        marginVertical : 0.01*screenHeight, 
                                        justifyContent : "center"
                                        }} onPress={() => {this.setState({gender : item, selectGender : false})}} >
                                        <Text style={styles.Title} >{item}</Text>
                                    </TouchableOpacity>
                                )}
                            />
                            </View>
                        </View>
                    :
                    null
                }
            </View>
        )
    }
}

export default Profile

const gender = ["Male", "Female"]

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
    Avatar : {
        alignSelf : "center",
        marginTop : 0.03*screenHeight,
        height : 0.1*screenHeight,
        width : 0.1*screenHeight
    },
    Email : {
        alignSelf : "center",
        fontFamily : "Regular",
        fontSize : 0.04*screenWidth,
        color : "#383A3C",
        marginTop : 0.02*screenHeight
    },
    Title : {
        fontFamily : "Medium",
        fontSize : 0.04*screenWidth,
        color : "#383A3C",
        marginLeft : 0.03*screenHeight,
        marginVertical : 0.015*screenHeight
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
    Container : {
        marginVertical : 0.01*screenHeight
    },
    Gender : {
        fontFamily : "SemiBold",
        color : "#383A3C",
        fontSize : 0.04*screenWidth,
    }
})