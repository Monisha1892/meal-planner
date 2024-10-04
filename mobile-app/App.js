import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SignOutButton from "./components/SignOutButton";
import LoginForm from "./pages/LoginForm";
import UserAccount from "./pages/UserAccount";
import Recipes from "./pages/Recipes";
import NavigationBar from "./pages/NavigationBar";
import RecipeDetails from "./pages/RecipeDetails";

const Stack = createNativeStackNavigator();

// Welcome Screen
function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* Background Image */}
      <ImageBackground
        source={require("./assets/welcome-background.jpg")}
        style={styles.fullScreenBackground}
        resizeMode="cover"
      >
        <View style={styles.overlay} />

        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>
            Welcome to Yummify – your all-in-one meal planning and grocery
            assistant! Whether you're looking to discover new recipes, make the
            most of the ingredients you have on hand, or simply plan healthier
            meals, Yummify is here to make your culinary journey effortless and
            enjoyable. Let's get cooking!
          </Text>
          <TouchableOpacity
            style={styles.beginButton}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.buttonText}>Begin</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

// Home Screen
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* Background Image */}
      <ImageBackground
        source={require("./assets/homescreen-bg.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay} />
        <View style={styles.innerContainer}>
          <Text style={styles.homescreenText}>Yummify your recipes!!!</Text>
          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("UserAccount")}>
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
        </View>
      </ImageBackground>
     <NavigationBar navigation={navigation} />
    </View>
  );
}

// User Account Screen (including login, sign-up, sign-in)
function UserAccountScreen({ navigation }) {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const getUserToken = async () => {
      const token = await AsyncStorage.getItem("UserJWT");
      if (token) {
        setIsSignedIn(true);
      }
    };
    getUserToken();
  }, [isSignedIn]);

  function handleSignIn() {
    navigation.navigate("LoginForm", { setIsSignedIn });
  }

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
          <TouchableOpacity
            style={styles.beginButton}
            onPress={() => handleSignIn()}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.beginButton}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </>
      )}
     <NavigationBar navigation={navigation} />
    </View>
  );
}

// Main App Component
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="UserAccount" component={UserAccountScreen} />
        <Stack.Screen name="Recipes" component={Recipes} />
        <Stack.Screen name="RecipeDetails" component={RecipeDetails} options={{ title: 'Recipe Details'}} />
        <Stack.Screen name="LoginForm" component={LoginForm} options={{ title: 'Login form'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  fullScreenBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  container: {
    flex: 1,
    backgroundColor: "#add8e6",
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  welcomeText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  beginButton: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "#000",
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
  homescreenText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
    justifyContent: "center",
  },
});
