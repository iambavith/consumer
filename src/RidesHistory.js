import React from "react"
import {View, Text, Dimensions, StyleSheet, ScrollView, FlatList, CheckBox, TextInput, TouchableOpacity} from "react-native"
import {IconButton} from "react-native-paper"
import RideHistoryCards from "../components/RideHistoryCards"

const screenHeight = Dimensions.get("screen").height
const screenWidth = Dimensions.get("screen").width

class RideHistory extends React.Component{

    state={
        showFilter : false,
        goBike : true,
        GoRickshaw : false,
        Rental : false,
        Golocal : false,
        date : ""
    }

    render(){
        return(
            <View style={styles.Root} >
                <View style={styles.Header} >
                    <IconButton icon="chevron-left"  style={{
                        marginLeft : 0.05*screenWidth,
                    }} size={0.065*screenWidth} onPress={() => {this.props.navigation.goBack()}} />
                    <Text style={styles.Profile} >Ride history</Text>
                </View>

                <View style={{
                    paddingBottom : 0.1125*screenHeight
                }} >
                    <FlatList


                        ListHeaderComponent={() => (
                            <View style={{
                    flexDirection : "row", 
                    marginVertical : 0.02*screenHeight, 
                    marginLeft : 0.08*screenWidth,
                    marginTop : 0.04*screenHeight,
                    alignItems : "center"
                    }} >
                <Text style={[styles.ItemName,{color : "#13DA9C", marginLeft : 0, textDecorationLine : "underline" }]} >RIDES</Text>
                    <IconButton
                        icon="tune"
                        color="#3E4958"
                        size={0.065*screenWidth}
                        style={{
                            position : "absolute",
                            right : 0.05*screenWidth
                        }}
                        onPress={() => {this.setState({showFilter : true})}}
                    />
                </View>
                )}
                        data={data}
                        renderItem={({item}) => (
                           <RideHistoryCards
                               sheduled={item.sheduled}
                               vechicle={item.vechicle}
                               to={item.to}
                               date={item.date}
                               description={item.description}
                               number={item.number}
                               username={item.username}
                               pickuptime={item.pickuptime}
                               from={item.from}
                               price={item.price}
                           />
                        )}


                    />
                </View>

                {
                    this.state.showFilter ? 
                    <View style={{
                        height : "100%",
                        width : "100%",
                        backgroundColor : "rgba(0,0,0,0.5)",
                        position : "absolute",
                        zIndex : 100
                    }} >

                    <View style={styles.Container} >

                        <ScrollView>
                        <Text style={styles.RideText} >Ride</Text>
                        <View style={styles.Dotted} />

                        <View style={{marginTop : 0.01*screenHeight}} >


                        <View style={styles.ItemContainer} > 
                            <Text style={styles.Item} >GoBike</Text>
                            <CheckBox
                                value={this.state.goBike}
                                style={{
                                    position : "absolute",
                                    right : 0.1*screenWidth
                                }}
                                tintColors={true ? "13DA9C" :  null}
                                
                            />
                        </View>


                        <View style={styles.ItemContainer} > 
                            <Text style={styles.Item} >GoRickshaw</Text>
                            <CheckBox
                                value={this.state.GoRickshaw}
                                style={{
                                    position : "absolute",
                                    right : 0.1*screenWidth
                                }}
                                tintColors={true ? "13DA9C" :  null}
                                
                            />
                        </View>


                        <View style={styles.ItemContainer} > 
                            <Text style={styles.Item} >Rental</Text>
                            <CheckBox
                                value={this.state.Rental}
                                style={{
                                    position : "absolute",
                                    right : 0.1*screenWidth
                                }}
                                tintColors={true ? "13DA9C" :  null}
                                
                            />
                        </View>


                        <View style={styles.ItemContainer} > 
                            <Text style={styles.Item} >Golocal</Text>
                            <CheckBox
                                value={this.state.Golocal}
                                style={{
                                    position : "absolute",
                                    right : 0.1*screenWidth
                                }}
                                tintColors={true ? "13DA9C" :  null}
                                
                            />
                        </View>


                        <Text style={[styles.RideText, {marginTop : 0.015*screenHeight,marginBottom : 0.015*screenHeight}]} >Date</Text>

                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="DD-MM-YYYY"
                                    onChangeText={(date) => {this.setState({date : date})}}
                                />

                            <View style={{flexDirection : "row", alignItems : "center", justifyContent : "center"}} >
                                <TouchableOpacity style={styles.Button} onPress={() => {this.setState({
                                    showFilter : false
                                })}} >
                                    <Text style={styles.Item1} >Cancel</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={[styles.Button, {backgroundColor : "#13DA9C"}]} onPress={() => {this.setState({
                                    showFilter : false
                                })}} >
                                    <Text style={[styles.Item1, {fontFamily : "Bold", color : "#fff"}]} >Done</Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                        
                        </ScrollView>

                    </View>
                    </View>
                    :
                    null
                }
            </View>
        )
    }
}

