import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("./assets/mountain.jpg")}
        style={styles.img}
      >
        <Image
          source={require("./assets/logo.jpg")}
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
      <>
      </>
          


      
      <TouchableOpacity style={styles.fbbtn}><Text style={{color:"#fff",fontWeight:"900",fontSize:22}}>f</Text>
        LOGIN WITH FACEBOOK
      </TouchableOpacity>

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.btn}> SIGN UP</TouchableOpacity>
        <TouchableOpacity style={styles.btn}>SIGN IN</TouchableOpacity>
      </View>
    </SafeAreaView>
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
  txt:{
    marginTop:50,
    color:"#fff",
    textAlign:"left",
    fontSize:23
  
  }
});
