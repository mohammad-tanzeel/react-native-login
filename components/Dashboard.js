import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

function Dashboard(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    const resp = await fetch("http://10.245.54.17:4000/plans");
    const data = await resp.json();
    // console.log(data);
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
