import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../index";
import View_profile from "../Teacher_profile";
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
        name="View Profile"
        component={Change}
        options={{
          headerShown: false,
        }}
      />
       <Drawer.Screen
        name="Change Password"
        component={View_profile}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}
