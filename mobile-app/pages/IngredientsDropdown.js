import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const IngredientsDropdown = ({ onSelectIngredient }) => { // Receive the callback as a prop
    const [ingredients, setIngredients] = useState([]);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null); // Only a single selected value

    useEffect(() => {
        const fetchIngredients = async () => {
            try {
                const response = await axios.get('http://192.168.56.1:3011/ingredients');
                const options = response.data.map(ingredient => ({
                    label: ingredient.name,
                    value: ingredient.id,
                }));
                setIngredients(options);
            } catch (error) {
                console.error('Error fetching ingredients:', error);
            }
        };

        fetchIngredients();
    }, []);

    useEffect(() => {
        // Call the parent component's function when an ingredient is selected
        if (value) {
            const selectedIngredient = ingredients.find(item => item.value === value);
            if (selectedIngredient) {
                onSelectIngredient(selectedIngredient); // Send the selected ingredient back to the parent
            }
        }
    }, [value]);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Select Ingredients:</Text>
            <DropDownPicker
                open={open}
                value={value}
                items={ingredients}
                setOpen={setOpen}
                setValue={setValue}
                placeholder="Select ingredients..."
                style={styles.dropdown}
                containerStyle={{ height: 40 }}
                itemSeparator={true}
            />
            {/* Display the selected ingredient */}
            {value && (
                <Text style={styles.selectedText}>
                    Selected Ingredient: {ingredients.find(item => item.value === value)?.label}
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
    selectedText: {
        marginTop: 10,
        fontSize: 14,
        color: 'blue', // Style for the selected ingredient
    },
});

export default IngredientsDropdown;
