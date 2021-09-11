import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Icon } from "native-base";
import HeaderComp from "../Header";
// import AsyncStorage from '@react-native-community/async-storage';

const Principalscreen = ({ navigation }) => {
  const [name, setName] = useState("");

  // AsyncStorage.getItem("user").then((data) => {
  //   setName(data);
  // });

  // const logout = () => {
  //   AsyncStorage.removeItem("token");
  // };

  // const backAction = () => {
  //   AsyncStorage.removeItem("user").then(() => console.log("success"));
  // };

  return (
    <View style={styles.container}>
      <HeaderComp navigation={navigation} />
      <Text style={styles.welcome}>Principal screen!</Text>
      <Text style={styles.welcome}>
        <Text>Welcome</Text>
        <Text> {name} </Text>
      </Text>
        <ScrollView
        showsVerticalScrollIndicator={false}


        >
        <View>

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
       
      </View>

       <View style={{ flexDirection: "row", margin: 10 }}>
        
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

      </View>


      <View style={{ flexDirection: "row", margin: 10 }}>
       

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
</View>
      <View style={{ flexDirection: "row", margin: 10 }}>

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

      </View>
        <View style={{ flexDirection: "row", margin: 10 }}>
       

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

       
      </View>
      <View style={{ flexDirection: "row", margin: 10 }}>
      

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
      </ScrollView>
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
    borderRadius: 100,
    borderColor: "#333",
    borderWidth: 1,
    padding: 8,
    backgroundColor:"#fff",
     shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2, 
    width:"100%",
  },
});
export default Principalscreen;
