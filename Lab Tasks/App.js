import * as React from "react";
import { Text, View, Button, TextInput,useColorScheme} from "react-native";
import { DarkTheme,DefaultTheme, NavigationContainer } from "@react-navigation/native";


import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState } from "react";
export default function App() {
  
  const [t, setT] = useState("");
  function HomeScreen({ navigation, route }) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home!</Text>

        <TextInput
          placeholder="Enter Your Name"
          style={{
            width: 200,
            height: 50,
            borderRadius: 100,
            borderColor: "tomato",
            borderWidth: 2,
            fontSize: 18,
            textAlign: "center",
          }}
          value={t}
          autoFocus={true}
          onChangeText={(txt) => setT(txt)}
        />
        <Text>{t}</Text>

        <Button
          title="SUBMIT"
          onPress={() => {
            navigation.navigate({
              name: "Profile",
              params: { t },
            });
          }}
        />
      </View>
    );
  }

  function ProfileScreen({ navigation, route }) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ margin: 10 }}>ProfileName: {route.params.t}</Text>
        <Button
          title="Go to Home"
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
      </View>
    );
  }

  const scheme = useColorScheme();

  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
        <Text>
          <input type="radio" name="I" />
          Dark
        </Text>
        <Text>
          <input type="radio" name="I" />
          Light
        </Text>
      </View>
    );
  }

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Settings") {
              iconName = "settings";
            } else if (route.name === "Profile") {
              iconName = "person";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
