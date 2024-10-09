import React, { useEffect, useState } from "react";
import { Text, StyleSheet, ScrollView, Image, Button } from "react-native";
import FavoriteRecipeButton from "../components/FavoriteRecipeButton";

export default function RecipeDetails({ route }) {
  const { recipeId } = route.params; // Get recipeId from route params
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch recipe details from the API
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`http://192.168.56.1:3011/recipes/${recipeId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch recipe.");
        }
        const data = await response.json();
        console.log("Fetched recipe data:", data); // Log fetched data
        // Access recipe properties from the nested structure
        setRecipe(data.recipe); // Set the recipe object
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [recipeId]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  // Ensure recipe is defined
  if (!recipe) {
    return <Text>No recipe found.</Text>;
  }

  // Destructure recipe properties
  const { title, image, timePrep, timeCook, ingredients, method, notes } =
    recipe;

  console.log("Method string before parsing:", method);

  // Ensure method is an object
  let methodSteps = [];
  if (typeof method === "string") {
    try {
      // Try to parse it if it's a string
      const parsedMethod = JSON.parse(method.trim());
      methodSteps = Object.entries(parsedMethod);
    } catch (error) {
      console.error("Error parsing method:", error);
    }
  } else if (typeof method === "object" && method !== null) {
    // If it's already an object
    methodSteps = Object.entries(method);
  } else {
    console.error("Method is not a valid object or string:", method);
  }

  return (
    <ScrollView style={styles.container}>
      {/* Display recipe title */}
      <Text style={styles.title}>{title}</Text>

      <FavoriteRecipeButton recipeId={recipe.id}/>

      {/* Display recipe image */}
      <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />

      {/* Display recipe times */}
      <Text style={styles.details}>Prep Time: {timePrep || "N/A"}</Text>
      <Text style={styles.details}>Cook Time: {timeCook || "N/A"}</Text>

      {/* Display recipe ingredients */}
      <Text style={styles.ingredientsTitle}>Ingredients:</Text>
      {Array.isArray(ingredients) && ingredients.length > 0 ? (
        ingredients.map((ingredient, index) => (
          <Text key={index} style={styles.ingredientsText}>
            {ingredient.measurement} {ingredient.name}
          </Text>
        ))
      ) : (
        <Text style={styles.ingredientsText}>No ingredients listed</Text>
      )}

      <Text style={styles.methodTitle}>Method:</Text>
      {methodSteps.length > 0 ? (
        methodSteps.map(([step, instruction], index) => (
          <Text key={index} style={styles.method}>
            {`${step}: ${instruction}`}{" "}
            {/* Ensure the step and instruction are displayed correctly */}
          </Text>
        ))
      ) : (
        <Text style={styles.method}>No method instructions available.</Text>
      )}

      {/* Display any additional notes */}
      <Text style={styles.details}>
        Notes: {notes || "No notes available."}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FF6347",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  details: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2E8B57",
    marginBottom: 10,
  },
  ingredientsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    color: "#FF8C00",
  },
  ingredientsText: {
    fontSize: 16,
    color: "#2E8B57",
    marginBottom: 10,
  },
  methodTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    color: "#FF8C00",
  },
  method: {
    fontSize: 16,
    color: "#2E8B57",
    marginBottom: 10,
  },
});
