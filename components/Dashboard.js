import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ScrollView, Image, Alert } from "react-native";
import { API_BASE_URL } from "@env";

function Dashboard(props) {
  const [data, setData] = useState([]);
  const base64Image =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=";
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    Alert.alert(API_BASE_URL + "/plans");
    const resp = await fetch(API_BASE_URL + "/plans");
    const data = await resp.json();
    console.log(data);
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 50,
    },
    item: {
      padding: 20,
      fontSize: 15,
      marginTop: 5,
    },
  });
  return (
    <View style={styles.container}>
      <Text></Text>
      <Text>Plan List</Text>

      <ScrollView>
        <View>
          {data.map((p) => {
            return (
              <View>
                <Text style={styles.item}>{p.name}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

export default Dashboard;
