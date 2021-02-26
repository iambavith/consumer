import React from "react"
import {View, Text, Dimensions, StyleSheet, Image, TouchableOpacity} from "react-native"
import {IconButton} from "react-native-paper"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const screenHeight = Dimensions.get("screen").height
const screenWidth = Dimensions.get("screen").width

class RideCompleted extends React.Component{

    state = {
        sucess : false
    }

    render(){
        return(
            <View style={styles.Root} >
                <View style={styles.Green}/>

                <View style={styles.Container} >

                       {
                           this.state.sucess ? 
                            <View>
                            <View style={{
                            height : 0.1*screenHeight,
                            width : 0.1*screenHeight,
                            backgroundColor : "#13DA9C",
                           alignSelf : "center",
                           alignItems : "center",
                           justifyContent : "center",
                           marginTop : 0.03*screenHeight,
                           borderRadius : screenHeight
                        }} >
                            <Icon
                                name="check"
                                size={0.1*screenWidth}
                                color="#fff"
                            />
                        </View>


                            <Text style={styles.Text} >Ride Completed </Text>
                            <Text style={[styles.Text, {fontFamily : "Medium", marginTop : 0, fontSize : 0.035*screenWidth}]} >Thanks for riding</Text>
                            
                            <View style={styles.Box} >

                                <View style={{
                                    alignItems : "center",
                                    marginLeft : 0.03*screenWidth
                                }} >
                                <Text style={[styles.Text, {fontFamily : "Medium", marginTop : 0, fontSize : 0.035*screenWidth}]} >Charged from your</Text>
                                <Image
                                    source={require("../assets/images/paytm2.png")}
                                    style={{
                                        height : 0.02*screenHeight,
                                        width : 0.15*screenWidth
                                    }}
                                />
                                </View>

                                        <Text style={[styles.Text, {marginTop : 0, fontSize : 0.065*screenWidth, position : "absolute", right : 0.05*screenWidth}]} >₹237.0</Text>

                            </View>


                            <View style={{
                            marginVertical : 0.02*screenHeight,
                            marginLeft : 0.08*screenWidth
                        }} >
                        <View style={{flexDirection : "row", alignItems : "center"}} >
                            <Text style={styles.Text5} >11:24</Text>
                            <Icon name="checkbox-blank-circle" color="#13DA9C" style={{marginLeft : 0.05*screenWidth}} />
                            <Text style={styles.Text1} >1, Thrale Street, London,{"\n"}SE19HW, UK</Text>
                        </View>

                        <View style={{
                            flexDirection : "row",
                            alignItems : "center"
                        }} >
                        <View
                            style={{
                                height : 0.08*screenHeight,
                                width : 2,
                                backgroundColor : "#3E4958",
                                marginLeft : 0.13*screenWidth
                            }}
                        />
                        <Text style={{
                            fontSize : 0.055*screenWidth,
                            fontFamily : "Medium",
                            marginLeft : 0.05*screenWidth,
                            color : "#13DA9C"
                        }} >50.8km</Text>
                        </View>

                        <View style={{flexDirection : "row", alignItems : "center"}} >
                            <Text style={styles.Text5} >11:38</Text>
                            <Icon name="menu-down" color="#4B545A" style={{marginLeft : 0.03*screenWidth}} size={0.065*screenWidth} />
                            <Text style={[styles.Text1, {marginLeft : 0.02*screenWidth}]} >Ealing Broadway Shopping {"\n"}Centre, London, W55JY, UK</Text>
                        </View>
                        </View>

                            </View>
                        :
                        <View>
                        <View style={{
                            height : 0.1*screenHeight,
                            width : 0.1*screenHeight,
                            backgroundColor : "#F77C2B",
                           alignSelf : "center",
                           alignItems : "center",
                           justifyContent : "center",
                           marginTop : 0.03*screenHeight,
                           borderRadius : screenHeight
                        }} >
                            <Icon
                                name="clock-outline"
                                size={0.1*screenWidth}
                                color="#fff"
                            />
                        </View>
                        <Text style={styles.Text} >Ride Completed </Text>
                        <Text style={[styles.Text, {fontFamily : "SemiBold", marginTop : 0, fontSize : 0.035*screenWidth, color : "#FE9010"}]} >Payment Pending</Text>
                       
                        <View style={[styles.Box, {borderColor : "#FFDBC6"}]} >

                        <View style={{
                            alignItems : "center",
                            marginLeft : 0.03*screenWidth
                        }} >
                        <Text style={[styles.Text, {fontFamily : "Medium", marginTop : 0, fontSize : 0.035*screenWidth}]} >Pay</Text>
                        <Text style={[styles.Text, {fontFamily : "SemiBold", marginTop : 0, fontSize : 0.055*screenWidth}]} >CASH</Text>
                        <Image
                           
                        />
                        </View>

                                <Text style={[styles.Text, {marginTop : 0, fontSize : 0.065*screenWidth, position : "absolute", right : 0.05*screenWidth}]} >₹237.0</Text>

                        </View>


                        <View style={{
                        marginVertical : 0.02*screenHeight,
                        marginLeft : 0.08*screenWidth
                        }} >
                        <View style={{flexDirection : "row", alignItems : "center"}} >
                        <Text style={styles.Text5} >11:24</Text>
                        <Icon name="checkbox-blank-circle" color="#13DA9C" style={{marginLeft : 0.05*screenWidth}} />
                        <Text style={styles.Text1} >1, Thrale Street, London,{"\n"}SE19HW, UK</Text>
                        </View>

                        <View style={{
                        flexDirection : "row",
                        alignItems : "center"
                        }} >
                        <View
                        style={{
                        height : 0.08*screenHeight,
                        width : 2,
                        backgroundColor : "#3E4958",
                        marginLeft : 0.13*screenWidth
                        }}
                        />
                        <Text style={{
                        fontSize : 0.055*screenWidth,
                        fontFamily : "Medium",
                        marginLeft : 0.05*screenWidth,
                        color : "#13DA9C"
                        }} >50.8km</Text>
                        </View>

                        <View style={{flexDirection : "row", alignItems : "center"}} >
                        <Text style={styles.Text5} >11:38</Text>
                        <Icon name="menu-down" color="#4B545A" style={{marginLeft : 0.03*screenWidth}} size={0.065*screenWidth} />
                        <Text style={[styles.Text1, {marginLeft : 0.02*screenWidth}]} >Ealing Broadway Shopping {"\n"}Centre, London, W55JY, UK</Text>
                        </View>
                        </View>

                        </View>
                       }

                </View>


                {
                    this.state.sucess ? 
                    <TouchableOpacity style={styles.Button} onPress={() => {this.props.navigation.push("Review")}} >
                        <Text style={[styles.Text,{marginTop : 0, color : "#fff"}]} >Done</Text>
                    </TouchableOpacity>

                    :

                    <TouchableOpacity style={styles.Button} onPress={() => {this.props.navigation.push("Review")}} >
                    <Text style={[styles.Text,{marginTop : 0, color : "#fff"}]} >Payment Recived</Text>
                    </TouchableOpacity>
                }

            </View>
        )
    }
}

