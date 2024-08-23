// components/Recipes.js

import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3011",
});

export default function Recipes() {
  const [title, setTitle] = useState(null);
  const [method, setMethod] = useState(null);
  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await api.get("/recipes");
      const recipes = response.data;
      console.log({ recipes });
      setTitle(recipes[0]["title"]);
      setMethod(recipes[0]["method"])
      return;
    };
    fetchRecipes();
  }, []);
  console.log({ title });

  return (
    <View style={styles.container}>
      <Text>Recipes Page</Text>
      <Text>{title}</Text>
      <Text>{method}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
