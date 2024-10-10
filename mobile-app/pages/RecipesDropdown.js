import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const RecipesDropdown = ({ onSelectRecipe }) => {
    const [recipes, setRecipes] = useState([]);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null); // Only a single selected value

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get('http://192.168.56.1:3011/recipes'); // Adjust the API endpoint as needed
                const options = response.data.map(recipe => ({
                    label: recipe.title, // Assuming 'title' is the property for the recipe name
                    value: recipe.id, // Assuming 'id' is the unique identifier for the recipe
                }));
                setRecipes(options);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };

        fetchRecipes();
    }, []);

    useEffect(() => {
        // Call the parent component's function when a recipe is selected
        if (value) {
            const selectedRecipe = recipes.find(item => item.value === value);
            if (selectedRecipe) {
                onSelectRecipe(selectedRecipe); // Send the selected recipe back to the parent
            }
        }
    }, [value]);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Select Recipe:</Text>
            <DropDownPicker
                open={open}
                value={value}
                items={recipes}
                setOpen={setOpen}
                setValue={setValue}
                placeholder="Select a recipe..."
                style={styles.dropdown}
                containerStyle={{ height: 40 }}
                itemSeparator={true}
                // Ensure that the dropdown item is rendered correctly
                dropDownContainerStyle={styles.dropdownContainer}
            />
            {/* Display the selected recipe */}
            {value && (
                <Text style={styles.selectedText}>
                    Selected Recipe: {recipes.find(item => item.value === value)?.label}
                </Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    label: {
        marginBottom: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    dropdown: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
    },
    dropdownContainer: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
    },
    selectedText: {
        marginTop: 10,
        fontSize: 14,
        color: 'blue', // Style for the selected recipe
    },
});

export default RecipesDropdown;
