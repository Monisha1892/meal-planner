import React from "react";
import { View } from "react-native";
import NavigationBar from "./NavigationBar";
import { Button } from "react-native-elements";

export default function SearchScreen({ navigation }) {
  return (
    <View>
      <View>
        <Button
          title="Search by Query"
          onPress={() => console.log("Search by Query")}
        />
        <Button
          title="Search by Ingredient"
          onPress={() => console.log("Search by Ingredient")}
        />
        <Button
          title="Search by Diet"
          onPress={() => console.log("Search by Diet")}
        />
      </View>
      <NavigationBar navigation={navigation} />
    </View>
  );
}
