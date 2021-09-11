import React, { useState } from "react";
import { Title } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";
import { StyleSheet, Text, View, Linking } from "react-native";

export default function HomeNew({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  useFocusEffect(
    React.useCallback(() => {
      if (isLoading) {
        setIsLoading(false);
        setTimeout(() => {
          navigation.navigate("Login");
        }, 5000);
      } else {
        navigation.navigate("Login");
      }
      return () => {};
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.border}>

        <Title style={styles.welcome}>WELCOME TO OUR</Title>
        <Text style={styles.paragraph}>
          ATTENDANCE APP
        </Text>
        </View>
        
      </View>
      <View>
        <Text style={{ textAlign: "center" }}>
          Design & Develop by{" "}
          <Text
            style={{ color: "#025098" }}
            onPress={() => Linking.openURL("https://google.com")}
          >
            Webcodice
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  border:{
    borderColor: "#333",
    borderWidth: 1,
    padding:20,
    },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  paragraph: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,

  },
  content:{
   
    flex: 2,
    justifyContent: "center", 
    alignItems: "center" ,
  }
});
