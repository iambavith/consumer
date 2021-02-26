import React from "react"
import {View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, PermissionsAndroid, TextInput, FlatList, CheckBox, ScrollView} from "react-native"
import MapView, { Marker } from 'react-native-maps';
import Icon from "react-native-vector-icons/Feather"
import MIcon from "react-native-vector-icons/MaterialCommunityIcons"
import MapViewDirection from "react-native-maps-directions"
import { IconButton } from "react-native-paper";
import Arrived from "../components/Arrived";

const screenHeight = Dimensions.get("screen").height
const screenWidth = Dimensions.get("screen").width

const GOOGLE_API_KEY = ""


class Rickshaw extends React.Component{

    state = {
        region : {
            latitude: 24.5937,
            longitude: 78.9629,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        LatLng : [
            {
                latitude: 24.5937,
                longitude: 78.9629,
            },
            {
                latitude: 24.5950,
                longitude: 78.9770,
            }
        ],
        Point : {
            x : 505,
            y : 1036
        },
        Location : "24, Ocean avenue",
        SearchLocation : '',
        selectAddress :false,
        address : {
            title : "",
            des : ""
        },
        addressSelected : false,
        selectPayment : false,
        arriving : false,
        bottom : -0.3*screenHeight,
        cancel : false
    }

    _getCurrentLocation = async() => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                const userLocation = navigator.geolocation.watchPosition((position) => {
                    this.setState({
                        region : {
                            latitude : position.coords.latitude,
                            longitude : position.coords.longitude
                        }
                    })
                })
            }
            else {
                alert("Location permission denied")
            }
        }
        catch (err) {
            console.warn(err)
        }
    }

    componentDidMount(){
       //this._getCurrentLocation()
       
    }

    render(){
        return(
            <View style={styles.Root} >

                
                   {
                       this.state.selectAddress ? 
                       null
                       :
                       <View style={styles.Header} >
                       <TouchableOpacity style={styles.MenuButton} onPress={() => {this.props.navigation.openDrawer()}} >
                        <Image source={require("../assets/images/menu.png")} />
                    </TouchableOpacity>

                    <View style={styles.LocationContainer} >
                        <Icon name="circle" size={0.04*screenWidth} color="#20C968" style={{marginLeft : 0.05*screenWidth}} />
                        <Text style={styles.Location} >{this.state.Location}</Text>
                    </View>
                    </View>
                   }

                <MapView style={styles.Map}
                initialRegion={this.state.region}
                onRegionChange={(region) => {this.setState({region : region})}}
                 >
                     <Marker
                         title="marker"
                         icon={require("../assets/images/pointer.png")}
                         coordinate={this.state.LatLng[0]}
                         draggable={true}
                     />
                        <Marker
                         title="marker"
                         icon={require("../assets/images/marker.png")}
                         coordinate={this.state.LatLng[1]}
                         draggable={true}
                     />

                     <MapViewDirection
                         origin={this.state.LatLng[0]}
                         destination={this.state.LatLng[1]}
                         apikey={GOOGLE_API_KEY}
                         strokeWidth={3}
                         strokeColor="#13DA9C"
                         optimizeWaypoints={true}
                         
                     />
                     
                 </MapView>

                 {
                     this.state.selectAddress ? 
                     <View style={{
                         height : "100%",
                         width : "100%",
                         position : "absolute",
                         zIndex : 100
                     }} >

                        <View style={{
                            height : 0.75*screenHeight,
                            width : screenWidth,
                            backgroundColor : "#fff",
                            position : "absolute",
                            bottom : 0,
                            zIndex : 100,
                            borderTopRightRadius : 0.05*screenWidth,
                            borderTopLeftRadius : 0.05*screenWidth
                        }} >

                        <View style={{
                            height : 0.006*screenHeight,
                            width : 0.1*screenWidth,
                            backgroundColor : "#D5DDE0",
                            alignSelf : "center",
                            marginVertical : 0.02*screenHeight,
                            borderRadius : screenHeight
                        }} />

                    <View style={{
                            marginVertical : 0.02*screenHeight,
                            marginLeft : 0.05*screenWidth,
                            width : 0.9*screenWidth,
                            elevation : 5,
                            backgroundColor : "#fff",
                            height : 0.15*screenHeight,
                            justifyContent : "center",
                            borderRadius : 0.04*screenWidth
                        }} >
                        <View style={{flexDirection : "row", alignItems : "center"}} >
                            <MIcon name="checkbox-blank-circle" color="#13DA9C" style={{marginLeft : 0.05*screenWidth}} />
                            <Text style={styles.Text1} >24, Ocean avenue</Text>
                        </View>

                        <View
                            style={{
                                height : 0.025*screenHeight,
                                width : 1,
                                backgroundColor : "#3E4958",
                                marginLeft : 0.06*screenWidth
                            }}
                        />

                        <View style={{flexDirection : "row", alignItems : "center"}} >
                            <MIcon name="menu-down" color="#4B545A" style={{marginLeft : 0.03*screenWidth}} size={0.065*screenWidth} />
                            <Text style={[styles.Text1, {marginLeft : 0.02*screenWidth}]} >Karwal nagar</Text>
                        </View>
                        </View>

                        <TouchableOpacity style={{flexDirection : "row", alignItems : "center"}} >
                            <Image
                                source={require("../assets/images/pointer.png")}
                                style={{
                                    height : 0.03*screenHeight,
                                    width : 0.03*screenHeight,
                                    marginLeft : 0.05*screenWidth,
                                    marginVertical : 0.02*screenHeight
                                }} 
                            />

                        <Text style={[styles.Text1, {marginLeft : 0.02*screenWidth}]} >Show on a map</Text>
                        </TouchableOpacity>

                        <Text style={[styles.Text5, {marginLeft : 0.05*screenWidth, fontFamily : "SemiBold", marginTop : 0.03*screenHeight}]} >RECENT</Text>


                                <View style={{marginTop : 0.02*screenHeight}} >
                                <FlatList
                                    data={data}
                                    renderItem={({item}) => (
                                        <TouchableOpacity style={{
                                            flexDirection : "row",
                                            alignItems : "center",
                                            margin : 0.015*screenHeight,
                                            marginLeft : 0.05*screenWidth
                                        }} onPress={() => {
                                            this.setState({
                                                addressSelected : true,
                                                selectAddress : false
                                        })}} >
                                            <View style={{
                                                height : 0.06*screenHeight,
                                                width : 0.06*screenHeight,
                                                backgroundColor : "#D5DDE0",
                                                alignItems : "center",
                                                justifyContent : "center",
                                                borderRadius : screenHeight
                                            }} >
                                                <MIcon name="map-marker" size={0.065*screenWidth} color="#fff" />
                                            </View>
                                           
                                            <View style={{
                                                marginLeft : 0.05*screenWidth
                                            }} >
                                            <Text style={[styles.Text1, {marginLeft : 0.02*screenWidth}]} >{item.title}</Text>
                                            <Text style={[styles.Text5, {marginLeft : 0.02*screenWidth}]} >{item.des}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    )}
                                />

                                </View>

                        </View>

                     </View>
                     :
                     this.state.addressSelected ? 
                     <View style={[styles.DetailContainer, {height : 0.4*screenHeight}]} >

                        <View style={{
                            height : 0.15*screenHeight,
                            width : 0.9*screenWidth,
                            backgroundColor : "#fff",
                            elevation : 5,
                            margin : 0.05*screenWidth,
                            borderRadius : 0.045*screenWidth
                        }} >
                        <View style={{flexDirection : "row", alignItems : "center"}} >
                        <Image
                            source={require("../assets/images/rickshaw.png")}
                            style={{
                                height : 0.045*screenHeight,
                                width : 0.1*screenWidth,
                                marginLeft : 0.05*screenWidth,
                                marginTop : 0.02*screenHeight
                            }}
                        />
                       <Text style={[styles.Location,{ fontFamily : "SemiBold", fontSize : 0.045*screenWidth, marginTop : 0.025*screenHeight}]} >Go Ride</Text>
                       <Text style={[styles.Location,
                       { fontFamily : "Medium", 
                       fontSize : 0.045*screenWidth, 
                       top : 0.025*screenHeight,
                       textDecorationLine: 'line-through', 
                       textDecorationStyle: 'solid',
                       color : "#3E4958",
                       opacity : 0.5,
                       position : "absolute",
                       right : 0.2*screenWidth
                       }]} 
                       >Rs.480</Text>

                        <Text style={[styles.Location,
                       { fontFamily : "SemiBold", 
                       fontSize : 0.045*screenWidth, 
                       top : 0.025*screenHeight,
                       textDecorationLine: 'line-through', 
                       textDecorationStyle: 'solid',
                       color : "#13DA9C",
                       position : "absolute",
                       right : 0.05*screenWidth
                       }]} 
                       >Rs.280</Text>

                        </View>
                        <View style={{flexDirection : "row", alignItems : "center"}} >
                        <View style={{
                            height : 0.04*screenHeight,
                            width : 0.22*screenWidth,
                            backgroundColor : "#D5DDE0",
                            position : "absolute",
                            right : 0.05*screenWidth,
                            borderRadius : screenWidth,
                            alignItems : "center",
                            justifyContent : "center"
                        }} >
                     <Text style={[styles.Location, {marginTop : 0, marginLeft : 0, fontFamily : "SemiBold", color:"#fff"}]} >3 min</Text>
                        </View>
                        <Text style={[styles.Location, {marginTop : 0.01*screenHeight}]} >Get 20% off your first booking</Text>
                        </View>
                        </View>

                        <View style={{flexDirection : "row", alignItems : "center",marginTop : 0.02*screenHeight, width : screenWidth}} >
                        <Text style={[styles.Location, {}]} >Estimated trip time {"\n"}
                        {
                            <Text style={[styles.Location, {color : "#13DA9C"}]} >24 min</Text>
                        }
                        </Text>

                        
                        <Image
                            source={require("../assets/images/paytm2.png")}
                            style={{
                                height : 0.03*screenHeight,
                                width : 0.2*screenWidth,
                                position : "absolute",
                                right : 0.16*screenWidth
                            }}
                        />
                        <IconButton icon="chevron-down" color="#4B545A"                             
                        style={{
                                height : 0.03*screenHeight,
                                width : 0.2*screenWidth,
                                position : "absolute",
                                right : 0.0*screenWidth
                            }} />
                        </View>

                            <TouchableOpacity style={styles.Button} onPress={() => {
                                this.setState({
                                    selectPayment : true,
                                    addressSelected : false
                                })
                            }} >
                            <Text style={[styles.Location, {color : "#fff", fontFamily : "Bold", marginLeft : 0, fontSize : 0.045*screenWidth}]} >Book Now</Text>
                            </TouchableOpacity>

                     </View>
                     :
                     this.state.selectPayment ? 

                     <ScrollView style={{
                         height : "100%",
                         width : "100%",
                         backgroundColor : "rgba(0,0,0,0.5)",
                         position : "absolute",
                         zIndex : 100
                     }} showsVerticalScrollIndicator={false} > 
                     <View  >


                     <View style={{
                         marginTop : 0.1*screenHeight,
                         height : 0.9*screenHeight,
                         width : screenWidth,
                         backgroundColor : "#fff",
                         borderTopLeftRadius : 0.05*screenWidth,
                         borderTopRightRadius : 0.05*screenWidth
                     }} >


                     <View style={{flexDirection : "row", marginTop : 0.03*screenHeight, alignItems : "center"}} >
                     <Text style={{
                         fontFamily : "SemiBold",
                         fontSize : 0.05*screenWidth,
                         color : "#3E4958",
                         marginLeft : 0.08*screenWidth
                     }} >Select payment</Text>

                     <IconButton icon="close" color="#3E4958" style={{
                         position : "absolute",
                         right : 0.05*screenWidth
                     }} onPress={() => {
                         this.setState({
                             selectPayment : false
                         })
                     }} />

                     </View>

                        <View style={styles.Dash} />

                        <View style={{flexDirection : "row", alignItems : "center"}} >

                        <IconButton
                            icon="credit-card-outline"
                            color="#3E4958"
                            style={{
                                marginLeft : 0.05*screenWidth
                            }}
                            size={0.065*screenWidth}
                        />

                    <Text style={{
                         fontFamily : "Medium",
                         fontSize : 0.05*screenWidth,
                         color : "#3E4958",
                         marginLeft : 0.03*screenWidth
                     }} >GoCredit Balance</Text>

                     <CheckBox
                         value={false}
                         style={{
                             position : "absolute",
                             right : 0.05*screenWidth
                         }}
                     />

                        </View>

                        <View style={styles.Dash} />

                        <Text style={{
                         fontFamily : "SemiBold",
                         fontSize : 0.05*screenWidth,
                         color : "#3E4958",
                         marginLeft : 0.08*screenWidth
                     }} >Coupon Code</Text>

                     <View style={{
                         flexDirection : "row", 
                         alignItems : "center",
                         borderWidth : 2,
                         height : 0.07*screenHeight,
                         width : 0.9*screenWidth,
                         alignSelf : "center",
                         marginVertical : 0.03*screenHeight,
                         borderColor : "#808080",
                         borderStyle : 'dashed',
                         borderRadius: 0.02*screenWidth,
                         }} >

                     <IconButton icon="ticket-outline" color="#909AA8" style={{
                         marginLeft : 0.03*screenWidth
                     }} />

                     <TextInput
                         placeholder="Enter Coupon"
                         style={{
                             fontFamily : "Medium",
                             width : "60%"
                         }}
                     />

                     <Text style={{
                         fontFamily : "Medium",
                         position : "absolute",
                         right : 0.05*screenWidth,
                         fontSize : 0.045*screenWidth,
                         color : "#13DA9C"
                     }} >APPLY</Text>

                     </View>

                     <View style={styles.Dash} />


                     <Text style={{
                         fontFamily : "SemiBold",
                         fontSize : 0.05*screenWidth,
                         color : "#3E4958",
                         marginLeft : 0.08*screenWidth
                     }} >Other Payment Methods</Text>

                        <View style={{flexDirection : "row", alignItems : "center", marginTop : 0.025*screenHeight}} >

                        <Image
                            source={require("../assets/images/cash.png")}
                            style={{
                                height : 0.045*screenHeight,
                                width : 0.045*screenHeight,
                                marginLeft : 0.05*screenWidth
                            }}
                        />

                    <Text style={{
                         fontFamily : "Medium",
                         fontSize : 0.045*screenWidth,
                         color : "#3E4958",
                         marginLeft : 0.1*screenWidth
                     }} >Cash</Text>

                     <CheckBox
                         value={true}
                         style={{
                             position : "absolute",
                             right : 0.08*screenWidth
                         }}
                     />

                        </View>


                        <View style={{flexDirection : "row", alignItems : "center", marginTop : 0.03*screenHeight}} >

                        <Image
                            source={require("../assets/images/paytm2.png")}
                            style={{
                                height : 0.018*screenHeight,
                                width : 0.05*screenHeight,
                                marginLeft : 0.05*screenWidth
                            }}
                        />

                    <Text style={{
                         fontFamily : "Medium",
                         fontSize : 0.045*screenWidth,
                         color : "#3E4958",
                         marginLeft : 0.1*screenWidth
                     }} >PayTM</Text>

                     <CheckBox
                         value={false}
                         style={{
                             position : "absolute",
                             right : 0.08*screenWidth
                         }}
                     />

                        </View>


                        <View style={{flexDirection : "row", alignItems : "center", marginTop : 0.03*screenHeight}} >

                        <Image
                            source={require("../assets/images/freechange.png")}
                            style={{
                                height : 0.045*screenHeight,
                                width : 0.045*screenHeight,
                                marginLeft : 0.05*screenWidth
                            }}
                        />

                    <Text style={{
                         fontFamily : "Medium",
                         fontSize : 0.045*screenWidth,
                         color : "#3E4958",
                         marginLeft : 0.1*screenWidth
                     }} >Freechange</Text>

                     <CheckBox
                         value={false}
                         style={{
                             position : "absolute",
                             right : 0.08*screenWidth
                         }}
                     />

                        </View>

                        <View style={styles.Dash} />

                         <TouchableOpacity style={styles.Button} onPress={() => {
                             this.setState({
                                 addressSelected : false,
                                 arriving : true,
                                 selectPayment : false
                             })
                         }} >
                         <Text style={{
                         fontFamily : "Bold",
                         fontSize : 0.045*screenWidth,
                         color : "#fff",
                     }} >Confirm</Text>
                         </TouchableOpacity>

                     </View>


                     </View>

                     </ScrollView>

                     :
                     
                     this.state.arriving ? 
                     <View style={{
                     }} >

                     <View style={{
                         height : 0.7*screenHeight,
                         width : screenWidth,
                         backgroundColor : "#fff",
                         position : "absolute",
                         bottom : this.state.bottom,
                         borderTopLeftRadius : 0.05*screenWidth,
                         borderTopRightRadius : 0.05*screenWidth,
                     }} >

                        <View   
                        
                        style={{
                                top : -0.05*screenHeight,
                                position : "absolute",
                                left : 0.06*screenWidth,
                                backgroundColor : "#fff",
                                height : 0.11*screenHeight,
                                width : 0.11*screenHeight,
                                alignItems : "center",
                                justifyContent : "center",
                                borderRadius : screenHeight
                            }} >
                        <Image
                            source={require("../assets/images/avatar.png")}

                        />
                        </View>

                        <TouchableOpacity   
                        
                        style={{
                                top : -0.05*screenHeight,
                                position : "absolute",
                                right : 0.06*screenWidth,
                                backgroundColor : "#fff",
                                height : 0.08*screenHeight,
                                width : 0.08*screenHeight,
                                alignItems : "center",
                                justifyContent : "center",
                                borderRadius : screenHeight,
                                elevation : 10
                            }} >

                               <MIcon name="phone-in-talk" size={0.035*screenHeight} color="#13DA9C" />

                        </TouchableOpacity>

                        <TouchableOpacity style={{
                         height : 4,
                         width : 0.1*screenWidth,
                         backgroundColor : "#D5DDE0",
                         position : "absolute",
                         zIndex : 100,
                         alignSelf : "center",
                         top : 0.01*screenHeight,
                         borderRadius : screenHeight
                     }} onPress={() => {this.setState({
                         bottom : 0.05*screenHeight
                     })}} />

                        <View style={{flexDirection : "row", alignItems : "center", marginTop : 0.08*screenHeight, width : screenWidth}} >

                            <View style={{
                                marginLeft : 0.05*screenWidth
                            }} >
                            <Text style={{
                                fontFamily : "SemiBold",
                                fontSize : 0.05*screenWidth
                            }} >Sunil Singh</Text>

                                <View style={{
                                    flexDirection : "row"
                                }} >

                                <MIcon name="star" size={0.05*screenWidth} color="#F1C233" />
                                <MIcon name="star" size={0.05*screenWidth} color="#F1C233" />
                                <MIcon name="star" size={0.05*screenWidth} color="#F1C233" />
                                <MIcon name="star" size={0.05*screenWidth} color="#F1C233" />
                                <Text style={{
                                fontFamily : "Medium",
                                fontSize : 0.045*screenWidth,
                                marginLeft : 0.03*screenWidth
                            }} >4.0</Text>
                                </View>

                            </View>


                            <View style={{
                                right : 0.05*screenWidth,
                                position : "absolute"
                            }} >
                            <Text style={{
                                fontFamily : "SemiBold",
                                fontSize : 0.05*screenWidth
                            }} >DL-CAT-0518</Text>

                            <Text style={{
                                fontFamily : "Medium",
                                fontSize : 0.04*screenWidth,
                                textAlign : "right",
                                color : "#3E4958"
                            }} >Hero Honda</Text>

                            </View>
                        </View>

                        <View style={{
                            flexDirection : "row",
                            alignItems : "center",
                            marginTop : 0.04*screenHeight
                        }} >

                        <TouchableOpacity style={{
                            padding : 10,
                            backgroundColor : "#F3F5F6",
                            marginLeft : 0.03*screenWidth,
                            borderRadius : 0.02*screenWidth
                        }} onPress={() => {
                            this.setState({
                                arriving : false,
                                cancel : true
                            })
                        }} >
                      <Text style={{
                                fontFamily : "Medium",
                                fontSize : 0.04*screenWidth,
                                textAlign : "right",
                                color : "#3E4958"
                            }} >Cancel Ride</Text>
                        </TouchableOpacity>

                        <Text style={{
                                fontFamily : "Medium",
                                fontSize : 0.04*screenWidth,
                                textAlign : "right",
                                color : "#3E4958",
                                position : "absolute",
                                right : 0.05*screenWidth
                            }} >Estimated Charges   Rs 55.00</Text>

                        </View>


                        <View style={{
                            flexDirection : "row",
                            alignItems : "center",
                            marginTop : 0.04*screenHeight
                        }} >

                                <Text style={{
                                fontFamily : "Medium",
                                fontSize : 0.04*screenWidth,
                                textAlign : "left",
                                color : "#3E4958",
                                marginLeft : 0.05*screenWidth
                            }} >You ride is insured {"\n"}Insurance powered By Acko</Text>

                        <Text style={{
                                fontFamily : "Medium",
                                fontSize : 0.07*screenWidth,
                                textAlign : "right",
                                color : "#3B3D78",
                                position : "absolute",
                                right : 0.05*screenWidth
                            }} >PIN: 8765</Text>

                        </View>

                        <View>
                        </View>

                        <View style={{flexDirection : "row", alignItems : "flex-start", marginLeft : 0.05*screenWidth, marginTop : 0.03*screenHeight}} >
                            <Text style={styles.Text5} >11:24</Text>
                            <MIcon name="checkbox-blank-circle" color="#13DA9C" style={{marginLeft : 0.05*screenWidth, marginTop : 0.005*screenHeight}} />
                            <View>
                            <Text style={styles.Text1} >Pick-up point</Text>
                            <Text style={styles.Text1} >1, Thrale Street, London, {"\n"}SE19HW, UK</Text>
                            </View>
                        </View>

                        <View style={{
                            height : 0.11*screenHeight,
                            width : 3,
                            backgroundColor : "#3E4958",
                            marginLeft : 0.175*screenWidth,
                            top : -0.06*screenHeight
                        }} />

                    <View style={{flexDirection : "row", alignItems : "flex-start", marginLeft : 0.05*screenWidth, marginTop : -0.05*screenHeight}} >
                            <Text style={styles.Text5} >11:24</Text>
                            <MIcon name="menu-down" color="#4B545A" style={{marginLeft : 0.03*screenWidth}} size={0.065*screenWidth} />
                            <View>
                            <Text style={styles.Text1} >Drop point</Text>
                            <Text style={styles.Text1} >Ealing Broadway Shopping {"\n"}Centre, London, W55JY, UK</Text>
                            </View>
                        </View>

                        <View style={{flexDirection : "row", alignItems : "center",marginTop : 0.02*screenHeight, width : screenWidth}} >
                        <Text style={[styles.Location, {}]} >Estimated trip time {"\n"}
                        {
                            <Text style={[styles.Location, {color : "#13DA9C"}]} >24 min</Text>
                        }
                        </Text>
                        <Image
                            source={require("../assets/images/paytm2.png")}
                            style={{
                                height : 0.03*screenHeight,
                                width : 0.2*screenWidth,
                                position : "absolute",
                                right : 0.1*screenWidth
                            }}
                        />
                        <IconButton icon="chevron-down" color="#4B545A"                             
                        style={{
                                height : 0.03*screenHeight,
                                width : 0.2*screenWidth,
                                position : "absolute",
                                right : -0.06*screenWidth
                            }} />
                        </View>

                     </View>

                     </View>
                     :
                     <View style={styles.DetailContainer} >

                 <TouchableOpacity style={[styles.Crosshairs, {zIndex : -100}]} >
                     <MIcon name="crosshairs-gps" size={0.065*screenWidth} color="#3E4958" />
                 </TouchableOpacity>

                    <View style={styles.SearchBar} >
                        <MIcon name="magnify" size={0.06*screenWidth} color="#3B3D78" style={{marginLeft : 0.04*screenWidth}} />
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Search Drop location"
                            placeholderTextColor="#383A3C"
                            onChangeText = {(location) => {this.setState({SearchLocation : location})}}
                            value={this.state.SearchLocation}
                        />
                    </View>

                    <View style={styles.LocationSugg} >
                        <TouchableOpacity style={styles.LocationSugg} onPress={() => {this.setState({
                            selectAddress : true
                        })}} >
                                <View style={styles.IconContainer} >
                                    <MIcon name="map-marker" size={0.065*screenWidth} color="#fff" />
                                </View>
                                <View>
                                <Text style={styles.Location} >Kings Cross Underground Statio...</Text>
                                <Text style={styles.LocationName} >New York</Text>
                                </View>
                        </TouchableOpacity>
                    </View>

                   

                 </View>
                 }


                 {
                     this.state.cancel ? 
                     <View style={{
                         height : "100%",
                         width : "100%",
                         backgroundColor : "rgba(0,0,0,0.5)",
                         position : "absolute",
                         zIndex : 200
                     }} >

                        <View style={[styles.DetailContainer, {height : 0.4*screenHeight}]} >

                            <Text style={{
                                fontFamily : "Medium",
                                fontSize : 0.04*screenWidth,
                                alignSelf : "center",
                                marginTop : 0.03*screenHeight,
                                textAlign : "center"
                            }} >
                            Are you sure you want to cancel {"\n"}this services?
                            </Text>

                            <Text style={{
                                fontFamily : "Medium",
                                fontSize : 0.04*screenWidth,
                                alignSelf : "center",
                                marginTop : 0.03*screenHeight,
                                textAlign : "center"
                            }} >
                           Cancellation charges
                            </Text>

                            <Text style={{
                                fontFamily : "SemiBold",
                                fontSize : 0.08*screenWidth,
                                alignSelf : "center",
                                marginTop : 0.03*screenHeight,
                                textAlign : "center"
                            }} >
                          Rs 6
                            </Text>

                            <View style={{
                                flexDirection : "row",
                                alignItems : "center",
                                justifyContent : "center"
                            }} >

                            <TouchableOpacity style={[styles.Button, {width : 0.35*screenWidth, backgroundColor: "#F3F5F6"}]}
                            onPress={() => {
                                this.setState({
                                    cancel : false
                                })
                            }}
                             >
                            <Text style={{
                                fontFamily : "SemiBold",
                                fontSize : 0.04*screenWidth,
                            }} >
                           No
                            </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.Button, {width : 0.35*screenWidth}]} onPress={() => {
                                this.props.navigation.push("CancelRide")
                            }} >
                            <Text style={{
                                fontFamily : "SemiBold",
                                fontSize : 0.04*screenWidth,
                                color : "#fff"
                            }} >
                           Yes
                            </Text>
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

export default Rickshaw

const data = [
    {
        "title" : "Kings Cross Underground Statio...",
        "des" : "New York"
    },
    {
        "title" : "83, Midwood St",
        "des" : "New York"
    }
]


const styles = StyleSheet.create({
    Root : {
        flex : 1,
        backgroundColor : "#fff"
    },
    Map : {
        height : screenHeight,
        width : screenWidth,
    },
    Header : {
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "center",
        position : "absolute",
        zIndex: 100,
        marginTop : 0.06*screenHeight,
        marginLeft : 0.06*screenWidth
    },
    MenuButton : {
        height : 0.055*screenHeight,
        width : 0.055*screenHeight,
        backgroundColor : "#fff",
        borderRadius : screenWidth,
        elevation : 15,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 7,
        },
        shadowOpacity: 0.15,
        shadowRadius: 9.51,
        alignItems : "center",
        justifyContent : "center"
    },
    LocationContainer : {
        flexDirection : "row",
        height : 0.055*screenHeight,
        width : 0.7*screenWidth,
        backgroundColor : "#fff",
        borderRadius : screenWidth,
        elevation : 15,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 7,
        },
        shadowOpacity: 0.15,
        shadowRadius: 9.51,
        alignItems : "center",
        justifyContent : "flex-start",
        marginLeft : 0.05*screenWidth
    },
    Location : {
        fontFamily : "Medium",
        fontSize : 0.04*screenWidth,
        marginLeft : 0.05*screenWidth,
        color : "#3E4958"
    },
    DetailContainer : {
        height : 0.28*screenHeight,
        width : screenWidth,
        backgroundColor : "#fff",
        position : "absolute",
        zIndex: 100,
        bottom : 0,
        borderTopRightRadius : 20,
        borderTopLeftRadius : 20
    },
    SearchBar : {
        height : 0.06*screenHeight,
        backgroundColor : "#FBFBFF",
        width : 0.9*screenWidth,
        alignSelf : "center",
        borderWidth : 1.5,
        borderColor : "#E8E9F9",
        borderRadius : screenWidth,
        marginTop : 0.05*screenHeight,
        flexDirection : "row",
        alignItems : "center"
    },
    TextInput : {
        fontFamily : "Medium",
        color : "#383A3C",
        fontSize : 0.04*screenWidth,
        width : 0.65*screenWidth,
        marginLeft : 0.05*screenWidth
    },
    LocationSugg : {
        flexDirection : "row",
        marginTop : 0.02*screenHeight,
        alignItems : "center"
    },
    IconContainer : {
        height : 0.07*screenHeight, 
        width : 0.07*screenHeight, 
        backgroundColor : "#D5DDE0",
        borderRadius : screenHeight,
        marginLeft : 0.05*screenWidth,
        alignItems : "center",
        justifyContent : "center"
    },
    LocationName : {
        fontFamily : "Regular",
        fontSize : 0.04*screenWidth,
        marginLeft : 0.05*screenWidth,
        color : "#97ADB6"
    },
    Nav : {
        flexDirection : "row",
        marginTop : 0.03*screenHeight,
        alignItems : "center",
        justifyContent : "center",
        width : screenWidth,
        height : 0.08*screenHeight
    },
    Image : {
        margin : 0.08*screenWidth
    },
    Crosshairs : {
        position : "absolute",
        height : 0.07*screenHeight,
        width : 0.07*screenHeight,
        backgroundColor : "#fff",
        bottom : 0.32*screenHeight,
        right : 0.05*screenWidth,
        borderRadius : screenWidth,
        elevation : 12,
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 7,
            },
        shadowOpacity: 0.15,
        shadowRadius: 9.51,
        alignItems : "center",
        justifyContent : "center",
        zIndex : -100
    },
    Text5 : {
        fontFamily : "Regular", 
        fontSize : 0.04*screenWidth,
        color : "#97ADB6"
    },
    Text1 : {
        fontFamily : "Regular",
        fontSize : 0.045*screenWidth,
        color : "#383A3C",
        marginLeft : 0.04*screenWidth
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
        alignSelf : "center"
    },
    Dash : {
        height: 2,
        width : screenWidth,
        backgroundColor : "#D5DDE0",
        opacity : 0.5,
        marginVertical : 0.02*screenHeight
    }
})