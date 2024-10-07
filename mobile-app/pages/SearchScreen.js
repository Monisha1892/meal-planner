import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Button, Card } from "react-native-elements";
import NavigationBar from "./NavigationBar";
import IngredientsDropdown from "./IngredientsDropdown"; // Ensure this is correctly imported

export default function SearchScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIngredient, setSelectedIngredient] = useState(null); // State for selected ingredient

  const handleIngredientSelect = (ingredient) => {
    console.log("Selected Ingredient:", ingredient); // Log the selected ingredient
    setSelectedIngredient(ingredient);
  };

  const handleIngredientSearch = () => {
    console.log("I am working");
    console.log("Selected Ingredient:", selectedIngredient);
    if (selectedIngredient && selectedIngredient.value) {
      // Use 'value' instead of 'id'
      navigation.navigate("IngredientDetailsScreen", {
        ingredientId: selectedIngredient.value,
      });
    } else {
      console.log("No ingredient selected.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Search by Ingredient Image"
          onPress={() => navigation.navigate("SearchByImage")}
        />
        <Card containerStyle={styles.card}>
          <Card.Title>Search by Query</Card.Title>
          <Card.Divider />
          <TextInput
            style={styles.input}
            placeholder="Enter your search query"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <Button
            title="Search"
            onPress={() => console.log("Searching:", searchQuery)}
            containerStyle={styles.buttonStyle}
          />
        </Card>

        <Card containerStyle={styles.card}>
          <Card.Title>Search by Ingredient</Card.Title>
          <Card.Divider />
          <IngredientsDropdown onSelectIngredient={handleIngredientSelect} />

          <Button
            title="Search"
            onPress={handleIngredientSearch} // Search button triggers navigation
            containerStyle={styles.buttonStyle}
          />
        </Card>

        <Card containerStyle={styles.card}>
          <Card.Title>Search by Diet</Card.Title>
          <Card.Divider />
          <TextInput
            style={styles.input}
            placeholder="Enter diet type"
            onChangeText={(text) => console.log("Searching diet:", text)}
          />
          <Button
            title="Search"
            onPress={() => console.log("Searching diet")}
            containerStyle={styles.buttonStyle}
          />
        </Card>
      </View>

      <NavigationBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
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
