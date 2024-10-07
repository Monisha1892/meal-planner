-- Create new database named 'meal_planner'
CREATE DATABASE meal_planner;

-- Use the 'meal_planner' database
USE meal_planner;

-- Create server user that the API will use
CREATE USER 'sammy'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

-- Create user table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL
);

-- Create recipes table
CREATE TABLE recipes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    owner_user INT, -- Foreign key reference to the 'users' table
    title VARCHAR(255) NOT NULL,
    method LONGTEXT,
    notes LONGTEXT,
    time_prep VARCHAR(100),
    time_cook VARCHAR(100),
    time_wait VARCHAR(100),
    image VARCHAR(255),
    category_diet SET('VEGETARIAN', 'VEGAN', 'PALEO', 'LOW_FAT', 'HALAL', 'KOSHER', 'LOW_CARB', 'GLUTEN_FREE'),
    category_style SET('COOKING', 'BAKING', 'MIXOLOGY', 'GRILLING', 'STIR-FRY', 'SALAD'),
    FOREIGN KEY (owner_user) REFERENCES users(id)
);

-- Create ingredients table
CREATE TABLE ingredients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    image VARCHAR(255),
    nutritional_information LONGTEXT
);

-- Create ingredients_to_recipes table
CREATE TABLE ingredients_to_recipes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ingredient_id INT NOT NULL, -- Foreign key reference to the 'ingredients' table
    recipe_id INT NOT NULL, -- Foreign key reference to the 'recipes' table
    measurement VARCHAR(255),
    FOREIGN KEY (ingredient_id) REFERENCES ingredients(id),
    FOREIGN KEY (recipe_id) REFERENCES recipes(id)
);

-- Create favorite_recipes table
CREATE TABLE favorite_recipes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL, -- Foreign key reference to the 'users' table
    recipe_id INT NOT NULL, -- Foreign key reference to the 'recipes' table
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (recipe_id) REFERENCES recipes(id)
);
