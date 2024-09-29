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
  `

  DB.submitBasicQuery(query, (results) => {
    console.log({ results });

    if (results.length > 0) {
      res.send(results);
    } else {
      res.send({response: "No recipes found"});
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

// Existing endpoint to get all recipes

function createUser(email, firstName, lastName, password, res) {
  const checkExistingUserQuery = `SELECT * FROM users WHERE email='${email}'`;
  DB.submitBasicQuery(checkExistingUserQuery, (results) => {
    if (results.length > 0) {
      res.send({ response: "Could not create user." });
      return;
    }
    const insertQuery = `
      INSERT INTO users (email, first_name, last_name, password) 
      VALUES (${email}, ${firstName}, ${lastName}, ${password})
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

function createRecipe(data, res) {
  const insertIntoRecipe = `
    INSERT INTO recipes (owner_user, title, method, notes, time_prep, time_cook, time_wait, image, category_diet, category_style)
    VALUES (${data.ownerId}, ${data.title}, ${data.method}, ${data.notes}, ${data.timePrep}, ${data.timeWait}, ${data.image}, ${data.categoryDiet}, ${data.categoryStyle})
  `;
  DB.submitBasicQuery(insertIntoRecipe, (results) => {
    if (results) {
      res.send({ response: "Success" });
      return;
    }
    res.send({response: "Could not create recipe."})
  });
}

app.get("/recipes", (_req, res) => {
  console.log(1);
  getAllRecipes(res);
});

// New endpoint to get a specific recipe by ID with ingredients
app.get("/recipes/:id/", (req, res) => {
    const recipeId = req.params.id; // Get recipe ID from request parameters
    getRecipeWithIngredients(recipeId, res); // Call the function with recipeId and response object
});


// Endpoint to handle login
app.use("/login", (req, res) => {
  const email = req.body.args.email;
  const password = req.body.args.password;
  login(email, password, res);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.post("/signup", (req, res) => {
  const email = req.body.args.email;
  const firstName = req.body.args.firstName;
  const lastName = req.body.args.lastName;
  const password = req.body.args.password;

  createUser(email, firstName, lastName, password, res);
});

app.post("/create-recipe", (req, res) => {
  const data = req.body.args;
  createRecipe(data, res)
});
