import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../index";
import Change from "../Change_pass";

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <Drawer.Navigator initialRouteName="Admin">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
        <Drawer.Screen
        name="Change Password"
        component={Change}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}