export default RideHistory

const data = [
    {
        "sheduled" : true,
        "vechicle" : "Bike",
        "username" : "Sunil Singh",
        "from" : null,
        "to" : "123, Maha laxmi Vihar",
        "date" : "7 Dec  2020, 11.15",
        "description" : "Details will be shared 15 min before pickup time.",
        "pickuptime" : null,
        "droptime" : null,
        "price" : null,
        "number" : null
    },
    {
        "sheduled" : false,
        "vechicle" : "Bike",
        "username" : "Sunil Singh",
        "from" : "123, Maha laxmi Vihar",
        "to" : "Malviya Nagar",
        "date" : "8 Sep 2019, 18:39",
        "description" : null,
        "pickuptime" : "11:24",
        "droptime" : "11:38",
        "price" : "Rs. 60",
        "number" : "DL-CAT-0518"
    },
    {
        "sheduled" : false,
        "vechicle" : "Rickshaw",
        "username" : "Sunil Singh",
        "from" : "123, Maha laxmi Vihar",
        "to" : "Malviya Nagar",
        "date" : "8 Sep 2019, 18:39",
        "description" : null,
        "pickuptime" : "11:24",
        "droptime" : "11:38",
        "price" : "Rs. 60",
        "number" : "DL-CAT-0518"
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
        alignItems : "center"
    },
    Profile : {
        fontFamily : "Bold",
        marginLeft : 0.05*screenWidth,
        fontSize : 0.045*screenWidth,
        color : "#3E4958"
    },
    ItemName : {
        fontFamily : "Bold",
        marginLeft : 0.05*screenWidth,
        fontSize : 0.045*screenWidth,
        color : "#3E4958"
    },
    Container : {
        height : 0.68*screenHeight,
        width: screenWidth,
        backgroundColor : "#fff",
        position : "absolute",
        bottom : 0,
        borderTopLeftRadius : 50,
        borderTopRightRadius : 50
    },
    RideText : {
        fontFamily : "Bold",
        marginLeft : 0.1*screenWidth,
        fontSize : 0.055*screenWidth,
        color : "#3E4958",
        marginTop : 0.04*screenHeight
    },
    Dotted  : {
        borderWidth: 1,
        borderRadius: 1,
        width : "80%",
        alignSelf : "center",
        marginVertical : 0.02*screenHeight,
        borderColor : "#D5DDE0"
    },
    Item : {
        fontFamily : "Regular",
        fontSize : 0.045*screenWidth,
        color : "#3E4958"
    },
    ItemContainer : {
        flexDirection : "row", 
        alignItems : "center",
        marginLeft : 0.1*screenWidth,
        marginVertical : 0.015*screenHeight
    },
    TextInput : {
        fontFamily : "SemiBold",
        color : "#383A3C",
        fontSize : 0.04*screenWidth,
        height : 0.07*screenHeight,
        backgroundColor : "#FBFBFF",
        width : 0.9*screenWidth,
        alignSelf : "center",
        borderWidth : 1.5,
        borderColor : "#E8E9F9",
        borderRadius : 0.03*screenWidth,
        flexDirection : "row",
        paddingLeft : 0.05*screenWidth,
        marginBottom : 0.02*screenHeight
    },
    Button : {
        height : 0.07*screenHeight,
        width : 0.3*screenWidth,
        backgroundColor : "#F3F5F6",
        alignItems : "center",
        justifyContent : "center",
        marginHorizontal : 0.05*screenWidth,
        borderRadius : 0.03*screenWidth,
        marginVertical : 0.015*screenHeight
    },
    Item1 : {
        fontFamily : "Medium",
        fontSize : 0.045*screenWidth,
        color : "#3E4958"
    },
})