import React from "react";
import { Button, View, Text } from "react-native";
import SizedBox from "./SizedBox";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen1</Text>
      <SizedBox height={16} />

      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
      <SizedBox height={16} />

      <Button
        title="Go to Login"
        onPress={() => navigation.navigate("Login")}
      />
      <SizedBox height={16} />

      <Button
        title="Go to Upload"
        onPress={() => navigation.navigate("Upload")}
      />
    </View>
  );
}
