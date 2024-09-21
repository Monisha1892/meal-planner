import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchBar from "./components/SearchBar";
import UserAccount from "./pages/UserAccount";
import Recipes from "./pages/Recipes";
import LoginForm from "./pages/LoginForm";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SignOutButton from "./components/SignOutButton";

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  const [isSignedIn, setIsSignedIn] = useState(false);

  function handleSignIn() {
    navigation.navigate("LoginForm", { setIsSignedIn });
  }

  useEffect(() => {
    const getUserToken = async () => {
      const token = await AsyncStorage.getItem("UserJWT");

      if (token) {
        setIsSignedIn(true);
      }
    };
    getUserToken();
  }, [isSignedIn]);

  return (
    <View style={styles.container}>
      {isSignedIn ? (
        <>
          <View style={styles.imageContainer}>
            <SignOutButton setIsSignedIn={setIsSignedIn} />
            <TouchableOpacity
              onPress={() => navigation.navigate("UserAccount")}
            >
              <Image
                source={require("./assets/user-account.jpeg")}
                style={styles.image}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Recipes")}>
              <Image
                source={require("./assets/recipes.jpeg")}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <Button title="Sign In" onPress={handleSignIn} />
          <Button title="Sign Up" onPress={() => {}} />
        </>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="UserAccount" component={UserAccount} />
        <Stack.Screen name="Recipes" component={Recipes} />
        {/* <Stack.Screen name="Settings" component={SettingsScreen} /> */}
        {/* <Stack.Screen name="Search" component={SearchScreen} /> */}
        {/* <Stack.Screen name="SearchByQuery" component={SearchByQueryScreen} /> */}
        {/* <Stack.Screen name="SearchByIngredient" component={SearchByIngredientScreen} /> */}
        {/* <Stack.Screen name="SearchByImage" component={SearchByImageScreen} /> */}
        <Stack.Screen name="LoginForm" component={LoginForm} />
        {/* <Stack.Screen name="SignUp" component={SignUpScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#add8e6",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flexDirection: "column",
    marginTop: 20,
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    marginVertical: 10,
    borderRadius: 10,
  },
});
