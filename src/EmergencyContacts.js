import React from "react"
import {View, Text, Dimensions, StyleSheet, FlatList, TouchableOpacity, Image} from "react-native"
import {IconButton} from "react-native-paper"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const screenHeight = Dimensions.get("screen").height
const screenWidth = Dimensions.get("screen").width

class EmergencyContacts extends React.Component{
    render(){
        return(
            <View style={styles.Root} >

                <View style={styles.Header} >
                    <IconButton icon="chevron-left"  style={{
                        marginLeft : 0.05*screenWidth,
                    }} size={0.065*screenWidth} onPress={() => {this.props.navigation.goBack()}} />
                    <Text style={styles.Profile} >Emergency Contacts</Text>
                </View>

                <TouchableOpacity style={{flexDirection : "row", alignItems : "center", marginVertical : 0.02*screenHeight, marginLeft : 0.05*screenWidth}} 
                    onPress={() => {this.props.navigation.push("AddNewContact")}}
                 >
                    <View style={{
                        height : 0.07*screenHeight,
                        width : 0.07*screenHeight,
                        backgroundColor : "#13DA9C",
                        borderRadius : screenHeight,
                        alignItems : "center",
                        justifyContent : "center"
                    }} >
                        <IconButton icon="plus" color="#fff" />
                    </View>

                    <View>
                        <Text style={styles.Title} >Add New</Text>
                        <Text style={styles.Des} >Max 5 contacts</Text>
                    </View>

                </TouchableOpacity>

                <FlatList
                    style={{
                        marginVertical : 0.02*screenHeight
                    }}
                    data={data}
                    renderItem={({item}) => (
                        <TouchableOpacity>
                             <View style={{flexDirection : "row", alignItems : "center", marginVertical : 0.02*screenHeight, marginLeft : 0.05*screenWidth}} >
                    <Image style={{
                        height : 0.07*screenHeight,
                        width : 0.07*screenHeight,
                        backgroundColor : "#13DA9C",
                        borderRadius : screenHeight,
                        alignItems : "center",
                        justifyContent : "center"
                    }}
                        source={item.image}
                    />

                    <View>
                        <Text style={styles.Title} >{item.name}</Text>
                        <Text style={styles.Des} >{item.number}</Text>
                    </View>
                    <TouchableOpacity style={styles.EditButton} >
                        <Icon name="pencil-outline" size={0.035*screenWidth} color="#3E4958" />
                    </TouchableOpacity>
                    </View>
                        </TouchableOpacity>
                    )}
                />

            </View>
        )
    }
}

export default EmergencyContacts

const data = [
    {
        "name" : "Surjeet Singh",
        "number" : "+91 99657893",
        "image" : require("../assets/images/avatar.png")
    },
    {
        "name" : "Tarkeshwar Kumanr",
        "number" : "+91 99657893",
        "image" : require("../assets/images/avatar.png")
    },
    {
        "name" : "Amar Kumar",
        "number" : "+91 99657893",
        "image" : require("../assets/images/avatar.png")
    },
    {
        "name" : "Tarkeshwar Kumanr",
        "number" : "+91 99657893",
        "image" : require("../assets/images/avatar.png")
    },
    {
        "name" : "Amar Kumar",
        "number" : "+91 99657893",
        "image" : require("../assets/images/avatar.png")
    }
]

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
        marginLeft : 0.05*screenWidth,
        color : "#3E4958"
    },
    Des : {
        fontFamily : "Regular",
        fontSize : 0.035*screenWidth,
        marginLeft : 0.05*screenWidth,
        color : "#333333"
    },
    EditButton : {
        height : 0.035*screenHeight,
        width : 0.035*screenHeight,
        backgroundColor : "#fff",
        position : "absolute",
        bottom : 0.014*screenHeight,
        borderRadius : screenHeight,
        alignItems : "center",
        justifyContent : "center",
        right : 0.1*screenWidth
    }
})