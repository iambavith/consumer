import React from "react"
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_500Medium,
  Poppins_600SemiBold
} from '@expo-google-fonts/poppins';
import { View } from "react-native";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./src/auth/AuthNav";
import StackNav from "./Navigator";

console.disableYellowBox = true

function App(){

  let [fontsLoaded] = useFonts({
    "Regular" : Poppins_400Regular,
    "Bold" : Poppins_700Bold,
    "Medium" : Poppins_500Medium,
    "SemiBold" : Poppins_600SemiBold
  })

  const [user, setUser] = React.useState(true)

  if(!fontsLoaded){
    return <AppLoading/>
  } else {
    return(
      <NavigationContainer>
          {
            user ? 
            <StackNav/>
            :
            <AuthStack/>
          }
      </NavigationContainer>
    )
  }
}

export default App