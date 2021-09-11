import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Picker,
} from "react-native";
import { TextInput, Title, Button } from "react-native-paper";
import axios from "axios";
import HeaderComp from "../Header";

export default function Addclass({ navigation }) {
  const [class_name, setClass_name] = useState("");
  const [section, setSection] = useState("");
  const [batch, setBatch] = useState("");
  const [subject_code, setSubject_code] = useState("");

  let [subjects, setSubjects] = useState([]);
  useEffect(() => {
    getSubjects();
  }, []);
  const getSubjects = () => {
    axios
      .post("http://krishma.webcodice.com/react-native/axios.php", {
        request: 14,
      })
      .then((response) => {
        setSubjects(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleSubmit = () => {
    if (
      class_name == "" ||
      section == "" ||
      batch == "" ||
      subject_code == ""
    ) {
      alert("Please Fill all class Fields");
    } else {
      axios
        .post("http://krishma.webcodice.com/react-native/axios.php", {
          request: 9,
          class_name: class_name,
          section: section,
          batch: batch,
          subject_code: subject_code,
        })
        .then((response) => {
          alert(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <View style={styles.container}>
      <HeaderComp navigation={navigation} />
      <SafeAreaView style={styles.content}>
        <ScrollView style={styles.scroll}>
          <Title style={styles.welcome}>Add Class👨‍🎓</Title>

          <TextInput
            style={styles.inputstyle}
            label="Class Name"
            value={class_name}
            mode="outlined"
            theme={mytheme}
            onChangeText={(e) => setClass_name(e)}
          />

          <Picker
            style={styles.pickerstyle}
            theme={mytheme}
            selectedValue={section}
            onValueChange={(itemValue) => setSection(itemValue)}
          >
            <Picker.Item label="Select Section" value="Section" />
            <Picker.Item label="A" value="A" />
            <Picker.Item label="B" value="B" />
            <Picker.Item label="C" value="C" />
            <Picker.Item label="D" value="D" />
            <Picker.Item label="E" value="E" />
          </Picker>

          <TextInput
            style={styles.inputstyle}
            label="Batch"
            value={batch}
            mode="outlined"
            theme={mytheme}
            onChangeText={(e) => setBatch(e)}
          />

          <Picker
            style={styles.pickerstyle}
            theme={mytheme}
            selectedValue={subject_code}
            onValueChange={(itemValue) => setSubject_code(itemValue)}
          >
            <Picker.Item label="Select Subject" value="Subject" />

            {subjects.map((x) => (
              <Picker.Item
                key={x.subject_id}
                label={x.subject_name}
                value={x.subject_name}
              />
            ))}
          </Picker>
          <Button
            mode="contained"
            style={styles.inputstyle}
            theme={mytheme}
            onPress={handleSubmit}
          >
            Add Class
          </Button>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const mytheme = {
  colors: {
    primary: "#05c5f5",
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 20,
  },
  labelstyle: {
    margin: 10,
    fontSize: 22,
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
    padding: 10,
    fontSize: 28,
  },
  inputstyle: {
    margin: 5,
  },
});
