import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Body, Header, Icon, Left, Right, Button, Card } from "native-base";
//import { Card } from 'react-native-paper';
import HeaderComp from "../Header";
const Teacherscreen = ({ navigation }) => {
  const [name, setName] = useState("");



  return (
    <View style={styles.container}>
      <HeaderComp navigation={navigation} />
      <View style={styles.content}>
        <Text style={styles.welcome}>Teacher screen!</Text>
        <Text style={styles.welcome}>
          <Text>Welcome</Text>
          <Text> {name} </Text>
        </Text>

        <View style={{ flexDirection: "row", margin: 10 }}>
          <Text
            style={styles.textstyle}
            onPress={() => navigation.navigate("Genrate_QR_Teacher")}
          >
            <Icon
              name="qr-scanner"
              ios="ios-qr-scanner"
              android="md-qr-scanner"
              style={{ fontSize: 30 }}
            />
            &nbsp;&nbsp; Generate QR
          </Text>

          <Text
            style={styles.textstyle}
            onPress={() => navigation.navigate("View_Student_Teacher")}
          >
            <Icon
              name="paper"
              ios="ios-paper"
              android="md-paper"
              style={{ fontSize: 30 }}
            />
            &nbsp;&nbsp; View Students
          </Text>
        </View>

        <View style={{ flexDirection: "row", margin: 10 }}>
          <Text
            style={styles.textstyle}
            onPress={() => navigation.navigate("View_Teacher_qr")}
          >
            <Icon
              name="qr-scanner"
              ios="ios-qr-scanner"
              android="md-qr-scanner"
              style={{ fontSize: 30 }}
            />
            &nbsp;&nbsp; View QR
          </Text>

          <Text
            style={styles.textstyle}
            onPress={() => navigation.navigate("Teacher_profile")}
          >
            <Icon
              name="paper"
              ios="ios-paper"
              android="md-paper"
              style={{ fontSize: 30 }}
            />
            &nbsp;&nbsp; View Profile
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

  content: {
    flex: 1,

    backgroundColor: "#F5FCFF",
  },
  cardView: {
    flexDirection: "row",
    padding: 5,
  },
  textstyle: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    borderRadius: 5,
    borderColor: "#333",
    borderWidth: 1,
    padding: "2%",
  },
});
export default Teacherscreen;
