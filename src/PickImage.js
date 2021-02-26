import React from "react"
import {View, Text, Dimensions, StyleSheet, TouchableOpacity, Image} from "react-native"
import {IconButton} from "react-native-paper"
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons"
import * as ImagePicker from 'expo-image-picker';

const screenHeight = Dimensions.get("screen").height
const screenWidth = Dimensions.get("screen").width

class PickImage extends React.Component{


    state={
        image1 : null,
        image2 : null
    }

    _pickImage1 = async() => {
        const result = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if(result.status === "granted"){
            const ImageResult = await ImagePicker.launchImageLibraryAsync({
                mediaTypes : ImagePicker.MediaTypeOptions.Images
            })
            if(ImageResult != null){
                this.setState({
                    image1 : ImageResult.uri
                })
            }
        }
    }

    _pickImage2 = async() => {
        const result = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if(result.status === "granted"){
            const ImageResult = await ImagePicker.launchImageLibraryAsync({
                mediaTypes : ImagePicker.MediaTypeOptions.Images
            })
            if(ImageResult != null){
                this.setState({
                    image2 : ImageResult.uri
                })
            }
        }
    }

    render(){
        return(
            <View style={styles.Root} >
                <IconButton
                    icon="close"
                    style={{
                        backgroundColor : "#fff",
                        position : "absolute",
                        top : 0.04*screenHeight,
                        left : 0.05*screenWidth
                    }}
                />

                <Text style={styles.Text} >Please click some {"\n"}photos of your package</Text>

                        <View style={{
                            flexDirection : "row",
                            alignItems : "center",
                            marginVertical : 0.05*screenHeight
                        }} >
                    <View style={{
                        marginHorizontal : 0.025*screenWidth
                    }} >
                        <TouchableOpacity style={{
                            height : 0.15*screenHeight,
                            width : 0.15*screenHeight,
                            backgroundColor : "#ECECEC",
                            borderRadius : 0.045*screenWidth,
                            alignItems : "center",
                            justifyContent : "center",
                            overflow : "hidden"
                        }} onPress={() => {this._pickImage1()}} >
                            <Icon name="camera" size={0.12*screenWidth} color="#3E4070" />

                            <Image
                                source={{uri : this.state.image1}}
                                style={{
                                    position : "absolute",
                                    zIndex : 100,
                                    height : "100%",
                                    width : "100%"
                                }}
                            />
                        </TouchableOpacity>

                        <Text style={styles.Text1} >Top View</Text>
                    </View>


                    <View style={{
                        marginHorizontal : 0.025*screenWidth
                    }} >
                        <TouchableOpacity style={{
                            height : 0.15*screenHeight,
                            width : 0.15*screenHeight,
                            backgroundColor : "#ECECEC",
                            borderRadius : 0.045*screenWidth,
                            alignItems : "center",
                            justifyContent : "center",
                            overflow : "hidden"
                        }} onPress={() => {this._pickImage2()}} >
                            <Icon name="camera" size={0.12*screenWidth} color="#3E4070" />
                            <Image
                                source={{uri : this.state.image2}}
                                style={{
                                    position : "absolute",
                                    zIndex : 100,
                                    height : "100%",
                                    width : "100%"
                                }}
                            />
                        </TouchableOpacity>

                        <Text style={styles.Text1} >Side View</Text>
                    </View>
                    </View>

                    <TouchableOpacity style={styles.Button} onPress={() => {
                        this.props.navigation.push("GoLocal",{image1 : this.state.image1, image2 : this.state.image2, arriving : true})
                    }} >
                    <Text style={[styles.Text1, {marginTop : 0, marginLeft : 0}]} >Continue</Text>
                    </TouchableOpacity>

            </View>
        )
    }
}

export default PickImage

const styles = StyleSheet.create({
    Root : {
        flex : 1,
        backgroundColor : "rgba(62,73,88,0.8)",
        alignItems : "center",
        justifyContent : "center"
    },
    Text : {
        fontFamily : "Bold",
        marginLeft : 0.05*screenWidth,
        fontSize : 0.045*screenWidth,
        color : "#fff",
        textAlign : "center"
    },
    Text1 : {
        fontFamily : "Bold",
        fontSize : 0.045*screenWidth,
        color : "#fff",
        textAlign : "center",
        marginTop : 0.02*screenHeight
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
        alignSelf : "center",
        position : "absolute",
        bottom : 0.05*screenWidth
    }
})