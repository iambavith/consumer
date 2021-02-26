import React from "react"
import {View, Text, Dimensions, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList} from "react-native"
import {IconButton} from "react-native-paper"
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons"
import PaymentCards from "../components/PaymentCards"

const screenHeight = Dimensions.get("screen").height
const screenWidth = Dimensions.get("screen").width

class Payments extends React.Component{
    render() {
        return (
             <View style={styles.Root} >

                <View style={styles.Header} >
                    <IconButton icon="chevron-left"  style={{
                        marginLeft : 0.05*screenWidth,
                    }} size={0.065*screenWidth} onPress={() => {this.props.navigation.goBack()}} />
                    <Text style={styles.Profile} >Payments</Text>
                </View>

                <ScrollView>

            <View style={styles.Card} >
             <Image
                 source={require("../assets/images/card.png")}
                 style={{height : "100%", width : "100%"}}
             />
             <View style={{position : "absolute", zIndex : 100, height : "100%", width : "100%"}} >


                    <View style={{flexDirection : "row", alignItems : "center"}} >
                        <View>
                        <Text style={styles.GoCredit} >GO CREDIT</Text>
                        <Text style={styles.GoCreditDes} >PAY FLAT FARE OR LESS PER RIDE</Text>
                        </View>

                        <View style={{
                            position : "absolute",
                            right : 0.08*screenWidth
                        }} >
                        <Text style={[styles.GoCreditDes, {marginTop : 0.04*screenHeight,}]} >Balance</Text>
                        <Text style={[styles.GoCredit, {marginTop : 0}]} >223.33</Text>
                        </View>
                    </View>       

                        <View style={styles.Dotted} />

                        <TouchableOpacity style={styles.AddCredit} >
                            <Text style={{fontFamily : "Medium", color : "#fff", fontSize : 0.035*screenWidth}} >Add Credit</Text>
                        </TouchableOpacity>

             </View>
             </View>

                        <TouchableOpacity style={{flexDirection : "row", width : 0.8*screenWidth, alignSelf : "center", marginTop : 0.04*screenHeight, alignItems : "center"}}
                            onPress={() => {this.props.navigation.push("AddPayment")}}
                         >
                            <Text style={{fontFamily : "Medium", fontSize : 0.05*screenWidth, color : "#3E4958"}} >Add Payment Methods</Text>
                            <Icon name="chevron-right" size={0.065*screenWidth} color="#3E4958" style={{
                                position : "absolute",
                                right : 0
                            }} />
                        </TouchableOpacity>



                    <Text style={{
                        marginVertical : 0.03*screenHeight,
                        marginLeft : 0.1*screenWidth,
                        fontFamily : "Bold",
                        fontSize : 0.05*screenWidth,
                        color : "#434E5C"
                    }} >History</Text>


                    <FlatList
                        data={data}
                        renderItem={({item}) => (
                            <PaymentCards
                            place={item.place}
                            distance={item.distance}
                            date={item.date}
                            price={item.price}
                            method={item.method}
                            />
                        )}
                    />

             </ScrollView>
             </View>
        );
    }
}

export default Payments


const data = [
    {
        "place" : "Malviya Nagar - Saket ",
        "distance" : "(2.3 KM)",
        "date" : "8 Sep 2019, 18:39",
        "price" : "Rs 60",
        "method" : "PAYTM"
    },
    {
        "place" : "Malviya Nagar - Saket ",
        "distance" : "(2.3 KM)",
        "date" : "8 Sep 2019, 18:39",
        "price" : "Rs 60",
        "method" : "GPAY"
    },
    {
        "place" : "Malviya Nagar - Saket ",
        "distance" : "(2.3 KM)",
        "date" : "8 Sep 2019, 18:39",
        "price" : "Rs 60",
        "method" : "PAYTM"
    },
    {
        "place" : "Malviya Nagar - Saket ",
        "distance" : "(2.3 KM)",
        "date" : "8 Sep 2019, 18:39",
        "price" : "Rs 60",
        "method" : "GPAY"
    }
]

const styles = StyleSheet.create({
    Root : {
        flex : 1,
        backgroundColor : "#fff"
    },
    Card : {
        height : 0.23*screenHeight,
        width : 0.9*screenWidth,
        alignSelf : "center",
        borderRadius : 0.05*screenWidth,
        overflow : "hidden",
        marginTop : 0.01*screenHeight
    },    
    Header : {
        flexDirection : "row",
        marginTop : 0.05*screenHeight,
        alignItems : "center",
    },
    Profile : {
        fontFamily : "Bold",
        marginLeft : 0.05*screenWidth,
        fontSize : 0.045*screenWidth,
        color : "#3E4958"
    },
    GoCredit : {
        fontFamily : "Bold",
        color : "#fff",
        marginTop : 0.04*screenHeight,
        marginLeft : 0.08*screenWidth,
        fontSize : 0.05*screenWidth
    },
    GoCreditDes : {
        fontFamily : "Regular",
        color : "#fff",
        marginTop : 0.002*screenHeight,
        marginLeft : 0.08*screenWidth,
        fontSize : 0.035*screenWidth
    },
    Dotted  : {
        borderWidth: 1,
        borderRadius: 1,
        width : "80%",
        alignSelf : "center",
        marginVertical : 0.02*screenHeight,
        borderColor : "#D5DDE0"
    },
    AddCredit : {
        height : 0.045*screenHeight,
        width : 0.25*screenWidth,
        backgroundColor: "transparent",
        marginTop : 0.01*screenHeight,
        marginLeft : 0.08*screenWidth,
        borderWidth : 3,
        borderColor : "#fff",
        borderRadius : 0.025*screenWidth,
        alignItems : "center",
        justifyContent : "center"
    }
})