import React, { useState, useEffect } from "react";
import {
  View,
  Picker,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
  Image,
  SafeAreaView,
  StatusBar,
  Alert,
  Modal,
  TouchableHighlight,
} from "react-native";
import {
  Button,
  Title,
  Card,
  IconButton,
  Colors,
  TextInput,
  Portal,
  Provider,
  Dialog,
  RadioButton,
} from "react-native-paper";
import QRCode from "react-qr-code";
import { Actions } from "react-native-router-flux";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { Body, Header, Icon, Left, Right, DatePicker } from "native-base";
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";
import HeaderCom from "../Header";
import axios from "axios";

export default function studentlist({ navigation }) {
  let [students, setStudents] = useState([]);

  useEffect(() => {
    getTeachers();
    getClasses();
    getSubjects();
  }, []);
  const [showDate, setDate] = useState(false);

  // const value = '';
  const mode = "date";
  const displayFormat = "DD/MM/YYYY";
  const [id, setid] = useState("");
  const [uname, setUName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_no, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("male");
  const [dob, setDob] = useState("");
  const [classname, setClassname] = useState("Class");
  const [subject, setSubject] = useState("Subject");
  const [picture, setPicture] = useState("");
  const [qualification, setQualification] = useState("");
  const [modal, setModal] = useState(false);
  let [loading, setLoading] = useState(false);
  let [classes, setClasses] = useState([]);
  let [subjects, setSubjects] = useState([]);

  const gallerypic = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (granted) {
      let data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
      if (!data.cancelled) {
        let newfile = {
          uri: data.uri,
          type: `test/${data.uri.split(".")[1]}`,
          name: `test.${data.uri.split(".")[1]}`,
        };
        uploadimage(newfile);
      }
    } else {
      Alert.alert("No work");
    }
  };

  const uploadimage = async (image) => {
    const response = await ImageManipulator.manipulateAsync(image.uri, [], {
      base64: true,
    });
    setPicture(response.base64);
    setModal(false);
  };
  // const uploadimage = (image) => {
  //   const data = new FormData();
  //   data.append("file", image);
  //   data.append("upload_preset", "attendanceApp");
  //   data.append("cloud_name", "dbvq0lefw");
  //   fetch("https://api.cloudinary.com/v1_1/dbvq0lefw/image/upload", {
  //     method: "post",
  //     body: data,
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setPicture(data.url);
  //     });
  // };

  const showDateTimePicker = () => {
    //alert('showDateTimePicker');
    setDate(true);

    // Keyboard.dismiss();
  };

  const hideDateTimePicker = () => {
    setDate(false);
  };

  const handleDatePicked = (dob) => {
    setDob(dob);
    hideDateTimePicker();
  };
  const getClasses = () => {
    axios
      .post("http://krishma.webcodice.com/react-native/axios.php", {
        request: 11,
      })
      .then((response) => {
        setClasses(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
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

  const updatedata = () => {
    axios
      .post("http://krishma.webcodice.com/react-native/axios.php", {
        request: 23,
        id: id,
        name: uname,
        email: email,
        phone_no: phone_no,
        password: password,
        image: picture,
        gender: gender,
        dob: dob,
        class_name: classname,
        subject: subject,
        qualification: qualification,
      })
      .then((response) => {
        alert(response.data);
        hideModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [visible, setVisible] = useState(false);

  const showModal = (
    id,
    name,
    email,
    phone_no,
    password,
    image,
    gender,
    dob,
    cname,
    sub,
    qual
  ) => {
    // console.log(class_name);

    setVisible(true);
    setid(id);
    setUName(name);
    setEmail(email);
    setPhone(phone_no);
    setPassword(password);
    setPicture(image);
    setGender(gender);
    setDob(dob);
    setClassname(cname);
    setSubject(sub);
    setQualification(qual);
  };
  const hideModal = () => setVisible(false);
  useEffect(() => {
    getTeachers();
  }, []);
  const getTeachers = () => {
    axios
      .post("http://krishma.webcodice.com/react-native/axios.php", {
        request: 16, //fetch all teacher in list
      })
      .then((response) => {
        setStudents(response.data);
        //console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const [name, setName] = useState("");

  AsyncStorage.getItem("user").then((data) => {
    // let user = data;
    setName(data);
  });
  const deletestudent = (i) => {
    Alert.alert("Delete User", "Are you Sure you want to delete " + i + " ?", [
      {
        text: "NO",
        onPress: () => null,
        style: "cancel",
      },
      {
        text: "YES",
        onPress: () =>
          axios
            .post("http://krishma.webcodice.com/react-native/axios.php", {
              request: 22, //Delete Single User
              username: i,
              role: "student",
            })
            .then((response) => {
              alert(response.data);
            })
            .catch(function (error) {
              console.log(error);
            }),
      },
    ]);
  };

  const logout = () => {
    AsyncStorage.setItem("user", "");
    Actions.login();
  };
  return (
    <View style={styles.container}>
      <HeaderCom navigation={navigation} />
      <Text style={styles.welcome}>
        <Text>Welcome</Text>
        <Text> {name} </Text>
      </Text>
      <SafeAreaView style={styles.content}>
        <ScrollView style={styles.scroll}>
          <Title style={styles.welcome}>List of Teachers</Title>
          {students.map((x) => {
            return (
              <Card style={styles.mycard} key={x.id}>
                <View style={styles.cardView}>
                  <TouchableOpacity
                    onPress={() =>
                      showModal(
                        x.id,
                        x.name,
                        x.email,
                        x.phone_no,
                        x.password,
                        x.image,
                        x.gender,
                        x.dob,
                        x.class_name,
                        x.subject,
                        x.qualification
                      )
                    }
                    key={x.id}
                  >
                    <Image
                      style={{ width: 60, height: 60, borderRadius: 30 }}
                      source={
                        x.image
                          ? {
                              uri: `http://krishma.webcodice.com/react-native/${x.image}`,
                            }
                          : {
                              uri:
                                "https://n8d.at/wp-content/plugins/aioseop-pro-2.4.11.1/images/default-user-image.png",
                            }
                      }
                    />
                  </TouchableOpacity>
                  <View style={{ marginLeft: 10 }}>
                    <Text style={styles.text}>{x.username}</Text>
                    <Text style={styles.textstyle}>{x.email}</Text>
                    <Text style={styles.textstyle}>{x.phone_no}</Text>
                  </View>
                  <Right>
                    <Icon
                      ios="ios-trash"
                      android="md-trash"
                      style={{
                        fontSize: 30,
                        color: "#333",
                      }}
                      onPress={() => deletestudent(x.username)}
                    />
                  </Right>
                </View>
              </Card>
            );
          })}
        </ScrollView>
      </SafeAreaView>
      <Modal animationType="slide" transparent={true} visible={visible}>
        <View style={styles.centeredView}>
          <SafeAreaView style={styles.content}>
            <ScrollView style={styles.scroll}>
              <View style={styles.modalView}>
                <Icon
                  ios="ios-close"
                  android="md-close"
                  style={{
                    fontSize: 30,
                    color: "#333",
                    alignItems: "flex-start",
                  }}
                  onPress={hideModal}
                />

                <Title style={styles.welcome}>Update Teacher👨‍🎓</Title>
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Image
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 30,
                    }}
                    source={
                      picture
                        ? { uri: picture }
                        : {
                            uri:
                              "https://n8d.at/wp-content/plugins/aioseop-pro-2.4.11.1/images/default-user-image.png",
                          }
                    }
                  />
                  <Text onPress={() => gallerypic()}>Edit</Text>
                </View>
                <TextInput
                  style={styles.inputstyle}
                  label="Name"
                  value={uname}
                  mode="outlined"
                  onChangeText={(text) => setUName(text)}
                  theme={mytheme}
                />
                <TextInput
                  style={styles.inputstyle}
                  label="Email"
                  value={email}
                  keyboardType="email-address"
                  mode="outlined"
                  onChangeText={(text) => setEmail(text)}
                  theme={mytheme}
                />
                <TextInput
                  style={styles.inputstyle}
                  label="Phone"
                  value={phone_no}
                  keyboardType="number-pad"
                  mode="outlined"
                  onChangeText={(text) => setPhone(text)}
                  theme={mytheme}
                />
                <TextInput
                  style={styles.inputstyle}
                  label="Password"
                  value={password}
                  mode="outlined"
                  secureTextEntry={false}
                  onChangeText={(text) => setPassword(text)}
                  theme={mytheme}
                />
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: 22 }}>Gender :</Text>
                  <RadioButton
                    style={styles.inputstyle}
                    label="Gender"
                    value={gender}
                    mode="outlined"
                    value="male"
                    theme={mytheme}
                    status={gender === "male" ? "checked" : "unchecked"}
                    onPress={() => setGender("male")}
                  />
                  <Text style={{ fontSize: 20, padding: 6 }}>Male</Text>
                  <RadioButton
                    style={styles.inputstyle}
                    theme={mytheme}
                    value="female"
                    status={gender === "female" ? "checked" : "unchecked"}
                    onPress={() => setGender("female")}
                  />
                  <Text style={{ fontSize: 20, padding: 6 }}>Female</Text>
                </View>

                <Text
                  style={styles.datetextstyle}
                  onPress={() => showDateTimePicker()}
                  theme={mytheme}
                >
                  {dob ? moment(dob).format(displayFormat) : "Select Date"}
                </Text>
                <DateTimePicker
                  date={dob ? new Date(dob) : new Date()}
                  theme={mytheme}
                  isVisible={showDate}
                  mode={mode}
                  onConfirm={handleDatePicked}
                  onCancel={() => hideDateTimePicker()}
                />
                <Picker
                  style={styles.pickerstyle}
                  theme={mytheme}
                  selectedValue={classname}
                  onValueChange={(classname) => setClassname(classname)}
                >
                  <Picker.Item label="Select Class" value="Class" />
                  {classes.map((x) => (
                    <Picker.Item
                      key={x.class_id}
                      label={x.class_name}
                      value={x.class_name}
                    />
                  ))}
                </Picker>
                <Picker
                  style={styles.pickerstyle}
                  theme={mytheme}
                  selectedValue={subject}
                  onValueChange={(subject) => setSubject(subject)}
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
                <TextInput
                  style={styles.inputstyle}
                  label="Qualification"
                  value={qualification}
                  mode="outlined"
                  onChangeText={(qualification) =>
                    setQualification(qualification)
                  }
                  theme={mytheme}
                />

                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                  onPress={() => updatedata()}
                >
                  <Text style={styles.btntextStyle}>UPDATE</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                  onPress={hideModal}
                >
                  <Text style={styles.btntextStyle}>CANCEL</Text>
                </TouchableHighlight>
              </View>
            </ScrollView>
          </SafeAreaView>
        </View>
      </Modal>
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
  inputstyle: {
    margin: 5,
  },
  scroll: {
    width: "100%",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 10,
  },
  button: {
    width: "60%",
    paddingTop: 8,
    marginTop: 10,
    paddingBottom: 8,
    backgroundColor: "#006aff",
    marginBottom: 20,
  },
  mycard: {
    margin: 5,
  },
  cardView: {
    flexDirection: "row",
    padding: 6,
  },
  text: {
    fontSize: 18,
  },
  textstyle: {
    fontSize: 14,
  },
  datetextstyle: {
    margin: 5,
    padding: 15,
    borderRadius: 5,
    borderColor: "grey",
    borderWidth: 1,
    color: "#333",
    backgroundColor: "#f2f2f2",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
  },
  centeredView: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    marginTop: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: "4%",
  },
  pickerstyle: {
    margin: 5,
    padding: 15,
    borderRadius: 5,
    borderColor: "grey",
    borderWidth: 1,
    color: "grey",
    backgroundColor: "#f2f2f2",
  },
  btntextStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
