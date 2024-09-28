import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function RecipeDetails({ route }) {
  const { recipe } = route.params;
  console.log("Received recipe: ", recipe); // Log to verify

  //Parse the method field from JSON
  const methodSteps = JSON.parse(recipe.method)

  return (
    <ScrollView style={styles.container}>
      {/* Display recipe title */}
      <Text style={styles.title}>{recipe.title}</Text>

      {/* Display recipe times */}
      <Text style={styles.details}>Prep Time: {recipe.time_prep}</Text>
      <Text style={styles.details}>Cook Time: {recipe.time_cook}</Text>

      {/* Dynamically display recipe method */}
      <Text style={styles.methodTitle}>Method:</Text>
      {Object.entries(methodSteps).map(([stepNumber, stepInstruction]) => (
        <Text key={stepNumber} style={styles.method}>
         {`${stepNumber}: ${stepInstruction}`}
        </Text>
      ))}

      {/* Display any additional notes */}
      <Text style={styles.details}>Notes: {recipe.notes}</Text>
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
    marginBottom: 10,
  },
  details: {
    fontSize: 16,
    marginBottom: 10,
  },
  methodTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  method: {
    fontSize: 16,
    marginBottom: 10,
  },
});
