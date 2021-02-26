import React from "react"
import {View, Text, Dimensions, StyleSheet, Image, FlatList, TextInput} from "react-native"
import {IconButton} from "react-native-paper"

const screenHeight = Dimensions.get("screen").height
const screenWidth = Dimensions.get("screen").width

class Chat extends React.Component{

    state = {
        message : {
            "id" : 2,
            "message" : "",
            "time" : "2:37 AM"
        },
        Data : data
    }

    componentDidMount() {
        setTimeout(() => {
          this.FlatListRef.scrollToEnd();
        }, 100);
      }

    render(){
        return(
            <View style={styles.Root} >

                <View style={styles.Header} >
                    <IconButton icon="chevron-left"  style={{
                        left : 0.05*screenWidth,
                        position : "absolute",
                    }} size={0.065*screenWidth} onPress={() => {this.props.navigation.goBack()}} />
                    <View style={{
                        justifyContent : "center",
                        alignItems : "center"
                    }} >
                    <Text style={styles.Profile} >John Doe</Text>
                    <Text style={styles.Des} >Volkswagen Jetta, HS785K</Text>
                    </View>

                    <Image
                        source={require("../assets/images/avatar.png")}
                        style={{
                            position : "absolute",
                            right : 0.05*screenWidth,
                            height : 0.045*screenHeight,
                            width : 0.045*screenHeight
                        }}
                    />

                </View>

                <View style={{
                    height : 0.8*screenHeight,
                }} >

                <FlatList
                ref={(ref) => (this.FlatListRef = ref)}
                    data={this.state.Data}
                    renderItem={({item}) => (
                        item.id === 1 ?
                        <View style={styles.Own} >
                            <Text style={styles.Message} >{item.message}</Text>
                            <Text style={styles.Time} >{item.time}</Text>
                        </View>
                        :
                        <View style={styles.User} >
                            <View style={styles.UserContainer} >
                            <Text style={[styles.Message, {color : "#fff"}]} >{item.message}</Text>
                            </View>
                            <Text style={[styles.Time, {alignSelf : "flex-end", top : 0.1*screenHeight}]} >{item.time}</Text>
                        </View>
                    )}
                />

            </View>

                        <View style={{flexDirection : "row", position : "absolute", bottom : 0.0*screenHeight, alignItems : "center", backgroundColor : "#fff", height : 0.1*screenHeight, width : screenWidth}} >

                            <IconButton
                                icon="image-outline"
                                size={0.08*screenWidth}
                                color="#D5DDE0"
                            />

                            <TextInput
                                placeholder={null}
                                style={styles.TextInput}
                                value={this.state.message.message}
                                onChangeText={(message) => {
                                    this.setState({
                                        message : {
                                            id : this.state.message.id,
                                            message : message,
                                            time : this.state.message.time
                                        }
                                    })
                                }}
                                onEndEditing={() => {
                                    data.push(this.state.message)
                                    this.setState({
                                        Data : data,
                                        
                                    })
                                    setTimeout(() => {
                                    this.FlatListRef.scrollToEnd();
                                    }, 100);
                                }}
                            />

                        </View>

            </View>
        )
    }
}

export default Chat

const data = [
    {
        "id" : 1,
        "message" : "Hey, I’m on your way",
        "time" : "2:36 AM"
    },
    {
        "id" : 2,
        "message" : "Ok, waiting for you near supermarket",
        "time" : "2:37 AM"
    },
    {
        "id" : 1,
        "message" : "Hold on, i will be in 5 minutes",
        "time" : "2:38 AM"
    },
    {
        "id" : 2,
        "message" : "Ok, waiting for you near supermarket",
        "time" : "2:37 AM"
    },
    {
        "id" : 1,
        "message" : "Hold on, i will be in 5 minutes",
        "time" : "2:38 AM"
    },
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
        justifyContent : "center"
    },
    Profile : {
        fontFamily : "SemiBold",
        marginLeft : 0.05*screenWidth,
        fontSize : 0.045*screenWidth,
        color : "#3E4958",
    },
    Des : {
        fontFamily : "Medium",
        marginLeft : 0.05*screenWidth,
        fontSize : 0.035*screenWidth,
        color : "#3E4958",
    },
    Own : {
        margin: 0.02*screenHeight,
    },
    Message : {
        fontFamily : "Regular",
        fontSize : 0.045*screenWidth,
        width : 0.7*screenWidth,
        color : "#3E4958",
        marginLeft : 0.04*screenWidth
    },
    Time : {
        fontFamily : "Regular",
        color : "#97ADB6"
    },
    User : {
        width : screenWidth,
        marginBottom : 0.1*screenHeight,
        padding : 0.05*screenWidth
    },
    UserContainer : {
        position : "absolute",
        right:  0.05*screenWidth,
        backgroundColor : "#13DA9C",
        padding : 0.05*screenWidth,
        borderRadius : screenWidth,
        borderTopRightRadius : 0,
        width : 0.8*screenWidth
    },
    TextInput : {
        height : 0.06*screenHeight,
        width: 0.8*screenWidth,
        borderWidth : 2,
        borderRadius : screenHeight,
        borderColor : "#D5DDE0",
        paddingLeft : 0.05*screenWidth,
        paddingRight : 0.05*screenWidth,
        fontFamily : "Regular"
    }
})