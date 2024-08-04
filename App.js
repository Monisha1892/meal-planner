import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchBar from './components/SearchBar';
import UserAccount from './components/UserAccount';
import Recipes from './components/Recipes';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <SearchBar />
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('UserAccount')}>
          <Image source={require('./assets/user-account.jpg')} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Recipes')}>
          <Image source={require('./assets/recipes.jpg')} style={styles.image} />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="UserAccount" component={UserAccount} />
        <Stack.Screen name="Recipes" component={Recipes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flexDirection: 'column',
    marginTop: 20,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginVertical: 10,
    borderRadius: 10,
  },
});
