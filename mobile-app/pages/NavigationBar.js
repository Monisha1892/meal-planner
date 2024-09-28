import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icons library

const NavigationBar = ({ navigation }) => {
  return (
    <View style={styles.navBar}>
      {/* Back Button */}
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={30} color="#000" />
        <Text style={styles.navText}>Back</Text>
      </TouchableOpacity>

      {/* Home Button */}
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Home')}>
        <Icon name="home" size={30} color="#000" />
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>

      {/* User Account Button */}
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('UserAccount')}>
        <Icon name="user" size={30} color="#000" />
        <Text style={styles.navText}>Account</Text>
      </TouchableOpacity>
    </View>
  );
};

// Add styles as needed for your app
const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%', // Adjusted width to keep it within the screen
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    position: 'absolute', // Position it absolutely
    bottom: 0, // Align to the bottom of the screen
    left: '5%', // Center it by using left offset
    right: '5%', // Ensure it doesn't exceed the screen width
  },
  navButton: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#000',
    marginTop: 5,
  },
});

export default NavigationBar;

