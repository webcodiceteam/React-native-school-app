import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Picker,
  Alert,
  ScrollView,
} from "react-native";
import { TextInput, Title, Button } from "react-native-paper";



import HeaderComp from "../Header";

const Change_pass = ({ navigation }) => {

  const [password, setPassword] = useState("");
  const [newpassword, setnewPassword] = useState("");
  const [repassword, setrePassword] = useState("");

  return (
    <ScrollView
    showsVerticalScrollIndicator={false}


    >
      <HeaderComp navigation={navigation} />
      <View style={styles.container}>
        <Title style={styles.welcome}>Change Password</Title>
        {/* <Loader loading={loading} /> */}
        

        <TextInput
          style={styles.inputstyle}
          label="Current Password"
          value={password}
          mode="outlined"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          theme={mytheme}
        />

<TextInput
          style={styles.inputstyle}
          label="New Password"
          value={newpassword}
          mode="outlined"
          secureTextEntry={true}
          onChangeText={(text) => setnewPassword(text)}
          theme={mytheme}
        />

<TextInput
          style={styles.inputstyle}
          label="Re-type Password"
          value={repassword}
          mode="outlined"
          secureTextEntry={true}
          onChangeText={(text) => setrePassword(text)}
          theme={mytheme}
        />
      
        <Button
          mode="contained"
          style={styles.inputstyle}
          theme={mytheme}
          onPress={() => validate()}
        >
          Save
        </Button>

      
      </View>
    </ScrollView>
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
    marginHorizontal: 20,
    justifyContent: "center",
  },
  pickerstyle: {
    margin: 5,
    padding: 15,
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 1,
    color: "grey",
    backgroundColor: "#f2f2f2",
  },
  welcome: {
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
    padding: 20,
    fontSize: 28,
  },
  inputstyle: {
    margin: 5,
  },
  textstyle: {
    margin: 5,
    padding: 15,
    borderRadius: 5,
    borderColor: "grey",
    borderWidth: 1,
    color: "grey",
    backgroundColor: "#f2f2f2",
  },
  datestyle: {
    margin: 5,
    padding: 15,
    borderRadius: 5,
    borderColor: "grey",
    borderWidth: 1,
    color: "grey",
    backgroundColor: "#f2f2f2",
  },
  modalstyle: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  modalView: {
    width: "100%",
    position: "absolute",
    backgroundColor: "white",
    bottom: 5,
  },
});

export default Change_pass;

