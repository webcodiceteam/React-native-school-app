import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Admin from "../index";
import AddTeacher from "../Add_Teacher";
import ViewStudent from "../View_Student";
import ViewTeacher from "../View_Teacher";
import Addclass from "../Add_Class";
import Qrgenerator from "../Genrate_QR";
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <Drawer.Navigator initialRouteName="Admin">
      <Drawer.Screen
        name="Admin"
        component={Admin}
        options={{
          headerShown: true,
        }}
      />
      <Drawer.Screen
        name="Add Teacher"
        component={AddTeacher}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="View Students"
        component={ViewStudent}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="View Teachers"
        component={ViewTeacher}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Add Class"
        component={Addclass}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Generate QR"
        component={Qrgenerator}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}
