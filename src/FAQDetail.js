import React from "react"
import {View, Text, Dimensions, StyleSheet, TextInput, TouchableOpacity} from "react-native"
import {IconButton} from "react-native-paper"

const screenHeight = Dimensions.get("screen").height
const screenWidth = Dimensions.get("screen").width

class FAQDetail extends React.Component{
    render(){
        return(
            <View style={styles.Root} >

                <View style={styles.Header} >
                    <IconButton icon="chevron-left"  style={{
                        marginLeft : 0.05*screenWidth,
                        backgroundColor : "#fff"
                    }} size={0.065*screenWidth}
                    onPress={() => {this.props.navigation.goBack()}}
                     />
                    <Text style={styles.Profile} >FAQ’s</Text>
                </View>

                <Text style={[styles.Profile, {marginTop : 0.03*screenHeight, marginLeft : 0.08*screenWidth, fontFamily : "Bold", color:"#3E4958"}]} >There was an issue with the Pickup {"\n"}Location</Text>

                    <Text style={styles.Des} >Posuere dictumst metus pulvinar rutrum ridiculus magna tempor risus, id justo himenaeos quam proin maecenas porta, convallis dignissim tincidunt urna blandit nibh congue.</Text>

                   <View style={{flexDirection : "row", alignItems : "center"}} >
                   <Text style={[styles.Profile, {marginTop : 0.03*screenHeight, marginLeft : 0.08*screenWidth, fontFamily : "Bold", color:"#3E4958"}]} >Was it helpful?</Text>
                   
                   <IconButton icon="thumb-up-outline"  style={{
                        marginLeft : 0.05*screenWidth,
                        position : "absolute",
                        right : 0.2*screenWidth,
                        top : 0.015*screenHeight
                    }} size={0.065*screenWidth} 
                    color="#4B545A"
                     />

                <IconButton icon="thumb-down-outline"  style={{
                        marginLeft : 0.05*screenWidth,
                        position : "absolute",
                        right : 0.1*screenWidth,
                        top : 0.015*screenHeight
                    }} size={0.065*screenWidth} 
                    color="#4B545A"
                    />
                    
                   </View>


                   <Text style={[styles.Des, {marginTop : 0.05*screenHeight}]} >TELL US</Text>

                    <View style={{
                        height : 0.2*screenHeight,
                        width : 0.84*screenWidth,
                        backgroundColor : "#fff",
                        alignSelf : "center",
                        borderWidth : 2,
                        borderColor : "#D5DDE0",
                        borderRadius : 0.035*screenWidth
                    }} >
                        <TextInput
                            placeholder="Your message here..."
                            style={[styles.Des, {marginLeft : 0.05*screenWidth}]}
                        />
                    </View>

                    <TouchableOpacity style={styles.Button} >
                    <Text style={[styles.Profile, {marginTop : 0, marginLeft : 0, fontFamily : "Bold", color:"#fff"}]} >Submit</Text>
                    </TouchableOpacity>

            </View>
        )
    }
}

export default FAQDetail

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
    Des : {
        fontFamily : "Medium",
        marginLeft : 0.08*screenWidth,
        fontSize : 0.04*screenWidth,
        color : "#3E4958",
        marginVertical : 0.02*screenHeight,
        width : 0.85*screenWidth
    },
    Button : {
        height : 0.07*screenHeight,
        width : 0.9*screenWidth,
        backgroundColor : "#13DA9C",
        alignItems : "center",
        justifyContent : "center",
        borderRadius : 0.03*screenWidth,
        marginVertical : 0.08*screenHeight,
        alignSelf : "center"
    }
})