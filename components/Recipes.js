// components/Recipes.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Recipes() {
  return (
    <View style={styles.container}>
      <Text>Recipes Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});