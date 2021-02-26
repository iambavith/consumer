import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import SignUp from "../auth/SignUp"
import Welcome from "./Welcome"
import Login from "./Login"
import GetOtp from "./GetOtp"
import Register from "./Register"
import StackNav from "../../Navigator"

const Stack = createStackNavigator()

class AuthStack extends React.Component{
    render(){
        return(
            <Stack.Navigator
                   screenOptions={{
                    headerShown : false
                }}
            >

                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                />

                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                />

                <Stack.Screen
                    name="LogIn"
                    component={Login}
                />

                <Stack.Screen
                    name="GetOtp"
                    component={GetOtp}
                />

                <Stack.Screen
                    name="Register"
                    component={Register}
                />

                <Stack.Screen
                    name="Main"
                    component={StackNav}
                />

            </Stack.Navigator>
        )
    }
}

export default AuthStack