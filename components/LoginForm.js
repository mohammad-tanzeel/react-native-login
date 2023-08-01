import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  // AsyncStorage,
} from "react-native";
// Modules
import { Controller, useForm } from "react-hook-form";
// Components
import SizedBox from "./SizedBox";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_BASE_URL } from "@env";

function useStyles() {
  return StyleSheet.create({
    button: {
      alignItems: "center",
      backgroundColor: "rgb(93, 95, 222)",
      borderRadius: 8,
      height: 48,
      justifyContent: "center",
    },
    buttonTitle: {
      color: "#FFFFFF",
      fontSize: 17,
      fontWeight: "600",
      lineHeight: 22,
    },
    content: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 16,
      paddingVertical: 32,
    },
    forgotPasswordContainer: {
      alignItems: "flex-end",
    },
    form: {
      alignItems: "center",
      backgroundColor: "rgb(58, 58, 60)",
      borderRadius: 8,
      flexDirection: "row",
      height: 48,
      paddingHorizontal: 16,
    },
    label: {
      color: "rgba(235, 235, 245, 0.6)",
      fontSize: 15,
      fontWeight: "400",
      lineHeight: 20,
      width: 80,
    },
    root: {
      backgroundColor: "#000000",
      flex: 1,
    },
    safeAreaView: {
      flex: 1,
    },
    subtitle: {
      color: "rgba(235, 235, 245, 0.6)",
      fontSize: 17,
      fontWeight: "400",
      lineHeight: 22,
    },
    textButton: {
      color: "#FFFFFF",
      fontSize: 15,
      fontWeight: "400",
      lineHeight: 20,
    },
    textInput: {
      color: "#FFFFFF",
      flex: 1,
    },
    title: {
      color: "#FFFFFF",
      fontSize: 28,
      fontWeight: "700",
      lineHeight: 34,
    },
    sampleBox: {
      alignItems: "center",
      backgroundColor: "#ffff",
      borderRadius: 8,
      flexDirection: "row",
      height: 48,
      paddingHorizontal: 16,
      marginBottom: 20,
    },
  });
}

function LoginForm({ navigation }) {
  // const emailInput = React.useRef(null);
  // const passwordInput = useRef(null);
  // const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async () => {
    try {
      const apiURL = API_BASE_URL + "/user/login";
      Alert.alert(
        "Data1",
        `URL: ${apiURL}\nEmail: ${email}\nPassword: ${password}`
      );

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: email, password: password }),
      };
      console.log("requestOptions", requestOptions);
      const response = await fetch(apiURL, requestOptions);
      const data = await response.json();
      // localStorage.setItem("accessToken", data.token);
      // console.log(localStorage.getItem("accessToken"));
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem("userData", jsonValue);
      const value = await AsyncStorage.getItem("userData");
      console.log("localstorage", value);
      navigation.navigate("Dashboard");
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
    // Alert.alert("Data", `Email: ${email}\nPassword: ${password}`);
  };

  const styles = useStyles();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.root}>
        <SafeAreaView style={styles.safeAreaView}>
          <TouchableOpacity
            onPress={() => {
              console.log("text clicked");
            }}
          >
            <Text style={{ color: "#fff" }}>clickme12</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Welcome back!</Text>

          <SizedBox height={8} />

          <Text style={styles.subtitle}>Sign in to your account</Text>

          <SizedBox height={32} />
          {/* <TextInput
              style={styles.sampleBox}
              placeholder="Enter Name"
              onChangeText={(text) => setText(text)}
              value={text}
            /> */}
          <Pressable onPress={() => email.current?.focus()}>
            <View style={styles.form}>
              <Text style={styles.label}>Email</Text>

              <Controller
                control={control}
                name="email"
                render={({ onBlur }) => (
                  <TextInput
                    autoCapitalize="none"
                    autoCompleteType="email"
                    autoCorrect={false}
                    keyboardType="email-address"
                    onBlur={onBlur}
                    onChangeText={(email) => setEmail(email)}
                    value={email}
                    // onSubmitEditing={() => passwordInput.current?.focus()}
                    // ref={emailInput}
                    returnKeyType="next"
                    style={styles.textInput}
                    textContentType="username"
                    // value={value}
                  />
                )}
              />
            </View>
          </Pressable>

          <SizedBox height={16} />

          <Pressable onPress={() => passwordInput.current?.focus()}>
            <View style={styles.form}>
              <Text style={styles.label}>Password</Text>

              <Controller
                control={control}
                name="password"
                render={({ onBlur, onChange, value }) => (
                  <TextInput
                    autoCapitalize="none"
                    autoCompleteType="password"
                    autoCorrect={false}
                    onBlur={onBlur}
                    onChangeText={(password) => setPassword(password)}
                    onSubmitEditing={onSubmit}
                    // ref={passwordInput}
                    returnKeyType="done"
                    secureTextEntry
                    style={styles.textInput}
                    textContentType="password"
                    value={password}
                  />
                )}
              />
            </View>
          </Pressable>

          <SizedBox height={16} />

          <View style={styles.forgotPasswordContainer}>
            <Text style={styles.textButton}>Forgot password?</Text>
          </View>

          <SizedBox height={16} />

          <TouchableOpacity onPress={handleSubmit(onSubmit)}>
            <View style={styles.button}>
              <Text style={styles.buttonTitle}>Continue</Text>
            </View>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default LoginForm;
