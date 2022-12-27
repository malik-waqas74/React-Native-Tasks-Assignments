import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Location from "expo-location";

export default function Maps() {
  function GetLocation({ navigation }) {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
      (async () => {
        let { status } = await Location.getForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location.coords);
      })();
    }, []);

    let longitude;
    let Latitude;

    if (errorMsg) {
      longitude = errorMsg;
    } else if (location) {
      longitude = JSON.parse(location.longitude);
      Latitude = JSON.parse(location.latitude);
    }

    return (
      <View style={styles.container}>
        <Text>{longitude}</Text>
        <Text>{Latitude}</Text>
        <Button
          title="Go To Map"
          onPress={() => {
            navigation.navigate({
              name: "Map",
              params: {
                Latitude,
                longitude,
              },
            });
          }}
        ></Button>
      </View>
    );
  }

  let map = ({ navigation, route }) => {
    return (
      <View style={styles.container}>
        <MapView
          style={{ alignSelf: "stretch", height: "100%" }}
          initialRegion={{
            latitude: route.params.Latitude,
            longitude: route.params.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: route.params.Latitude,
              longitude: route.params.longitude,
            }}
            title="pinpoint"
          />

        </MapView>
      </View>
    );
  };

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Locator" component={GetLocation}></Stack.Screen>
        <Stack.Screen name="Map" component={map}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
