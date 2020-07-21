import React, { useState } from "react";
import { View, Text, StyleSheet, AsyncStorage } from "react-native";
import { Icon } from "native-base";
import HeaderComp from "../Header";

const Principalscreen = ({ navigation }) => {
  const [name, setName] = useState("");

  AsyncStorage.getItem("user").then((data) => {
    setName(data);
  });

  const logout = () => {
    AsyncStorage.removeItem("token");
  };

  const backAction = () => {
    AsyncStorage.removeItem("user").then(() => console.log("success"));
  };

  return (
    <View style={styles.container}>
      <HeaderComp navigation={navigation} />
      <Text style={styles.welcome}>Principal screen!</Text>
      <Text style={styles.welcome}>
        <Text>Welcome</Text>
        <Text> {name} </Text>
      </Text>

      <View style={{ flexDirection: "row", margin: 10 }}>
        <Text
          style={styles.textstyle}
          onPress={() => navigation.navigate("Genrate_QR")}
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
          onPress={() => navigation.navigate("Add_Teacher")}
        >
          <Icon
            name="person-add"
            ios="ios-person-add"
            android="md-person-add"
            style={{ fontSize: 30 }}
          />
          &nbsp;&nbsp; Add Teacher
        </Text>
      </View>
      <View style={{ flexDirection: "row", margin: 10 }}>
        <Text
          style={styles.textstyle}
          onPress={() => navigation.navigate("Add_Subject")}
        >
          <Icon
            name="person-add"
            ios="ios-person-add"
            android="md-person-add"
            style={{ fontSize: 30 }}
          />
          &nbsp;&nbsp; Add Subject
        </Text>

        <Text
          style={styles.textstyle}
          onPress={() => navigation.navigate("Add_Student")}
        >
          <Icon
            name="person-add"
            ios="ios-person-add"
            android="md-person-add"
            style={{ fontSize: 30 }}
          />
          &nbsp;&nbsp; Add Student
        </Text>
      </View>
      <View style={{ flexDirection: "row", margin: 10 }}>
        <Text
          style={styles.textstyle}
          onPress={() => navigation.navigate("Add_Class")}
        >
          <Icon
            name="person-add"
            ios="ios-person-add"
            android="md-person-add"
            style={{ fontSize: 30 }}
          />
          &nbsp;&nbsp; Add Class
        </Text>

        <Text
          style={styles.textstyle}
          onPress={() => navigation.navigate("View_Student")}
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
          onPress={() => navigation.navigate("View_class")}
        >
          <Icon
            name="person-add"
            ios="ios-person-add"
            android="md-person-add"
            style={{ fontSize: 30 }}
          />
          &nbsp;&nbsp; View Class
        </Text>

        <Text
          style={styles.textstyle}
          onPress={() => navigation.navigate("View_Teacher")}
        >
          <Icon
            name="paper"
            ios="ios-paper"
            android="md-paper"
            style={{ fontSize: 30 }}
          />
          &nbsp;&nbsp; View Teachers
        </Text>
      </View>
      <View style={{ flexDirection: "row", margin: 10 }}>
        <Text
          style={styles.textstyle}
          onPress={() => navigation.navigate("View_Subject")}
        >
          <Icon
            name="person-add"
            ios="ios-person-add"
            android="md-person-add"
            style={{ fontSize: 30 }}
          />
          &nbsp;&nbsp; View Subjects
        </Text>

        <Text
          style={styles.textstyle}
          onPress={() => navigation.navigate("View_QR")}
        >
          <Icon
            name="paper"
            ios="ios-paper"
            android="md-paper"
            style={{ fontSize: 30 }}
          />
          &nbsp;&nbsp; QR History
        </Text>
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
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    borderRadius: 5,
    borderColor: "#333",
    borderWidth: 1,
    padding: 8,
  },
});
export default Principalscreen;
