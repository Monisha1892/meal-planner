import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import { Text } from "react-native-elements";

const CategoryRecipesScreen = ({ route, navigation }) => {
  const { categoryId } = route.params; // Get category ID from route params
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    // Fetch recipes based on the categoryId
    const fetchRecipes = async () => {
      try {
        // Use the correct endpoint to fetch recipes by diet category
        const response = await fetch(`http://192.168.56.1:3011/recipes/diet/${categoryId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("API Response:", data); // Log the API response
        console.log("I am here !!");
        setRecipes(data); // Assuming data is an array of recipes
        console.log(data.length);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setLoading(false); // Stop loading once the data is fetched
      }
    };

    fetchRecipes();
  }, [categoryId]);

  const handleRecipePress = (recipeId) => {
    navigation.navigate("RecipeDetails", { recipeId }); // Navigate to RecipeDetails with recipe ID
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  console.log("Recipes data:", recipes);
   return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.recipesTitle}>Associated Recipes:</Text>
        {recipes.length === 0 ? (
          <Text style={styles.noRecipesText}>No recipes available for this category.</Text>
        ) : (
          <FlatList
            data={recipes}
            keyExtractor={(recipe) => recipe.id.toString()} // Ensure unique IDs for each recipe
            renderItem={({ item }) => {
              console.log("Rendering recipe:", item); // Log the current recipe item
              return (
                <TouchableOpacity
                  style={styles.card}
                  onPress={() => handleRecipePress(item.id)}
                >
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <Image source={{ uri: item.image }} style={styles.cardImage} />{/* Recipe image */}
                </TouchableOpacity>
              );
            }}
          />
        )}
      </SafeAreaView>
    );
  };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  recipesTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "#f8f8f8", // Background color for the card
    padding: 15,
    borderRadius: 10,
    elevation: 2, // For shadow effect on Android
  },
  cardTitle: {
    fontSize: 18,
    flex: 1, // Allow title to take available space
  },
  cardImage: {
    width: 60, // Set a fixed width for the image
    height: 60, // Set a fixed height for the image
    borderRadius: 10, // Optional: adds rounded corners to the image
    marginLeft: 10, // Space between the title and image
  },
  noRecipesText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    color: "gray",
  },
});

export default CategoryRecipesScreen;
