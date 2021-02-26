import React from "react"
import {View, Text, Dimensions, StyleSheet, FlatList, TouchableOpacity, Image} from "react-native"
import {IconButton} from "react-native-paper"

const screenHeight = Dimensions.get("screen").height
const screenWidth = Dimensions.get("screen").width

class Notifications extends React.Component{

    state = {
        showPermission : false
    }

    componentDidMount(){
        this.setState({
            showPermission : true
        })
    }

    render(){
        return(
            <View style={styles.Root} >

            <View style={styles.Header} >
                    <IconButton icon="chevron-left"  style={{
                        marginLeft : 0.05*screenWidth,
                    }} size={0.065*screenWidth} onPress={() => {this.props.navigation.goBack()}} />
                    <Text style={styles.Profile} >Notifications</Text>
                </View>

                    <FlatList
                        data={data}
                        renderItem={({item}) => (
                            <TouchableOpacity style={styles.Container} >
                                <View style={{flexDirection : "row", alignItems : "center"}} >
                                    <Image source={item.image} style={{
                                        height : 0.08*screenHeight,
                                        width : 0.08*screenHeight,
                                        marginHorizontal : 0.035*screenWidth
                                    }} />
                                    <View>
                                        <Text style={styles.Title} >{item.title}</Text>
                                        <Text style={styles.Des} >{item.des}</Text>
                                        <Text style={styles.Des} >{item.time}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />

                    {
                        this.state.showPermission ?
                        <View style={{height : "100%", width : "100%", backgroundColor : "rgba(0,0,0,0.5)", position : "absolute", zIndex : 100}} >
                       
                                <View style={styles.NotiContainer} >

                                    <Image
                                        source={require("../assets/images/noti-3.png")}
                                        style={{
                                            alignSelf : "center",
                                            marginVertical : 0.06*screenHeight,
                                            height : 0.18*screenHeight,
                                            width : 0.18*screenHeight
                                        }}
                                    />

                                    <Text
                                    style={[styles.Title, {textAlign : "center", fontSize : 0.05*screenWidth}]}
                                    >“GoRider” Would like to Send {'\n'}You Notification</Text>

                                    <View
                                        style={{
                                            height : 3,
                                            width : 0.1*screenWidth,
                                            backgroundColor : "#13DA9C",
                                            alignSelf : "center",
                                            marginVertical : 0.03*screenHeight,
                                            borderRadius : screenHeight
                                        }}
                                    />

                                    <Text
                                    style={[styles.Title, {textAlign : "center", color : "#666666"}]}
                                    >Lorem ipsum dolor sit amet, consectetur {"\n"} adipiscing elit. Pharetra cursus at {"\n"} fermentum </Text>
                               
                               <View style={{flexDirection : "row", alignItems : "center", alignSelf : "center"}} >
                                        <TouchableOpacity style={styles.Button} >
                                            <Text style={{fontFamily : "Medium", fontSize : 0.045*screenWidth, color : "#fff" }} >OK</Text>
                                        </TouchableOpacity>
                                        
                                        <TouchableOpacity style={[styles.Button, {backgroundColor : "#FFFFFF", elevation : 10}]} onPress={() => {this.setState({showPermission : false})}} >
                                            <Text style={{fontFamily : "Medium", fontSize : 0.045*screenWidth, color : "#333333" }} >Don’t Allow</Text>
                                        </TouchableOpacity>
                                        
                                        </View>

                                </View>



                        </View>
                        :
                        null
                    }

            </View>
        )
    }
}

export default Notifications

const data = [
    {
        "image" : require("../assets/images/noti-1.png"),
        "title" : "Experience smarter ride ",
        "des" : "20 responses. See your friends preferences",
        "time" : "2h"
    },
    {
        "image" : require("../assets/images/noti-2.png"),
        "title" : "Experience smarter ride ",
        "des" : "20 responses. See your friends preferences",
        "time" : "2h"
    },
    {
        "image" : require("../assets/images/noti-1.png"),
        "title" : "Experience smarter ride ",
        "des" : "20 responses. See your friends preferences",
        "time" : "2h"
    },
    {
        "image" : require("../assets/images/noti-2.png"),
        "title" : "Experience smarter ride ",
        "des" : "20 responses. See your friends preferences",
        "time" : "2h"
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
    Container : {
        height : 0.12*screenHeight,
        width : 0.9*screenWidth,
        elevation : 5,
        backgroundColor : "#fff",
        marginVertical : 0.02*screenHeight,
        alignSelf : "center",
        borderRadius : 0.05*screenWidth,
        justifyContent : "center"
    },
    Title :{
        fontFamily : "Medium",
        fontSize : 0.045*screenWidth,
        color : "#333333"
    },
    Des :{
        fontFamily : "Regular",
        fontSize : 0.032*screenWidth,
        color : "#333333",
        width : 0.6*screenWidth,
    },
    NotiContainer : {
        height : 0.7*screenHeight,
        width: screenWidth,
        backgroundColor : "#fff",
        position : "absolute",
        bottom : 0,
        borderTopLeftRadius : 0.1*screenWidth,
        borderTopRightRadius : 0.1*screenWidth
    },
    Button : {
        height : 0.07*screenHeight,
        width : 0.35*screenWidth,
        backgroundColor : "#13DA9C",
        alignItems : "center",
        justifyContent : "center",
        borderRadius : 0.03*screenWidth,
        marginVertical : 0.025*screenHeight,
        alignSelf : "center",
        marginHorizontal : 0.05*screenWidth
    },
})