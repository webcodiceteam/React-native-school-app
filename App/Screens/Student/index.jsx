import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  AsyncStorage,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import { Body, Header, Icon, Left, Right, Text, Card } from "native-base";
import { Button } from "react-native-paper";
import HeaderComp from "../Header";

const Studentscreen = ({ navigation }) => {
  const [name, setName] = useState("");

  AsyncStorage.getItem("user").then((data) => {
    setName(data);
  });

  useEffect(() => {
    if (name == null) {
      // Actions.login();
    }
  }, []);

  return (
    <View style={styles.container}>
      <HeaderComp navigation={navigation} />
      <View style={styles.content}>
        <Text style={styles.welcome}>Student Qrscanner screen!</Text>
        <Text style={styles.welcome}>
          <Text>Welcome</Text>
          <Text> {name} </Text>
        </Text>
        <Text>Student Screen</Text>

        <Button mode="contained" theme={mytheme}>
          View Profile
        </Button>
        <View style={{ flexDirection: "row", flex: 1, marginRight: 50 }}>
          <Card style={styles.mycard}>
            <TouchableOpacity onPress={() => navigation.navigate("QR_Scan")}>
              <View style={styles.cardView}>
                <Icon
                  name="qr-scanner"
                  ios="ios-qr-scanner"
                  android="md-qr-scanner"
                  style={{ fontSize: 30 }}
                />
                <Text style={styles.welcome}> Qr Scan</Text>
              </View>
            </TouchableOpacity>
          </Card>
          <Card style={styles.mycard}>
            <TouchableOpacity
              onPress={() => navigation.navigate("View_Profile_Student")}
            >
              <View style={styles.cardView}>
                <Icon
                  name="person"
                  ios="ios-person"
                  android="md-person"
                  style={{ fontSize: 30 }}
                />
                <Text style={styles.welcome}> View Profile</Text>
              </View>
            </TouchableOpacity>
          </Card>
        </View>
      </View>
    </View>
  );
};

const mytheme = {
  colors: {
    primary: "#05c5f5",
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#F5FCFF",
  },
  mycard: {
    marginRight: 30,
    width: "50%",
    padding: 10,
    height: "10%",
    borderRadius: 3,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  content: {
    flex: 1,
    marginHorizontal: 20,
    backgroundColor: "#F5FCFF",
  },
  cardView: {
    flexDirection: "row",
    padding: 5,
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    padding: 5,
    fontWeight: "bold",
  },
});
export default Studentscreen;
