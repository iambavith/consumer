import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import Mainscreen from "./src/Mainscreen"
import {createDrawerNavigator} from "@react-navigation/drawer"
import DrawerContents from "./DrawerContents"
import { Dimensions, Image } from "react-native"
import Profile from "./src/Profile"
import RideHistory from "./src/RidesHistory"
import Payments from "./src/Payments"
import AddPayment from "./src/AddPayment"
import AddNewCard from "./src/AddNewCard"
import VerifyCode from "./src/VerifyCode"
import Pass from "./src/Pass"
import PassDetail from "./src/PassDetail"
import Notifications from "./src/Notifications"
import Insaurance from "./src/Insaurance"
import EmergencyContacts from "./src/EmergencyContacts"
import AddNewContact from "./src/AddNewContact"
import InviteFriends from "./src/InviteFriends"
import Help from "./src/Help"
import Legal from "./src/Legal"
import FAQ from "./src/FAQ"
import FAQDetail from "./src/FAQDetail"
import About from "./src/About"
import Chat from "./src/Chat"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import SignUp from "./src/auth/SignUp"
import Rickshaw from "./src/Rickshaw"
import Rental from "./src/Rental"
import Golocal from "./src/Golocal"
import CancelRide from "./src/CancelRide"
import RideCompleted from "./src/RideCompleted"
import Review from "./src/Review"
import PackageDetails from "./src/PackageDetails"
import PickImage from "./src/PickImage"
import GoLocalAlt from "./src/GolocalAlt"

const Stack = createStackNavigator()

const Drawer = createDrawerNavigator()

const screenHeight = Dimensions.get("screen").height
const screenWidth = Dimensions.get("screen").width

class DrawerNavigator extends React.Component{
    render(){
        return(
            <Drawer.Navigator
                drawerContent={(props) =>  <DrawerContents {...props} />}
                drawerStyle={{
                    borderBottomRightRadius : 0.04*screenWidth,
                    borderTopRightRadius : 0.04*screenWidth,
                    overflow : "hidden",
                    width : 0.8*screenWidth
                }}
            >
                <Drawer.Screen
                    name="Tab"
                    component={BottomTab}
                />

            </Drawer.Navigator>
        )
    }
}

class StackNav extends React.Component{
    render() {
        return (
             <Stack.Navigator
                screenOptions={{
                    headerShown : false
                }}
             >
             
                <Stack.Screen
                     name="Drawer"
                     component={DrawerNavigator}
                 />

                 <Stack.Screen
                     name="Home"
                     component={Mainscreen}
                 />

                    <Stack.Screen
                     name="Profile"
                     component={Profile}
                 />

                 <Stack.Screen
                     name="RideHistory"
                     component={RideHistory}
                 />

                 <Stack.Screen
                     name="Payments"
                     component={Payments}
                 />

                 <Stack.Screen
                     name="AddPayment"
                     component={AddPayment}
                 />

                <Stack.Screen
                     name="AddNewCard"
                     component={AddNewCard}
                 />

                <Stack.Screen
                     name="VerifyCode"
                     component={VerifyCode}
                 />

                <Stack.Screen
                     name="Pass"
                     component={Pass}
                 />

                <Stack.Screen
                     name="PassDetail"
                     component={PassDetail}
                 />

                  <Stack.Screen
                     name="Notifications"
                     component={Notifications}
                 />

                 <Stack.Screen
                     name="Insaurance"
                     component={Insaurance}
                 />

                 <Stack.Screen
                     name="EmergencyContacts"
                     component={EmergencyContacts}
                 />

                 <Stack.Screen
                     name="AddNewContact"
                     component={AddNewContact}
                 />

                 <Stack.Screen
                     name="InviteFriends"
                     component={InviteFriends}
                 />

                 <Stack.Screen
                     name="Help"
                     component={Help}
                 />

                 <Stack.Screen
                     name="Legal"
                     component={Legal}
                 />

                <Stack.Screen
                     name="FAQ"
                     component={FAQ}
                 />

                 <Stack.Screen
                     name="FAQDetail"
                     component={FAQDetail}
                 />

                <Stack.Screen
                     name="About"
                     component={About}
                 />

                 <Stack.Screen
                     name="Chat"
                     component={Chat}
                 />

                 <Stack.Screen
                     name="CancelRide"
                     component={CancelRide}
                 />

                 <Stack.Screen
                     name="RideCompleted"
                     component={RideCompleted}
                 />

                 <Stack.Screen
                     name="Review"
                     component={Review}
                 />

                 <Stack.Screen
                     name="PackageDetails"
                     component={PackageDetails}
                 />

                 <Stack.Screen
                     name="PickImage"
                     component={PickImage}
                 />

                 <Stack.Screen
                     name="GoLocal"
                     component={GoLocalAlt}
                 />
                 
             </Stack.Navigator>
        );
    }
}

const Tab = createBottomTabNavigator()


class BottomTab extends React.Component{
    render(){
        return(
            <Tab.Navigator 
                tabBarOptions={{
                    showLabel : false
                }}
             >
                <Tab.Screen
                    name="Main"
                    component={Mainscreen}
                    options={{
                       tabBarIcon : ({focused}) => (
                           focused ? <Image
                            source={require("./assets/images/Icons/bike-fill.png")}
                            style={{
                                height : 0.045*screenHeight,
                                width : 0.045*screenHeight
                            }}
                           />
                           :
                           <Image
                           source={require("./assets/images/Icons/bike-outline.png")}
                           style={{
                                height : 0.035*screenHeight,
                                width : 0.035*screenHeight
                            }}
                           />
                       )
                   }}
                />

              
                    
                    <Tab.Screen
                    name="Rental"
                    component={Rental}

                    options={{
                       tabBarIcon : ({focused}) => (
                           focused ? <Image
                            source={require("./assets/images/Icons/rentel-fill.png")}
                            style={{
                                height : 0.03*screenHeight,
                                width : 0.03*screenHeight
                            }}
                           />
                           :
                           <Image
                           source={require("./assets/images/Icons/rentel-outline.png")}
                           style={{
                                height : 0.03*screenHeight,
                                width : 0.03*screenHeight
                            }}
                           />
                       )
                   }}
                />
                    
                    <Tab.Screen
                    name="Golocal"
                    component={Golocal}
                    options={{
                       tabBarIcon : ({focused}) => (
                           focused ? <Image
                            source={require("./assets/images/Icons/golocal-fill.png")}
                            style={{
                                height : 0.03*screenHeight,
                                width : 0.03*screenHeight
                            }}
                           />
                           :
                           <Image
                           source={require("./assets/images/Icons/golocal-outline.png")}
                           style={{
                                height : 0.03*screenHeight,
                                width : 0.03*screenHeight
                            }}
                           />
                       )
                   }}
                />
                
                  <Tab.Screen
                    name="Rickshaw"
                    component={Rickshaw}
                   options={{
                       tabBarIcon : ({focused}) => (
                           focused ? <Image
                            source={require("./assets/images/Icons/auto-fill.png")}
                            style={{
                                height : 0.03*screenHeight,
                                width : 0.03*screenHeight
                            }}
                           />
                           :
                           <Image
                           source={require("./assets/images/Icons/auto-outline.png")}
                           style={{
                                height : 0.03*screenHeight,
                                width : 0.03*screenHeight
                            }}
                           />
                       )
                   }}
                />
            </Tab.Navigator>
        )
    }
}


export default StackNav