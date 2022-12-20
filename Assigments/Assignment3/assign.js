import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

import Ionicons from "react-native-vector-icons/Ionicons";
import {
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { getProviderStatusAsync } from "expo-location";

function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/mountain.jpg")}
        style={styles.img}
      >
        <Image
          source={require("../assets/logo.jpg")}
          style={{
            width: 100,
            height: 100,
            marginTop: 70,

            borderRadius: 10,
          }}
        ></Image>
        <Text
          style={{
            color: "#fff",
            fontSize: 32,
            fontStyle: "italic",
            fontFamily: "Segoe UI Historic",
            fontWeight: "650",
            marginTop: 30,
          }}
        >
          Freelance
        </Text>

        <Text style={styles.txt}>Showcase & Discover Creative Work.</Text>
      </ImageBackground>
      <></>

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate({ name: "Signup" });
          }}
        >
          {" "}
          SIGN UP
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate({ name: "Login" });
          }}
        >
          SIGN IN
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function Login({ navigation, route }) {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");

  const onSubmit = async () => {
    let Name;
    let Password;
    try {
      Name = await AsyncStorage.getItem("Username");
      Password = await AsyncStorage.getItem("Password");
      if (Name == name && Password == password) {
        navigation.navigate({
          name: "profile",
          params: {
            name,
          },
        });
      } else {
        alert("Incorrect Username or password ");
      }
    } catch (e) {
      console.warn(e);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/mountain.jpg")}
        style={styles.img}
      >
        <Image
          source={require("../assets/logo.jpg")}
          style={{
            width: 100,
            height: 100,
            marginTop: 70,

            borderRadius: 10,
          }}
        ></Image>
        <View
          style={{
            width: 400,
            height: 310,
            backgroundColor: "#fff",

            marginTop: 30,
            paddingHorizontal: 40,
            paddingVertical: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "grey",
            }}
          >
            username <Ionicons name={"person"} size={20}></Ionicons>
          </Text>
          <TextInput
            style={{
              backgroundColor: "#fff",
              width: 300,
              height: 50,
              textAlign: "center",
              color: "grey",
              borderWidth: 4,
              borderRadius: 150,
              marginTop: 10,
              marginBottom: 10,
            }}
            placeholder="Enter username"
            value={name}
            onChangeText={(t) => setname(t)}
          />

          <Text
            style={{
              fontSize: 20,
              color: "grey",
            }}
          >
            Password <Ionicons name={"lock-closed"} size={20}></Ionicons>
          </Text>
          <TextInput
            style={{
              backgroundColor: "#fff",
              width: 300,
              height: 50,
              textAlign: "center",
              color: "grey",
              borderWidth: 4,
              borderRadius: 150,
              marginTop: 10,
            }}
            placeholder="Enter Password"
            textContentType="password"
            secureTextEntry
            value={password}
            onChangeText={(t) => setpassword(t)}
          />

          <TouchableOpacity
            style={{
              width: 220,
              height: 50,
              borderRadius: 100,
              backgroundColor: "tomato",
              textAlign: "center",
              marginTop: 20,
              justifyContent: "center",
              marginLeft: 40,
            }}
            onPress={onSubmit}
          >
            <Text style={{ color: "#fff", fontSize: 25 }}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

function Signup({ navigation }) {
  const [name, setName] = useState("");
  const [password, setpassword] = useState("");

  const [cpassword, setcpassword] = useState("");

  const storeData = async () => {
    if (name.length == 0 || password.length == 0) {
      Alert.alert("Warning!", "Enter your data");
    }

    let Name = await AsyncStorage.getItem("Username");
    if (Name === name) {
      alert("User Already Exists");
      setName("");
      setpassword("");
      setcpassword("");
      navigation.navigate("Signup");
    } else {
      const firstPair = ["Username", name];
      const secondPair = ["Password", password];
      try {
        await AsyncStorage.multiSet([firstPair, secondPair]);
        navigation.navigate("Home");
        alert("Account Created Successfully");
      } catch (e) {
        console.warn(e);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/mountain.jpg")}
        style={styles.img}
      >
        <Image
          source={require("../assets/logo.jpg")}
          style={{
            width: 100,
            height: 100,
            marginTop: 70,

            borderRadius: 10,
          }}
        ></Image>
        <View
          style={{
            width: 400,
            height: 350,
            backgroundColor: "#fff",

            marginTop: 30,
            paddingHorizontal: 40,
            paddingVertical: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "grey",
            }}
          >
            username <Ionicons name={"person"} size={20}></Ionicons>
          </Text>
          <TextInput
            style={{
              backgroundColor: "#fff",
              width: 300,
              height: 50,
              textAlign: "center",
              color: "grey",
              borderWidth: 4,
              borderRadius: 150,
              marginTop: 10,
              marginBottom: 10,
            }}
            placeholder="Enter username"
            onChangeText={(t) => setName(t)}
          />

          <Text
            style={{
              fontSize: 20,
              color: "grey",
            }}
          >
            Password <Ionicons name={"lock-closed"} size={20}></Ionicons>
          </Text>
          <TextInput
            style={{
              backgroundColor: "#fff",
              width: 300,
              height: 50,
              textAlign: "center",
              color: "grey",
              borderWidth: 4,
              borderRadius: 150,
              marginTop: 10,
            }}
            placeholder="Enter Password"
            textContentType="password"
            secureTextEntry
            onChangeText={(t) => setpassword(t)}
          />

          <Text
            style={{
              fontSize: 20,
              color: "grey",
            }}
          >
            Confirm Password{" "}
            <Ionicons name={"lock-closed"} size={20}></Ionicons>
          </Text>
          <TextInput
            style={{
              backgroundColor: "#fff",
              width: 300,
              height: 50,
              textAlign: "center",
              color: "grey",
              borderWidth: 4,
              borderRadius: 150,
              marginTop: 10,
            }}
            placeholder="Enter Confirm Password"
            textContentType="password"
            secureTextEntry
            onChangeText={(t) => setcpassword(t)}
          />

          <TouchableOpacity
            style={{
              width: 220,
              height: 50,
              borderRadius: 100,
              backgroundColor: "tomato",
              textAlign: "center",
              marginTop: 20,
              justifyContent: "center",
              marginLeft: 40,
            }}
            onPress={() => {
              if (name == "") {
                alert("username is Required");
                return;
              }

              if (password == "") {
                alert("Password is Required");
                return;
              }
              if (password.length < 8) {
                alert("Password must be at least 8 Characters");
                return;
              }
              if (cpassword == "") {
                alert("Confirm Password is Required");
                return;
              }
              if (password !== cpassword) {
                alert("Password and Confirm Password Should be Same");
                return;
              }

              storeData();
              navigation.navigate({ name: "Home" });
            }}
          >
            <Text style={{ color: "#fff", fontSize: 25 }}>Register</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

function Profile({ navigation, route }) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/mountain.jpg")}
        style={styles.img}
      >
        <Image
          source={require("../assets/logo.jpg")}
          style={{
            width: 100,
            height: 100,
            marginTop: 70,

            borderRadius: 10,
          }}
        ></Image>
        <View
          style={{
            width: 400,
            height: 350,
            backgroundColor: "#fff",

            marginTop: 30,
            paddingHorizontal: 40,
            paddingVertical: 10,

            alignItems: "center",
          }}
        >
          <Ionicons name={"person"} color={"tomato"} size={80}></Ionicons>

          <Text style={{ fontSize: 30, color: "grey" }}>
          {route.params.name}
          </Text>

          <TouchableOpacity
            style={{
              width: 150,
              height: 50,
              borderRadius: 100,
              backgroundColor: "tomato",
              textAlign: "center",
              marginTop: 100,
              justifyContent: "center",
              marginLeft: 20,
            }}
            onPress={() => {
              alert("Bye Bye");
              navigation.navigate({ name: "Home" });
            }}
          >
            <Text style={{ color: "#fff", fontSize: 25 }}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
export default function Comp() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="profile" component={Profile}></Stack.Screen>
        <Stack.Screen name="Signup" component={Signup}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

var width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  img: {
    width: width,
    flex: 1,
    opacity: 0.9,
    alignItems: "center",
  },
  box: {
    backgroundColor: "tomato",
    height: 75,
    width: width,
    alignItems: "center",
  },
  txt: {
    marginTop: 50,
    color: "#fff",
    textAlign: "left",
    fontSize: 23,
  },

  fbbtn: {
    width: width,
    backgroundColor: "tomato",
    textAlign: "center",
    fontSize: 32,
    color: "#fff",
    height: 75,
    justifyContent: "center",
    fontFamily: "Calibri",
  },
  btn: {
    width: width / 2,
    backgroundColor: "#ed3419",
    textAlign: "center",
    fontSize: 32,
    color: "#fff",
    height: 75,
    justifyContent: "center",
    borderLeftWidth: 1,
    fontFamily: "Calibri",
    borderColor: "#fff",
  },
});
