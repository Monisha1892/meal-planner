import React from "react";
import { Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignOutButton = ({setIsSignedIn}) => {
  async function handleSignOut() {
    await AsyncStorage.removeItem("UserJWT");
    setIsSignedIn(false)
  }
  return <Button title="Sign Out" onPress={handleSignOut}>Sign Out</Button>;
};

export default SignOutButton;
