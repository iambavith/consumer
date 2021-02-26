import React from "react"
import {View, Text, Dimensions, StyleSheet, TouchableOpacity, Image, Switch} from "react-native"
import {IconButton} from "react-native-paper"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const screenHeight = Dimensions.get("screen").height
const screenWidth = Dimensions.get("screen").width

class AddNewContact extends React.Component{

    state = {
        switch : true,
        deleteContact : false
    }

    render(){
        return(
            <View style={styles.Root} >

            
                <View style={styles.Header} >
                    <IconButton icon="chevron-left"  style={{
                        marginLeft : 0.05*screenWidth,
                    }} size={0.065*screenWidth} onPress={() => {this.props.navigation.goBack()}} />
                </View>

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
                        source={require("../assets/images/avatar.png")}
                    />

                    <View>
                        <Text style={styles.Title} >Tarkeshwar Kumar</Text>
                        <Text style={styles.Des} >+91 99657893</Text>
                    </View>
                    </View>
                        </TouchableOpacity>


                        <TouchableOpacity 
                        style={{flexDirection : "row", 
                        marginVertical : 0.02*screenHeight, 
                        marginLeft : 0.05*screenWidth, 
                        alignItems : "center"}}
                        onPress={() => {
                            this.setState({
                                switch : !this.state.switch
                            })
                        }}
                        activeOpacity={1}
                         >
                            <View>
                                <Text style={styles.Title} >Not Sharing details </Text>
                                <Text style={styles.Des} >Share ride tracking link driver details</Text>
                            </View>

                            <Switch
                                value={this.state.switch}
                                style={{
                                    position : "absolute",
                                    right : 0.08*screenWidth
                                }}
                                trackColor={{true : "#13DA9C", false : "#CCCCCC"}}
                                thumbColor={this.state.switch ? "#fff" : "#fff"}
                                onValueChange={() => {this.setState({
                                    switch : !this.state.switch
                                })}}
                            />

                        </TouchableOpacity>


                        <View style={styles.Dotted} />

                        <TouchableOpacity style={{
                            flexDirection : "row",
                            marginVertical : 0.03*screenHeight,
                            marginLeft : 0.05*screenWidth,
                            alignItems : "center"
                        }} onPress={() => {this.setState({deleteContact : true})}} >
                            <Text style={styles.Title} >Delete Contact</Text>
                            <IconButton icon="chevron-right"  style={{
                        right : 0.05*screenWidth,
                        position : "absolute"
                            }} size={0.065*screenWidth} 
                            color="#97ADB6"
                            onPress={() => {this.setState({deleteContact : true})}} />
                        </TouchableOpacity>


                        {
                            this.state.deleteContact ? 
                            <View style={{
                                height : "100%",
                                width : "100%",
                                backgroundColor : "rgba(0,0,0,0.5)",
                                position : "absolute",
                                zIndex : 1
                            }} >

                            <View style={styles.Container} >

                                <Text style={[styles.Title, {marginTop : 0.05*screenHeight, fontFamily : "SemiBold", marginLeft : 0.05*screenHeight}]} >Delete Contact</Text>
                                <Text style={[styles.Title, {marginLeft : 0.05*screenHeight, fontSize : 0.035*screenWidth}]} >Are you Sure ?</Text>

                                <View style={{flexDirection : "row", alignItems : "center", justifyContent : "center", marginVertical : 0.03*screenHeight}} >
                                <TouchableOpacity style={[styles.Button, {backgroundColor : "#F3F5F6"}]} 
                            
                                onPress={() => {this.setState({deleteContact : false})}} 
                                
                                >
                                <Text style={[styles.Title, {marginTop : 0, fontFamily : "SemiBold", marginLeft : 0}]} >No</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.Button}
                                onPress={() => {this.setState({deleteContact : false})}}
                                 >
                                <Text style={[styles.Title, {marginTop : 0, fontFamily : "SemiBold", marginLeft : 0, color : "#fff"}]} >Yes</Text>
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

export default AddNewContact;

const styles = StyleSheet.create({
    Root : {
        flex : 1,
        backgroundColor : "#fff"
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
    },
    Header : {
        flexDirection : "row",
        marginTop : 0.05*screenHeight,
        alignItems : "center",
    },
    Dotted  : {
        borderWidth: 1,
        borderRadius: 1,
        width : 0.8*screenWidth,
        alignSelf : "center",
        marginTop : 0.02*screenHeight,
        borderColor : "#D5DDE0"
    },
    Container : {
        width: screenWidth,
        backgroundColor : "#fff",
        position : "absolute",
        bottom : 0,
        borderTopLeftRadius : 0.1*screenWidth,
        borderTopRightRadius : 0.1*screenWidth
    },
    Button : {
        height : 0.075*screenHeight,
        width : 0.35*screenWidth,
        backgroundColor : "#13DA9C",
        alignItems : "center",
        justifyContent : "center",
        borderRadius : 0.03*screenWidth,
        marginVertical : 0.025*screenHeight,
        alignSelf : "center",
        marginHorizontal : 0.05*screenWidth
    }
})