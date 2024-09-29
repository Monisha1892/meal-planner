import React, { useEffect, useState, useRef } from "react";
import {
  Button,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  MultipleSelectList,
  SelectList,
} from "react-native-dropdown-select-list";
import { decode } from "base-64";
import { jwtDecode } from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

global.atob = decode;

const dietCategory = [
  { key: "VEGETARIAN", value: "Vegetarian" },
  { key: "VEGAN", value: "Vegan" },
  { key: "PALEO", value: "Paleo" },
  { key: "LOW_FAT", value: "Low Fat" },
  { key: "HALAL", value: "Halal" },
  { key: "KOSHER", value: "Kosher" },
  { key: "LOW_CARB", value: "Low Carb" },
  { key: "GLUTEN_FREE", value: "Gluten Free" },
];

const cookingStyleCategory = [
  { key: "COOKING", value: "Cooking" },
  { key: "BAKING", value: "Baking" },
  { key: "MIXOLOGY", value: "Mixology" },
];

const RecipeForm = ({ mode, recipeId, navigation }) => {
  const [submitting, setSubmitting] = useState(false);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState(null);
  const [selectedDietCategory, setSelectedDietCategory] = useState([]);
  const [selectedCookingStyleCategory, setSelectedCookingStyleCategory] =
    useState();
  const [prepTime, setPrepTime] = useState(null);
  const [cookTime, setCookTime] = useState(null);
  const [waitTime, setWaitTime] = useState(null);
  const [notes, setNotes] = useState(null);
  const [textValue, setTextValue] = useState("");
  const [numInputs, setNumInputs] = useState(1);
  const refInputs = useRef([textValue]);

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const setInputValue = (index, value) => {
    const inputs = refInputs.current;
    inputs[index] = value;
    setTextValue(value);
  };

  const addInput = () => {
    refInputs.current.push("");
    setNumInputs((value) => value + 1);
  };

  const removeInput = (i) => {
    refInputs.current.splice(i, 1)[0];
    setNumInputs((value) => value - 1);
  };

  const methodInputs = [];
  for (let i = 0; i < numInputs; i++) {
    methodInputs.push(
      <View key={i} style={{ flexDirection: "row", alignItems: "center" }}>
        <Text>{i + 1}.</Text>
        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={10000}
          onChangeText={(value) => setInputValue(i, value)}
          value={refInputs.current[i]}
          placeholder="Next step"
        />
        {/* To remove the input */}
        <Pressable onPress={() => removeInput(i)} style={{ marginLeft: 5 }}>
          <Text>Remove</Text>
        </Pressable>
      </View>
    );
  }

  function validateInput() {
    let errorRecord = {};
    if (!title) {
      errorRecord.title = "Recipe must have a title.";
    } else if (title.trim().length === 0) {
      errorRecord.title = "Recipe title cannot be empty";
    }

    if (selectedDietCategory.length === 0) {
      errorRecord.dietCategory = "At least one diet category must be selected";
    }

    if (selectedCookingStyleCategory.length === 0) {
      errorRecord.cookingStyleCategory = "A cooking style must be selected";
    }

    // if (!ingredients) {
    //   errorRecord.ingredients = "At least one ingredient must be selected";
    // }

    if (methodInputs.length === 1 && methodInputs[0].trim().length === 0) {
      errorRecord.method = "At least one step should be provided";
    }

    setErrors(errorRecord);
    setIsFormValid(Object.keys(errorRecord).length === 0);
  }

  async function handleSubmit() {
    validateInput();

    if (isFormValid) {
      const method = {};
      methodInputs.map(
        (value, index) => (method[(index + 1).toString()] = value)
      );

      const jsonMethod = JSON.stringify(method);

      const token = await AsyncStorage.getItem("UserJWT");
      const decoded = jwtDecode(token);

      const args = {
        ownerId: decoded.id,
        title,
        method: jsonMethod,
        notes,
        timePrep: prepTime,
        timeCook: cookTime,
        timeWait: waitTime,
        image: null,
        categoryDiet: selectedDietCategory,
        categoryStyle: selectedCookingStyleCategory,
      };
    }
  }

  if (mode === "edit") {
    numberOfSteps = Object.keys(method).length;
  }

  return (
    <SafeAreaView resizeMode="contain">
      {/* <Image /> */}
      <View>
        <TextInput
          placeholder="Recipe Title"
          value={title}
          onChange={setTitle}
          autoCorrect={false}
          autoCapitalize="none"
        />

        <MultipleSelectList
          data={dietCategory}
          setSelected={(val) => setSelectedDietCategory(val)}
          save="key"
          label="Diet Type"
        />

        <SelectList
          data={cookingStyleCategory}
          setSelected={(val) => setSelectedCookingStyleCategory(val)}
          save="key"
          label="Cooking Style"
        />

        <TextInput
          placeholder="Time for preparation"
          value={prepTime}
          onChange={setPrepTime}
          autoCorrect={false}
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Time for cooking"
          value={cookTime}
          onChange={setCookTime}
          autoCorrect={false}
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Time for waiting"
          value={waitTime}
          onChange={setWaitTime}
          autoCorrect={false}
          autoCapitalize="none"
        />

        {/* <>INGREDIENTS DROPDOWN</> */}

        <View>
          <Text>Method</Text>
          {methodInputs}
          <Pressable onPress={addInput}>
            <Text style={{ fontWeight: "bold" }}>+ Add a new input</Text>
          </Pressable>
        </View>

        <TextInput
          editable
          multiline
          placeholder="Notes"
          numberOfLines={4}
          maxLength={100}
          value={notes}
          onChange={setNotes}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <View>
        <Button title="Save" onPress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
};

export default RecipeForm;
