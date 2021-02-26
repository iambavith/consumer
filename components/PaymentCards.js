import React from "react"
import {View, Text, Dimensions, StyleSheet, Image} from "react-native"

const screenHeight = Dimensions.get("screen").height
const screenWidth = Dimensions.get("screen").width

class PaymentCards extends React.Component{
    render(){
        return(
            <View style={styles.Container} >
                <View style={{margin : 0.02*screenHeight, flexDirection : "row", alignItems : "center"}} >
                    <Text style={styles.Title} >{this.props.place}</Text>
                    <Text style={[styles.Title,{position : "absolute", right : 0.035*screenWidth}]} >{this.props.price}</Text>
                </View>
                <View style={{flexDirection : "row", alignItems : "center"}} >
                    <View style={{marginLeft : 0.07*screenWidth}} >
                    <Text style={styles.Des} >{this.props.distance}</Text>
                    <Text style={styles.Des} >{this.props.date}</Text>
                    </View>

                    <Image
                        source={this.props.method === "GPAY" ? require("../assets/images/gpay.png") : this.props.method === "PAYTM" ? require("../assets/images/paytm.png") : null}
                        style={{
                            position : "absolute",
                            right : 0.05*screenWidth
                        }}
                    />
                </View>
            </View>
        )
    }
}

export default PaymentCards

const styles = StyleSheet.create({
    Container : {
        height : 0.16*screenHeight,
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
        fontSize : 0.035*screenWidth
    }
})