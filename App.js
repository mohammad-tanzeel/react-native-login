import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/Homescreen";
import AboutScreen from "./components/Aboutscreen";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import { logger } from "react-native-logs";
import UploadScreen from "./components/UploadScreen";
import LoginFormNew from "./components/LoginFormNew";
import { NativeBaseProvider } from "native-base";
import RegisterScreen from "./components/RegisterScreen";
import { KeyboardAvoidingView } from "react-native";

const log = logger.createLogger();
const Stack = createNativeStackNavigator();

export default function App() {
  log.info("This is some test information");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.content}
    >
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="LoginNew">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
            <Stack.Screen name="Login" component={LoginForm} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Upload" component={UploadScreen} />
            <Stack.Screen name="LoginNew" component={LoginFormNew} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// import * as React from "react";
// import { View, Text } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import HomeScreen from "./components/Homescreen";
// import AboutScreen from "./Component/AboutScreen";

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="About" component={AboutScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
