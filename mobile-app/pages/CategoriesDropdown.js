import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const CategoriesDropdown = ({ onSelectCategory }) => {
    const [categories, setCategories] = useState([]);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null); // Only a single selected value

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://192.168.56.1:3011/categories/diet'); // Updated endpoint for diet categories
                console.log("API Response:", response.data); // Log the API response
                const options = response.data.map((category) => ({
                    label: category, // Assuming your API returns category names as strings
                    value: category, // Using category name as value for simplicity
                }));
                setCategories(options);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    useEffect(() => {
        // Call the parent component's function when a category is selected
        if (value) {
            const selectedCategory = categories.find(item => item.value === value);
            if (selectedCategory) {
                onSelectCategory(selectedCategory.value); // Send the selected category back to the parent
            }
        }
    }, [value]);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Select a Diet Category:</Text>
            <DropDownPicker
                open={open}
                value={value}
                items={categories}
                setOpen={setOpen}
                setValue={setValue}
                placeholder="Select a category..."
                style={styles.dropdown}
                containerStyle={{ height: 40 }}
                itemSeparator={true}
            />
            {/* Display the selected category */}
            {value && (
                <Text style={styles.selectedText}>
                    Selected Category: {categories.find(item => item.value === value)?.label}
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
        color: 'blue', // Style for the selected category
    },
});

export default CategoriesDropdown;
