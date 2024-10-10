import React from "react";
import { Alert, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Buffer } from "buffer";

const api = axios.create({
  baseURL: "http://localhost:3011",
  // baseURL: "http://192.168.56.1:3011",
});

const FavoriteRecipeButton = ({ recipeId }) => {
  async function handleFavorite() {
    try {
      const token = await AsyncStorage.getItem("UserJWT");
      if (token) {
        const parts = token
          .split(".")
          .map((part) =>
            Buffer.from(
              part.replace(/-/g, "+").replace(/_/g, "/"),
              "base64"
            ).toString()
          );
        const payload = JSON.parse(parts[1]);
        const userId = payload.username.id;

        const response = await api.post("/favorite", {
          args: { recipeId, userId },
        });

        Alert.alert(response.data.response);
      } else {
        Alert.alert("You must be signed in to save recipes.")
      }
    } catch (e) {
      console.log({ e });
    }
  }

  return <Button title="Save to favorites" onPress={handleFavorite} />;
};

export default FavoriteRecipeButton;
