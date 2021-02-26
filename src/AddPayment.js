import React from "react"
import {View, Text, Dimensions, StyleSheet, Image, TouchableOpacity, ScrollView} from "react-native"
import {IconButton} from "react-native-paper"
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons"

const screenHeight = Dimensions.get("screen").height
const screenWidth = Dimensions.get("screen").width

class AddPayment extends React.Component{
    render(){
        return(
            <View style={styles.Root} >

                <View style={styles.Header} >
                    <IconButton icon="chevron-left"  style={{
                        marginLeft : 0.05*screenWidth,
                    }} size={0.065*screenWidth} onPress={() => {this.props.navigation.goBack()}} />
                    <Text style={styles.Profile} >Payments Options</Text>
                </View>

                    <ScrollView>


                    <TouchableOpacity style={styles.Container} onPress={() => {this.props.navigation.push("AddNewCard")}} >
                        <Text style={[styles.Profile,{marginTop :0.024*screenHeight, color : "#333333" }]} >Credit/Debit Cards</Text>
                        <View style={{flexDirection : "row", alignItems : "center"}} >
                            <Text style={styles.Des} >ADD NEW CARD</Text>
                            <View style={{flexDirection : "row", alignItems : "center", position : "absolute", right : 0.04*screenWidth}} >
                            <Image
                                source={require("../assets/images/visa.png")}
                                style={{
                                    marginHorizontal : 0.02*screenWidth
                                }}
                            />
                            <Image
                                source={require("../assets/images/master.png")}
                                style={{
                                    marginHorizontal : 0.02*screenWidth
                                }}
                            />
                        </View>
                        </View>
                    </TouchableOpacity>


                    <View style={styles.WalletContainer} >
                        <Text style={[styles.Profile, {marginVertical : 0.02*screenHeight}]} >Wallets</Text>

                        <View style={{flexDirection : "row", alignItems : "center", marginVertical : 0.01*screenHeight}} >
                            <View style={styles.Square} >
                                <Image
                                    source={require("../assets/images/freecharge.png")}
                                />
                            </View>
                            <Text style={styles.ItemName} >Freecharge</Text>
                            <Text style={styles.ItemLink} >Link Account</Text>
                        </View>


                        <View style={{flexDirection : "row", alignItems : "center", marginVertical : 0.01*screenHeight}} >
                            <View style={styles.Square} >
                                <Image
                                    source={require("../assets/images/paytm1.png")}
                                />
                            </View>
                            <Text style={styles.ItemName} >Paytm</Text>
                            <Text style={styles.ItemLink} >Link Account</Text>
                        </View>



                        <View style={{flexDirection : "row", alignItems : "center", marginVertical : 0.01*screenHeight}} >
                            <View style={styles.Square} >
                                <Image
                                    source={require("../assets/images/paypal.png")}
                                />
                            </View>
                            <Text style={styles.ItemName} >PayPal</Text>
                            <Text style={styles.ItemLink} >Link Account</Text>
                        </View>



                        <View style={{flexDirection : "row", alignItems : "center", marginVertical : 0.01*screenHeight}} >
                            <View style={styles.Square} >
                                <Image
                                    source={require("../assets/images/gpay1.png")}
                                />
                            </View>
                            <Text style={styles.ItemName} >Google Pay</Text>
                            <Text style={styles.ItemLink} >Link Account</Text>
                        </View>


                    </View>


                    <View style={{
                        height : 0.45*screenHeight,
                        width : screenWidth
                    }} >
                    <Text style={[styles.Profile, {marginVertical : 0.02*screenHeight, marginLeft : 0.06*screenWidth}]} >Net Banking</Text>
                    
                        <View style={{flexDirection : "row", alignItems : "center", justifyContent : "center", alignSelf : "center", marginVertical : 0.01*screenHeight}} >

                            <View style={{alignItems : "center"}} >
                            <View style={[styles.Square, {marginLeft : 0}]} >
                                <Image
                                    source={require("../assets/images/icici.png")}
                                />
                            </View>
                            <Text style={[styles.ItemName, {marginTop : 0.005*screenHeight}]} >ICICI</Text>
                            </View>


                            <View style={{alignItems : "center"}} >
                            <View style={styles.Square} >
                                <Image
                                    source={require("../assets/images/hdfc.png")}
                                />
                            </View>
                            <Text style={[styles.ItemName, {marginTop : 0.005*screenHeight}]} >HDFC</Text>
                            </View>

                            <View style={{alignItems : "center"}} >
                            <View style={styles.Square} >
                                <Image
                                    source={require("../assets/images/sbi.png")}
                                />
                            </View>
                            <Text style={[styles.ItemName, {marginTop : 0.005*screenHeight}]} >SBI</Text>
                            </View>


                            <View style={{alignItems : "center"}} >
                            <View style={styles.Square} >
                                <Image
                                    source={require("../assets/images/bob.png")}
                                />
                            </View>
                            <Text style={[styles.ItemName, {marginTop : 0.005*screenHeight}]} >BOB</Text>
                            </View>


                            <View style={{alignItems : "center"}} >
                            <View style={styles.Square} >
                                <Image
                                    source={require("../assets/images/icici1.png")}
                                />
                            </View>
                            <Text style={[styles.ItemName, {marginTop : 0.005*screenHeight}]} >ICICI</Text>
                            </View>
                        </View>

                        <TouchableOpacity style={{flexDirection : "row", width : 0.8*screenWidth, alignSelf : "center", marginTop : 0.04*screenHeight, alignItems : "center"}}
                            onPress={() => {this.props.navigation.push("AddPayment")}}
                         >
                            <Text style={{fontFamily : "Medium", fontSize : 0.045*screenWidth, color : "#3E4958"}} >MORE BANKS</Text>
                            <Icon name="chevron-right" size={0.055*screenWidth} color="#3E4958" style={{
                                position : "absolute",
                                right : 0
                            }} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.Button} >
                            <Text style={styles.Pay} >PAY 508</Text>
                        </TouchableOpacity>

                    </View>
                    

        </ScrollView>
            </View>
        )
    }
}

