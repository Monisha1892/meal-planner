import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

const IngredientDetailsScreen = ({ route, navigation }) => {
  const { ingredientId, ingredientName } = route.params; // Get ingredient ID from navigation parameters
  const [ingredientDetails, setIngredientDetails] = useState(null);
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    // Fetch ingredient details from the API
    const fetchIngredientDetails = async () => {
      try {
        if (ingredientId) {
          const response = await fetch(
            `http://192.168.56.1:3011/ingredients/${ingredientId}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch ingredient details.");
          }
          const data = await response.json();
          console.log("Fetched ingredient details:", data);
          setIngredientDetails(data);
        } else if (ingredientName) {
          const response = await fetch(
            `http://192.168.56.1:3011/ingredients/name/${ingredientName}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch ingredient details.");
          }
          const data = await response.json();
          console.log("Fetched ingredient details:", data);
          setIngredientDetails(data);
        }
      } catch (error) {
        setError("Error fetching ingredient details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchIngredientDetails(); // Call the async function to fetch ingredient details
  }, [ingredientId]);

  // Loading state
  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  // Error state
  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  // Destructure ingredient and recipes from the fetched data
  const { ingredient, recipes } = ingredientDetails;

  const handleRecipePress = (recipeId) => {
    navigation.navigate("RecipeDetails", { recipeId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{ingredient.name}</Text>
      <Image source={{ uri: ingredient.image }} style={styles.image} />
      <Text style={styles.nutritionText}>
        Nutritional Information: {ingredient.nutritional_information}
      </Text>

      <Text style={styles.recipesTitle}>Associated Recipes:</Text>
      <FlatList
        data={recipes}
        keyExtractor={(recipe) => recipe.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => handleRecipePress(item.id)}
          >
            <Text style={styles.cardTitle}>{item.title}</Text>
            {/* You can add an image or other details here */}
            <Image source={{ uri: item.image }} style={styles.cardImage} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "red",
    alignSelf: "center",
  },
  image: {
    width: 300,
    height: 200,
    marginVertical: 10,
    alignSelf: "center",
  },
  nutritionText: {
    marginVertical: 10,
    fontSize: 16,
    color: "green",
  },
  recipesTitle: {
    fontSize: 20,
    marginVertical: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 3, // Shadow effect on Android
    shadowColor: "#000", // Shadow color for iOS
    shadowOffset: { width: 0, height: 1 }, // Shadow offset
    shadowOpacity: 0.2, // Shadow opacity
    shadowRadius: 1, // Shadow radius
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardImage: {
    width: "100%",
    height: 100,
    borderRadius: 5,
    marginTop: 5,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
  },
});

export default IngredientDetailsScreen;
