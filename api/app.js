const express = require("express");
const app = express();
const cors = require("cors");
const port = 3011;

const bodyParser = require("body-parser");

const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

app.use(cors()); // To allow cross-origin requests

// TLS connections
// HTTPS
// encrypt passwords

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Database connection
const DB = require("./DBConnection");

dotenv.config();

function generateAccessToken(username, id) {
  return jwt.sign({ username, id }, process.env.TOKEN_SECRET, {
    expiresIn: "30 days",
  });
}

async function sha256(message) {
  // encode as UTF-8
  const msgBuffer = new TextEncoder().encode(message);                    

  // hash the message
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

  // convert ArrayBuffer to Array
  const hashArray = Array.from(new Uint8Array(hashBuffer));

  // convert bytes to hex string                  
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

// Function to get a specific recipe by ID along with its ingredients
function getRecipeWithIngredients(recipeId, res) {
  const queryRecipe = `SELECT * FROM recipes WHERE id='${recipeId}'`;
  const queryIngredients = `
        SELECT *
        FROM ingredients_to_recipes
        LEFT JOIN ingredients ON ingredients_to_recipes.ingredient_id=ingredients.id
        WHERE ingredients_to_recipes.recipe_id='${recipeId}'
    `;

  // Fetch recipe details
  DB.submitBasicQuery(queryRecipe, (recipeResults) => {
    if (recipeResults.length === 1) {
      // Fetch ingredients if the recipe exists
      DB.submitBasicQuery(queryIngredients, (ingredientsResults) => {
        if (ingredientsResults.length > 0) {
          const recipe = recipeResults[0];
          res.send({
            response: "Success",
            recipe: {
              id: recipe.id,
              title: recipe.title,
              method: recipe.method,
              notes: recipe.notes,
              timePrep: recipe.time_prep,
              timeCook: recipe.time_cook,
              timeWait: recipe.time_wait,
              image: recipe.image,
              categoryDiet: recipe.category_diet,
              categoryStyle: recipe.category_style,
              ingredients: ingredientsResults,
            },
          });
        } else {
          res.send({ response: "No ingredients found for this recipe." });
        }
      });
    } else {
      res.send({ response: "No recipe found with this ID." });
    }
  });
}

function getAllRecipes(res) {
  const query = `
    SELECT id, title, image, category_diet, category_style
    FROM recipes;
  `;

  DB.submitBasicQuery(query, (results) => {
    if (results.length > 0) {
      res.send(results);
    } else {
      res.send({ response: "No recipes found" });
    }
  });
}

// Function to get all ingredients
function getAllIngredients(res) {
  const query = `SELECT id, name FROM ingredients;`; // Fetch only ID and name for dropdown

  DB.submitBasicQuery(query, (results) => {
    if (results.length > 0) {
      res.send(results);
    } else {
      res.send({ response: "No ingredients found" });
    }
  });
}

function getIngredientDetailsWithRecipes(ingredientId, res) {
  const ingredientQuery = `SELECT * FROM ingredients WHERE id='${ingredientId}'`; // Using parameterized query
  const recipeQuery = `
        SELECT recipes.id, recipes.title, recipes.image
        FROM ingredients_to_recipes
        LEFT JOIN recipes ON ingredients_to_recipes.recipe_id=recipes.id
        WHERE ingredients_to_recipes.ingredient_id='${ingredientId}'`;

  // Fetch ingredient details
  DB.submitBasicQuery(ingredientQuery, (ingredientResults, error) => {
    console.log("Ingredients with recipes api");
    if (error) {
      console.error("Database error:", error); // Log database error
      return res
        .status(500)
        .send({ response: "Database error while fetching ingredient." });
    }

    if (ingredientResults.length === 1) {
      // Fetch associated recipes if the ingredient exists
      DB.submitBasicQuery(recipeQuery, (recipeResults, error) => {
        if (error) {
          console.error("Database error:", error); // Log database error
          return res
            .status(500)
            .send({ response: "Database error while fetching recipes." });
        }

        res.send({
          ingredient: ingredientResults[0],
          recipes: recipeResults,
        });
      });
    } else {
      res.status(404).send({ response: "No ingredient found with this ID." });
    }
  });
}

function getIngredientDetailsByNameWithRecipes(ingredientName, res) {
  const ingredientQuery = `SELECT * FROM ingredients WHERE name='${ingredientName}'`; // Using parameterized query

  // Fetch ingredient details
  DB.submitBasicQuery(ingredientQuery, (ingredientResults, error) => {
    console.log("Ingredients with recipes api");
    if (error) {
      console.error("Database error:", error); // Log database error
      return res
        .status(500)
        .send({ response: "Database error while fetching ingredient." });
    }

    if (ingredientResults.length === 1) {
      const recipeQuery = `
      SELECT recipes.id, recipes.title, recipes.image
      FROM ingredients_to_recipes
      LEFT JOIN recipes ON ingredients_to_recipes.recipe_id=recipes.id
      WHERE ingredients_to_recipes.ingredient_id='${ingredientResults[0].id}'`;
      // Fetch associated recipes if the ingredient exists
      DB.submitBasicQuery(recipeQuery, (recipeResults, error) => {
        if (error) {
          console.error("Database error:", error); // Log database error
          return res
            .status(500)
            .send({ response: "Database error while fetching recipes." });
        }

        res.send({
          ingredient: ingredientResults[0],
          recipes: recipeResults,
        });
      });
    } else {
      res.status(404).send({ response: "No ingredient found with this Name." });
    }
  });
}


// Function to get all diet categories
function getDietCategories(res) {
  const query = `SELECT DISTINCT category_diet FROM recipes;`; // Fetch distinct diet categories

  DB.submitBasicQuery(query, (results) => {
    console.log({ results });

    if (results.length > 0) {
      res.send(results.map(row => row.category_diet)); // Return only the category names
    } else {
      res.send({ response: "No diet categories found" });
    }
  });
}

// Function to fetch recipes by diet category
function getRecipesByDietCategory(category, res) {
  if (typeof category !== 'string' || category.trim() === '') {
    return res.status(400).send({ response: "Invalid category" });
  }

  // Basic sanitation to escape single quotes to prevent SQL injection
  const sanitizedCategory = category.replace(/'/g, "''");

  const query = `SELECT recipes.id, recipes.title, recipes.image
                 FROM recipes WHERE FIND_IN_SET('${sanitizedCategory}', category_diet)`;

  // Log the query for debugging purposes
  console.log("Executing Query:", query);

  // Execute the query
  DB.submitBasicQuery(query, (results) => {
    if (results.length > 0) {
      res.send(results); // Send the results if recipes are found
    } else {
      res.send({ response: "No recipes found" });
    }
  });
}




function login(email, password, res) {
  const query = `SELECT * FROM users WHERE email='${email}'`;
  DB.submitBasicQuery(query, (results) => {
    if (results.length === 1 && results[0].password === password) {
      const token = generateAccessToken({ email, id: results[0].id });
      res.send({
        response: "Success",
        email: results[0].email,
        id: results[0].id,
        firstName: results[0].first_name,
        lastName: results[0].last_name,
        token,
      });
      return;
    }

    res.send({ response: "Incorrect email or password" });
    return;
  });
}

function createUser(email, firstName, lastName, password, res) {
  const checkExistingUserQuery = `SELECT * FROM users WHERE email='${email}'`;
  DB.submitBasicQuery(checkExistingUserQuery, async (results) => {
    if (results.length > 0) {
      res.send({ response: "Could not create user." });
      return;
    }
    const encryptedPassword = await sha256(password)
    const insertQuery = `
      INSERT INTO users (email, first_name, last_name, password) 
      VALUES ('${email}', '${firstName}', '${lastName}', '${encryptedPassword}')
    `;

    DB.submitBasicQuery(insertQuery, (results) => {
      if (results) {
        const token = generateAccessToken(email, results.id);
        res.send({
          response: "Success",
          email: results.email,
          id: results.id,
          firstName: results.first_name,
          lastName: results.last_name,
          token,
        });
        return;
      }
    });
  });
}

function favorite(recipeId, userId, res) {
  const checkExistingQuery = `
    SELECT * FROM favorite_recipes 
    WHERE user_id=${userId} AND recipe_id=${recipeId}
  `;
  DB.submitBasicQuery(checkExistingQuery, (results) => {
    if (results.length > 0) {
      res.send({ response: "Recipe already saved to favorites" });
      return;
    }
    const insert = `
      INSERT INTO favorite_recipes (user_id, recipe_id)
      VALUES ('${userId}', '${recipeId}')
    `;

    DB.submitBasicQuery(insert, (results) => {
      if (results) {
        res.send({
          response: "Recipe successfully added to favorites",
          favoriteId: results.id,
        });
      }
    });
  });
}

function unfavorite(faveId, res) {
  const checkIfExisting = `
    SELECT * FROM favorite_recipes 
    WHERE id=${faveId}
  `;
  DB.submitBasicQuery(checkIfExisting, (results) => {
    if (results.length > 0) {
      res.send({ response: "Could not find recipe" });
      return;
    }

    const deleteQuery = `
      DELETE FROM favorite_recipes WHERE id=${faveId}
    `;
    DB.submitBasicQuery(deleteQuery, (results) => {
      if (results) {
        res.send({ response: "Success" });
      }
    });
  });
}

function getUser(userId, res) {
  const query = `SELECT first_name, last_name FROM users WHERE id=${userId}`;
  DB.submitBasicQuery(query, (userResults) => {
    if (userResults.length !== 1) {
      res.send({ response: "Could not find user" });
      return;
    }

    const favoritesQuery = `
      SELECT recipes.id, recipes.title, recipes.image
      FROM favorite_recipes
      LEFT JOIN recipes ON favorite_recipes.recipe_id=recipes.id
      WHERE favorite_recipes.user_id='${userId}'
    `;
    DB.submitBasicQuery(favoritesQuery, (results) => {
      res.send({
        response: "Success",
        user: userResults[0],
        favorites: results,
      });
      return;
    });
  });
}

app.get("/recipes", (_req, res) => {
  getAllRecipes(res);
});

// New endpoint to get a specific recipe by ID with ingredients
app.get("/recipes/:id/", (req, res) => {
  const recipeId = req.params.id; // Get recipe ID from request parameters
  getRecipeWithIngredients(recipeId, res); // Call the function with recipeId and response object
});

// New endpoint to get ingredient details and associated recipes by ID
app.get("/ingredients/:id", (req, res) => {
  const ingredientId = req.params.id; // Get ingredient ID from request parameters
  getIngredientDetailsWithRecipes(ingredientId, res); // Call the function with ingredientId and response object
});

// Endpoint to handle login
app.use("/login", (req, res) => {
  const email = req.body.args.email;
  const password = req.body.args.password;
  login(email, password, res);
});

// New endpoint to get all diet categories
app.get("/categories/diet", (_req, res) => {
  getDietCategories(res);
});



// Define the route for getting recipes by diet category
app.get('/recipes/diet/:category', (req, res) => {
  const category = req.params.category; // Get the category from the URL parameter
  getRecipesByDietCategory(category, res); // Call the function to fetch recipes
});


// New endpoint to get all ingredients
app.get("/ingredients", (_req, res) => {
  getAllIngredients(res);
});

// Endpoint to get ingredient by name
app.get("/ingredients/name/:name", (req, res) => {
  const ingredientName = req.params.name;
  getIngredientDetailsByNameWithRecipes(ingredientName, res);
});

app.post("/favorite", (req, res) => {
  const recipeId = req.body.args.recipeId;
  const userId = req.body.args.userId;
  favorite(recipeId, userId, res);
});

app.delete("/unfavorite", (req, res) => {
  const faveId = req.body.args.faveId;
  unfavorite(faveId, res);
});

app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  getUser(userId, res);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

app.post("/signup", (req, res) => {
  const email = req.body.args.email;
  const firstName = req.body.args.firstName;
  const lastName = req.body.args.lastName;
  const password = req.body.args.password;

  createUser(email, firstName, lastName, password, res);
});
