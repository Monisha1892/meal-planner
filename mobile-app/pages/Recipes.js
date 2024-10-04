import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Card, Button } from "react-native-elements";
import axios from "axios";
import NavigationBar from "./NavigationBar";

const api = axios.create({
  baseURL: "http://192.168.56.1:3011",
});

export default function Recipes({ navigation }) {
  // State to store all recipes
  const [recipes, setRecipes] = useState([]);

  //image error handling
  const [imageError, setImageError] = useState({});

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
    navigation.navigate('RecipeDetails', { recipeId: recipe.id });
  };

  //handle image loading error and set fallback image
  const handleImageError = (index) => {
   setImageError((prevErrors) => ({
    ...prevErrors,
    [index]: true, // mark that the image at this index failed to load
   }));
  };

  return (
    <View style={styles.container}>

      {/* Displaying all the recipes */}
      <ScrollView>
        {recipes.length > 0 ? (
          recipes.map((recipe, index) => (
            <Card key={index} containerStyle={styles.card}>
              {/* Recipe Image with error handling*/}
              {recipe.image && (
                <Image
                  source={{
                   uri: imageError[index]
                    ? "https://via.placeholder.com/200" // NEW: Fallback image URL"
                    :recipe.image,
                    }}
                  style={styles.image}
                  resizeMode="cover" // Ensures image covers the container uniformly
                  onError={() => handleImageError(index)}
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
    backgroundColor: "#FFFFFF",
  },
  card: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#FFFFFF",
  },
  image: {
    height: 200, // Fixed height for uniformity
    width: "100%", // Full width of the card
    borderRadius: 10,
    marginBottom: 10, // Add margin between image and text
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
    color: "#20B2AA",
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
    color: "#20B2AA",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#20B2AA",
    marginTop: 10,
    borderRadius: 5,
  },
});
