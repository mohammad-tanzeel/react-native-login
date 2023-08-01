// import { View } from "native-base";
import React from "react";
import { Image, View, Text, TextInput, TouchableOpacity } from "react-native";

// import LoginSVG from "../src/assets/images/userLogin.svg";
import { SafeAreaView } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
// import { useNavigate } from "react-router-native";

function LoginFormNew({ navigation }) {
  //   const navigation = useNavigate();
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <View style={{ padding: 10 }}>
        {/* <View style={{ alignItems: "center" }}>
        <Text>Login Screen</Text>
      </View> */}
        <Text
          style={{
            //   fontFamily: "Roboto-Light",
            fontSize: 28,
            fontWeight: "500",
            marginBottom: 30,
          }}
        >
          Registartion
        </Text>
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
          }}
        >
          <MaterialIcons
            name="alternate-email"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          <TextInput
            placeholder="Email Id"
            style={{ backgroundColor: "#ccc", flex: 1, paddingVertical: 0 }}
            keyboardType="email-address"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
          }}
        >
          <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          <TextInput
            placeholder="Password"
            style={{ backgroundColor: "#ccc", flex: 1, paddingVertical: 0 }}
            secureTextEntry={true}
          />
          <TouchableOpacity onPress={() => {}}>
            <Text style={{ color: "#AD40AF", fontWeight: "700" }}>Forgot?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            backgroundColor: "#AD40AF",
            padding: 20,
            borderRadius: 10,
            marginBottom: 30,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "700",
              fontSize: 16,
              color: "#fff",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: 30,
          }}
        >
          Or Login with....
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 30,
          }}
        >
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            <Image
              source={require("../src/assets/images/google-48.png")}
              height={24}
              width={24}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            <Image
              source={require("../src/assets/images/facebook-48.png")}
              height={24}
              width={24}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            <Image
              source={require("../src/assets/images/tweets-48.png")}
              height={24}
              width={24}
            ></Image>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <Text>New to the App? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={{ color: "#AD40AF", fontWeight: "700" }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default LoginFormNew;
