const express = require("express");
const app = express();
const port = 3011;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const DB = require("./DBConnection");

function getAllRecipes(res) {
  const query = "SELECT * FROM recipes";
  DB.submitBasicQuery(query, (results) => {
    if (results.length > 0) {
      res.send(results);
    } else {
      res.send("No recipes found");
    }
  });
}

app.get('/recipes', (_req, res) => {
  getAllRecipes(res)
})
