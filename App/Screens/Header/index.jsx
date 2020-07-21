import React from "react";
import { View, AsyncStorage, Alert } from "react-native";
import { Body, Header, Icon, Left, Right, Text } from "native-base";

export default function HeaderComponent({ navigation }) {
  const logout = () => {
    Alert.alert("Log Out", "Are you Sure you want to delete ?", [
      {
        text: "NO",
        onPress: () => null,
        style: "cancel",
      },
      {
        text: "YES",
        onPress: () => logoutSucess(),
      },
    ]);
  };

  const logoutSucess = () => {
    // AsyncStorage.removeItem("token");
    // navigation.navigate("Login");

    AsyncStorage.getItem("id")
      .then((id) => {
        axios
          .post("http://krishma.webcodice.com/react-native/axios.php", {
            request: 35,
            id: id,
          })
          .then((response) => {
            console.log(response.data);
            AsyncStorage.removeItem("token");
            navigation.navigate("Login");
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const openDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <View>
      <Header>
        <Left>
          <Icon
            onPress={openDrawer}
            ios="ios-menu"
            android="md-menu"
            style={{ fontSize: 30, color: "#fff" }}
          />
        </Left>
        <Body>
          <Text style={{ color: "#fff" }}>{/*Student Screen*/}</Text>
        </Body>
        <Right>
          <Icon
            name="log-out"
            ios="ios-log-out"
            android="md-log-out"
            onPress={logout}
            style={{ fontSize: 30, color: "#fff" }}
          />
        </Right>
      </Header>
    </View>
  );
}
