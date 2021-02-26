import React from "react"
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView} from "react-native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const screenHeight = Dimensions.get("screen").height
const screenWidth = Dimensions.get("screen").width

class DrawerContents extends React.Component{
    render(){
        return(
            <View style={{height : "100%", width : "100%",backgroundColor : "#fff"}} >

                <ScrollView>
                <TouchableOpacity style={styles.ProfileContainer} activeOpacity={1} onPress={() => {this.props.navigation.push("Profile")}} >
                    <Image
                        source={require("./assets/images/avatar.png")}
                        style={styles.Avatar}
                    />
                    <TouchableOpacity style={styles.EditButton} >
                        <Icon name="pencil-outline" size={0.035*screenWidth} color="#3E4958" />
                    </TouchableOpacity>

                    <View style={styles.NameContainer} >
                    <Text style={styles.Username} >John Doe</Text>
                    <Text style={styles.Email} >john@mobility.com</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.Seperator} ></View>

                <View>

                    <TouchableOpacity style={styles.Item} >
                        <Icon name="notebook-outline" size={0.06*screenWidth} color="#13DA9C" />
                        <Text style={styles.ItemName} >BOOK</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Item} onPress={() => {this.props.navigation.push("RideHistory")}} >
                        <Icon name="history" size={0.06*screenWidth} color="#13DA9C" />
                        <Text style={styles.ItemName} >RIDES HISTORY</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Item} onPress={() => {this.props.navigation.push("Payments")}} >
                        <Icon name="credit-card-outline" size={0.06*screenWidth} color="#13DA9C" />
                        <Text style={styles.ItemName} >PAYMENTS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Item}  onPress={() => {this.props.navigation.push("Pass")}} >
                        <Icon name="badge-account-horizontal-outline" size={0.06*screenWidth} color="#13DA9C" />
                        <Text style={styles.ItemName} >PASS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Item} onPress={() => {this.props.navigation.push("Notifications")}} >
                        <Icon name="bell-outline" size={0.06*screenWidth} color="#13DA9C" />
                        <Text style={styles.ItemName} >NOTIFICATIONS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Item} onPress={() => {this.props.navigation.push("Insaurance")}} >
                        <Icon name="file-certificate-outline" size={0.06*screenWidth} color="#13DA9C" />
                        <Text style={styles.ItemName} >INSURANCE</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.Item} onPress={() => {this.props.navigation.push("EmergencyContacts")}} >
                        <Image source={require("./assets/images/Icons/SOS.png")} style={{height : 0.01*screenHeight, width : 0.06*screenWidth}} />
                        <Text style={styles.ItemName} >EMERGENCY CONTACTS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Item} onPress={() => {this.props.navigation.push("InviteFriends")}} >
                        <Icon name="account-plus-outline" size={0.06*screenWidth} color="#13DA9C" />
                        <Text style={styles.ItemName} >INVITE FRIENDS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Item} onPress={() => {this.props.navigation.push("Help")}} >
                        <Icon name="face-agent" size={0.06*screenWidth} color="#13DA9C" />
                        <Text style={styles.ItemName} >HELP & SUPPORT</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.Item, {alignSelf : "center", width : "100%", justifyContent : "center", marginLeft : 0}]} >
                        <Text style={[styles.ItemName,{color : "#13DA9C", marginLeft : 0, textDecorationLine : "underline" }]} >SIGN OUT</Text>
                    </TouchableOpacity>
                </View>

                </ScrollView>
            </View>
        )
    }
}

export default DrawerContents

const styles = StyleSheet.create({
    ProfileContainer : {
        flexDirection : "row",
        marginTop : 0.04*screenHeight,
        width : "100%",
        height : 0.1*screenHeight,
        alignItems : "center"
    },
    Avatar : {
        height : 0.08*screenHeight,
        width : 0.08*screenHeight,
        marginLeft : 0.05*screenWidth
    },
    EditButton : {
        height : 0.035*screenHeight,
        width : 0.035*screenHeight,
        backgroundColor : "#fff",
        position : "absolute",
        left : 0.17*screenWidth,
        bottom : 0.014*screenHeight,
        borderRadius : screenHeight,
        elevation : 5,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        alignItems : "center",
        justifyContent : "center"
    },
    Username : {
        fontFamily : "Bold",
        fontSize : 0.05*screenWidth,
        color : "#383A3C",
        width : 0.4*screenWidth,
    },
    NameContainer : {
        marginLeft : 0.08*screenWidth
    },
    Email : {
        fontFamily : "Regular",
        fontSize : 0.035*screenWidth,
        color : "#383A3C",
        width : 0.4*screenWidth,
    },
    Seperator : {
        width : "80%",
        height : 1,
        backgroundColor : "#D5DDE0",
        alignSelf : "center",
        marginVertical : 0.02*screenHeight
    },
    Item : {
        flexDirection : "row",
        alignItems : "center",
        height : 0.06*screenHeight,
        width : "90%",
        marginLeft : 0.05*screenWidth,
        marginVertical : 0.01*screenHeight
    },
    ItemName : {
        fontFamily : "Bold",
        marginLeft : 0.05*screenWidth,
        fontSize : 0.045*screenWidth,
        color : "#3E4958"
    }
})