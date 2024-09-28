import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card, Button } from "react-native-elements";
import axios from "axios";
import NavigationBar from "./NavigationBar";

const api = axios.create({
  baseURL: "http://192.168.56.1:3011",
});

export default function Recipes({ navigation }) {
  // State to store all recipes
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await api.get("/recipes");
        const recipes = response.data;
        setRecipes(recipes); // Set all the recipes here
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecipes();
  }, []);

  // Function to handle clicking a card (for navigation or other actions)
  const handleCardPress = (recipe) => {
    console.log("Recipe clicked: ", recipe.title);
    // Example: Navigate to Recipe Details screen with the selected recipe
    navigation.navigate('RecipeDetails', { recipe });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Recipes Page</Text>

      {/* Displaying all the recipes */}
      <ScrollView>
        {recipes.length > 0 ? (
          recipes.map((recipe, index) => (
            <Card key={index} containerStyle={styles.card}>
              {/* Recipe Image */}
              {recipe.image && (
                <Card.Image
                  source={{ uri: recipe.image }}
                  style={styles.image}
                />
              )}

              {/* Recipe Title */}
              <Card.Title style={styles.title}>{recipe.title}</Card.Title>
              <Card.Divider />

              {/* Recipe Categories */}
              <Text style={styles.categoryText}>
                Diet: {recipe.category_diet || "N/A"}
              </Text>
              <Text style={styles.categoryText}>
                Style: {recipe.category_style || "N/A"}
              </Text>

              {/* Button or Pressable Card */}
              <Button
                title="View Recipe"
                onPress={() => handleCardPress(recipe)}
                buttonStyle={styles.button}
              />
            </Card>
          ))
        ) : (
          <Text>No recipes found</Text>
        )}
      </ScrollView>

      <NavigationBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  card: {
    borderRadius: 10,
    padding: 15,
  },
  image: {
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  categoryText: {
    fontSize: 14,
    marginTop: 5,
    color: "#666",
  },
  button: {
    backgroundColor: "#007BFF",
    marginTop: 10,
    borderRadius: 5,
  },
});

