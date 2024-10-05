// components/UserAccount.js

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NavigationBar from "./NavigationBar";

export default function UserAccount({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Navigation Bar */}
      <NavigationBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
