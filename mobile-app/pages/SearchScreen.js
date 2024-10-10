import React, { useState } from "react";
import { View, TextInput, StyleSheet, ScrollView } from "react-native";
import { Button, Card } from "react-native-elements";
import NavigationBar from "./NavigationBar";
import IngredientsDropdown from "./IngredientsDropdown"; // Ensure this is correctly imported
import RecipesDropdown from "./RecipesDropdown"; // Import the new dropdown
import CategoriesDropdown from "./CategoriesDropdown"; // Import the categories dropdown

export default function SearchScreen({ navigation }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedIngredient, setSelectedIngredient] = useState(null); //State of selected ingredient
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null); // State for selected category

    const handleIngredientSelect = (ingredient) => {
        console.log("Selected Ingredient:", ingredient);  //Log the selected ingredient
        setSelectedIngredient(ingredient);
    };

    const handleRecipeSelect = (recipe) => {
        console.log("Selected Recipe:", recipe);
        setSelectedRecipe(recipe);
        navigation.navigate("RecipeDetails", { recipeId: recipe.value });
    };

    const handleCategorySelect = (category) => {
        console.log("Selected Category:", category);
        setSelectedCategory(category); // Update the selected category
    };

    const handleIngredientSearch = () => {
        console.log("I am working");
        console.log("Selected Ingredient:", selectedIngredient);
        if (selectedIngredient && selectedIngredient.value) {
            navigation.navigate("IngredientDetailsScreen", {
                ingredientId: selectedIngredient.value,
            });
        } else {
            console.log("No ingredient selected.");
        }
    };

    const searchRecipes = () => {
        console.log("Searching recipes with query:", searchQuery);
        // Add your recipe searching logic here
    };

    const navigateToCategoryRecipes = () => {
        console.log("Navigating to CategoryRecipesScreen with ID:", selectedCategory);
        navigation.navigate("CategoryRecipesScreen", { categoryId: selectedCategory }); // Navigate to CategoryRecipesScreen with selected category ID
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {/*<View style={styles.buttonContainer}>*/}
                    <Card containerStyle={styles.card}>
                        <Card.Title>Search by Recipe Name</Card.Title>
                        <Card.Divider />
                        <RecipesDropdown onSelectRecipe={handleRecipeSelect} />
                        <Button
                            title="Search"
                            onPress={searchRecipes}
                            containerStyle={styles.buttonStyle}
                        />
                    </Card>

                    <Card containerStyle={styles.card}>
                        <Card.Title>Search by Ingredient Image</Card.Title>
                        <Card.Divider />
                        <Button
                            title="Search"
                            onPress={() => navigation.navigate("SearchByImage")}
                            containerStyle={styles.buttonStyle}
                        />
                    </Card>

                    <Card containerStyle={styles.card}>
                        <Card.Title>Search by Ingredient</Card.Title>
                        <Card.Divider />
                        <IngredientsDropdown onSelectIngredient={handleIngredientSelect} />
                        <Button
                            title="Search"
                            onPress={handleIngredientSearch}
                            containerStyle={styles.buttonStyle}
                        />
                    </Card>

                    <Card containerStyle={styles.card}>
                        <Card.Title>Search by Category</Card.Title>
                        <Card.Divider />
                        <CategoriesDropdown onSelectCategory={handleCategorySelect} />
                        <Button
                            title="Search"
                            onPress={navigateToCategoryRecipes} // Call the function to navigate
                            containerStyle={styles.buttonStyle}
                        />
                    </Card>

                {/*</View>*/}
            </ScrollView>
            <NavigationBar navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 70,
    },
    scrollView: {
        flexGrow: 1,
    },
    buttonContainer: {
        marginBottom: 20,
    },
    card: {
        marginVertical: 10,
    },
    input: {
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
});