export default RideCompleted

const styles = StyleSheet.create({
    Root : {
        flex : 1,
        backgroundColor : "#fff",
        alignItems : "center",
        justifyContent : "center"
    },
    Green : {
        height : 0.5*screenHeight,
        position : "absolute",
        zIndex: -1,
        width : screenWidth,
        backgroundColor : "#13DA9C",
        top : 0,
        borderBottomLeftRadius : 0.05*screenWidth,
        borderBottomRightRadius : 0.05*screenWidth
    },
    Container : {
        width : 0.85*screenWidth,
        height: 0.65*screenHeight,
        backgroundColor : "#fff",
        elevation : 5,
        borderRadius : 0.04*screenWidth
    },
    Text : {
        fontFamily : "Bold",
        fontSize : 0.045*screenWidth,
        color : "#3E4958",
        alignSelf : "center",
        marginTop : 0.025*screenHeight
    },
    Box : {
        height : 0.09*screenHeight,
        width : 0.7*screenWidth,
        backgroundColor : "#fff",
        borderWidth : 2,
        alignSelf : "center",
        marginTop : 0.025*screenHeight,
        borderColor : "#48AB8C",
        borderRadius : 0.04*screenWidth,
        flexDirection : "row",
        alignItems : "center"
    },
    Text1 : {
        fontFamily : "Regular",
        fontSize : 0.045*screenWidth,
        color : "#383A3C",
        marginLeft : 0.04*screenWidth,
        marginTop : 0.02*screenHeight
    },
    Text5 : {
        fontFamily : "Regular", 
        fontSize : 0.04*screenWidth,
        color : "#97ADB6"
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
    },
})