import React from "react"
import {View, Text, Dimensions, StyleSheet, TouchableOpacity, ScrollView} from "react-native"
import {IconButton} from "react-native-paper"

const screenHeight = Dimensions.get("screen").height
const screenWidth = Dimensions.get("screen").width

class FAQ extends React.Component{
    render(){
        return(
            <View style={styles.Root} >

                <View style={styles.Header} >
                    <IconButton icon="chevron-left"  style={{
                        marginLeft : 0.05*screenWidth,
                        backgroundColor : "#fff"
                    }} size={0.065*screenWidth} onPress={() => {this.props.navigation.goBack()}} />
                    <Text style={styles.Profile} >FAQ’s</Text>
                </View>

                <ScrollView>

                <View style={styles.Container} >

                <Text style={[styles.Profile, {marginLeft : 0.08*screenWidth, marginTop : 0.03*screenHeight}]} >Rides</Text>

                <TouchableOpacity style={{
                    flexDirection : "row",
                    marginTop : 0.02*screenHeight,
                    marginLeft : 0.08*screenWidth
                }} onPress={() => {this.props.navigation.push("FAQDetail")}} >
                    <Text style={styles.Title} >Unblock account</Text>
                    <IconButton icon="chevron-right"  style={{
                right : 0.05*screenWidth,
                position : "absolute"
                }} size={0.065*screenWidth} color="#97ADB6"/>
                </TouchableOpacity>

                <View style={styles.Dotted} />



                <TouchableOpacity style={{
                    flexDirection : "row",
                    marginTop : 0.02*screenHeight,
                    marginLeft : 0.08*screenWidth
                }}  onPress={() => {this.props.navigation.push("FAQDetail")}} >
                    <Text style={styles.Title} >Change phone number </Text>
                    <IconButton icon="chevron-right"  style={{
                right : 0.05*screenWidth,
                position : "absolute"
                }} size={0.065*screenWidth} color="#97ADB6"  />
                </TouchableOpacity>

                <View style={styles.Dotted} />




                <TouchableOpacity style={{
                    flexDirection : "row",
                    marginTop : 0.02*screenHeight,
                    marginLeft : 0.08*screenWidth
                }} onPress={() => {this.props.navigation.push("FAQDetail")}} >
                    <Text style={styles.Title} >Privacy information</Text>
                    <IconButton icon="chevron-right"  style={{
                right : 0.05*screenWidth,
                position : "absolute"
                }} size={0.065*screenWidth} color="#97ADB6"  />
                </TouchableOpacity>

      
                

                <Text style={[styles.Profile, {marginLeft : 0.08*screenWidth, marginTop : 0.03*screenHeight}]} >Payments</Text>

                        <TouchableOpacity style={{
                            flexDirection : "row",
                            marginTop : 0.02*screenHeight,
                            marginLeft : 0.08*screenWidth
                        }} onPress={() => {this.props.navigation.push("FAQDetail")}} >
                            <Text style={styles.Title} >Accepted payment methods</Text>
                            <IconButton icon="chevron-right"  style={{
                        right : 0.05*screenWidth,
                        position : "absolute"
                        }} size={0.065*screenWidth} color="#97ADB6"/>
                        </TouchableOpacity>

                        <View style={styles.Dotted} />



                        <TouchableOpacity style={{
                            flexDirection : "row",
                            marginTop : 0.02*screenHeight,
                            marginLeft : 0.08*screenWidth
                        }} onPress={() => {this.props.navigation.push("FAQDetail")}}  >
                            <Text style={styles.Title} >Price estimation</Text>
                            <IconButton icon="chevron-right"  style={{
                        right : 0.05*screenWidth,
                        position : "absolute"
                        }} size={0.065*screenWidth} color="#97ADB6"  />
                        </TouchableOpacity>

                        <View style={styles.Dotted} />




                        <TouchableOpacity style={{
                            flexDirection : "row",
                            marginTop : 0.02*screenHeight,
                            marginLeft : 0.08*screenWidth
                        }} onPress={() => {this.props.navigation.push("FAQDetail")}} >
                            <Text style={styles.Title} >Ride cancellation fee</Text>
                            <IconButton icon="chevron-right"  style={{
                        right : 0.05*screenWidth,
                        position : "absolute"
                        }} size={0.065*screenWidth} color="#97ADB6"  />
                        </TouchableOpacity>

                        <View style={styles.Dotted} />

                        <TouchableOpacity style={{
                            flexDirection : "row",
                            marginTop : 0.02*screenHeight,
                            marginLeft : 0.08*screenWidth
                        }} onPress={() => {this.props.navigation.push("FAQDetail")}} >
                            <Text style={styles.Title} >Damage or cleaning fee</Text>
                            <IconButton icon="chevron-right"  style={{
                        right : 0.05*screenWidth,
                        position : "absolute"
                        }} size={0.065*screenWidth} color="#97ADB6"  />
                        </TouchableOpacity>

                        <View style={styles.Dotted} />
                        <TouchableOpacity style={{
                            flexDirection : "row",
                            marginTop : 0.02*screenHeight,
                            marginLeft : 0.08*screenWidth
                        }} onPress={() => {this.props.navigation.push("FAQDetail")}} >
                            <Text style={styles.Title} >Price higher than expected</Text>
                            <IconButton icon="chevron-right"  style={{
                        right : 0.05*screenWidth,
                        position : "absolute"
                        }} size={0.065*screenWidth} color="#97ADB6"  />
                        </TouchableOpacity>

                        <View style={styles.Dotted} />
                        <TouchableOpacity style={{
                            flexDirection : "row",
                            marginTop : 0.02*screenHeight,
                            marginLeft : 0.08*screenWidth
                        }} onPress={() => {this.props.navigation.push("FAQDetail")}} >
                            <Text style={styles.Title} >Using a coupon</Text>
                            <IconButton icon="chevron-right"  style={{
                        right : 0.05*screenWidth,
                        position : "absolute"
                        }} size={0.065*screenWidth} color="#97ADB6"  />
                        </TouchableOpacity>

                        

                        <Text style={[styles.Profile, {marginLeft : 0.08*screenWidth, marginTop : 0.03*screenHeight}]} >Support</Text>

                        <TouchableOpacity style={{
                            flexDirection : "row",
                            marginTop : 0.02*screenHeight,
                            marginLeft : 0.08*screenWidth
                        }} onPress={() => {this.props.navigation.push("FAQDetail")}} >
                            <Text style={styles.Title} >Unblock account</Text>
                            <IconButton icon="chevron-right"  style={{
                        right : 0.05*screenWidth,
                        position : "absolute"
                        }} size={0.065*screenWidth} color="#97ADB6"/>
                        </TouchableOpacity>

                        <View style={styles.Dotted} />



                        <TouchableOpacity style={{
                            flexDirection : "row",
                            marginTop : 0.02*screenHeight,
                            marginLeft : 0.08*screenWidth
                        }} onPress={() => {this.props.navigation.push("FAQDetail")}} >
                            <Text style={styles.Title} >Change phone number </Text>
                            <IconButton icon="chevron-right"  style={{
                        right : 0.05*screenWidth,
                        position : "absolute"
                        }} size={0.065*screenWidth} color="#97ADB6"  />
                        </TouchableOpacity>

                        <View style={styles.Dotted} />




                        <TouchableOpacity style={{
                            flexDirection : "row",
                            marginTop : 0.02*screenHeight,
                            marginLeft : 0.08*screenWidth
                        }} onPress={() => {this.props.navigation.push("FAQDetail")}} >
                            <Text style={styles.Title} >Privacy information</Text>
                            <IconButton icon="chevron-right"  style={{
                        right : 0.05*screenWidth,
                        position : "absolute"
                        }} size={0.065*screenWidth} color="#97ADB6"  />
                        </TouchableOpacity>


                </View>

                </ScrollView>

            </View>
        )
    }
}

export default FAQ

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
    Dotted  : {
        borderWidth: 1,
        borderRadius: 1,
        width : 0.8*screenWidth,
        alignSelf : "center",
        borderColor : "#D5DDE0"
    },
    Container : {
        width : screenWidth,
        backgroundColor : "#fff",
    },
    Title : {
        fontFamily : "Medium",
        fontSize : 0.045*screenWidth,
        color : "#3E4958",
        alignSelf : "center",
        textAlign : "center",
        marginVertical : 0.02*screenHeight
    },
})