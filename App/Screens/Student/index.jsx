import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import HeaderComp from "../Header";
import AsyncStorage from '@react-native-community/async-storage';


const Principalscreen = ({ navigation }) => {
  const [name, setName] = useState("");

  AsyncStorage.getItem("user").then((data) => {
    setName(data);
  });



  return (
    <View style={styles.container}>
      <HeaderComp navigation={navigation} />
      <Text style={styles.welcome}>Student screen!</Text>
      <Text style={styles.welcome}>
        <Text>Welcome</Text>
        <Text> {name} </Text>
      </Text>
      <View style={{ marginLeft: -5 }}>
        <View style={{ flexDirection: "row", margin: 10 }}>
          <Text
            style={styles.textstyle}
            onPress={() => navigation.navigate("AttendanceStudent")}
          >
            Attendance
          </Text>
          <Text
            style={styles.textstyle}
            onPress={() => navigation.navigate("View_Profile_Student")}
          >
            View Profile
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
  },
  mycard: {
    marginRight: 30,
    width: "50%",
    padding: 10,
    height: "20%",
    borderRadius: 5,
    shadowColor: "#fff",
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  cardView: {
    flexDirection: "row",
    padding: 5,
  },
  textstyle: {
    width: "50%",
    marginTop: 5,
    marginBottom: 5,
    marginRight: 5,
    fontSize: 20,
    textAlign: "center",
    borderRadius: 5,
    borderColor: "#333",
    borderWidth: 1,
    padding: 8,
  },
});
export default Principalscreen;
