import React from "react";
import RecipeForm from "../components/RecipeForm";
import { SafeAreaView } from "react-native";

export default function RecipeCreateOrEdit({ route, navigation }) {
  const { mode, recipeId } = route.params;
  return (
    <SafeAreaView>
      <RecipeForm
        mode={mode}
        recipeId={recipeId ?? null}
        navigation={navigation}
      />
    </SafeAreaView>
  );
}