export default AddPayment

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
        width: 0.9*screenWidth,
        margin : 0.015*screenHeight,
        alignSelf : "center",
        shadowColor: "#C4C4C4",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.3,
        shadowRadius: 44,
        elevation: 5,
        backgroundColor : "#fff",
        borderRadius : 0.04*screenWidth
    },
    Title : {
        fontFamily : "SemiBold",
        fontSize : 0.05*screenWidth,
        marginTop : 0.01*screenHeight,
        marginLeft : 0.03*screenWidth,
        color : "#434E5C"
    },
    Des : {
        fontFamily : "Medium",
        marginLeft : 0.05*screenWidth,
        fontSize : 0.04*screenWidth
    },
    WalletContainer : {
        height : 0.42*screenHeight,
        width : 0.9*screenWidth,
        backgroundColor : "red",
        alignSelf : "center",
        marginVertical : 0.02*screenHeight,
        shadowColor: "#C4C4C4",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.3,
        shadowRadius: 44,
        elevation: 5,
        backgroundColor : "#fff",
        borderRadius : 0.04*screenWidth
    },
    Square : {
        height : 0.06*screenHeight,
        width : 0.06*screenHeight,
        backgroundColor : "#fff",
        borderWidth : 2,
        borderColor : "#E3E3E3",
        marginLeft : 0.05*screenWidth,
        borderRadius : 0.02*screenWidth,
        alignItems : "center",
        justifyContent : "center"
    },
    ItemName : {
        fontSize : 0.045*screenWidth,
        fontFamily : "Regular",
        marginLeft : 0.05*screenWidth
    },
    ItemLink : {
        fontSize : 0.04*screenWidth,
        fontFamily : "Regular",
        right : 0.06*screenWidth,
        position : "absolute",
        textDecorationLine : "underline"
    },
    Button : {
        height : 0.08*screenHeight,
        width: 0.9*screenWidth,
        backgroundColor : "#13DA9C",
        marginVertical : 0.04*screenHeight,
        alignSelf : "center",
        borderRadius : 0.03*screenWidth,
        alignItems : "center",
        justifyContent : "center"
    },
    Pay : {
        color : "#fff",
        fontFamily : "Bold",
        fontSize : 0.045*screenWidth
    }
})