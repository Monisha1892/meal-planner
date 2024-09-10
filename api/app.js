const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = 3011;

// TLS connections
// HTTPS
// encrypt passwords

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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

function login(email, password, res) {
  const query = `SELECT * FROM users WHERE email='${email}'`;
  DB.submitBasicQuery(query, (results) => {
    if (results.length === 1 && results[0].password === password) {
      res.send({
        response: "Success",
        email: results[0].email,
        id: results[0].id,
        firstName: results[0].first_name,
        lastName: results[0].last_name,
      });
      return;
    }

    res.send({ response: "Incorrect email or password" });
    return;
  });
}

app.get("/recipes", (_req, res) => {
  getAllRecipes(res);
});

app.use("/login", (req, res) => {
  const email = req.body.args.email;
  const password = req.body.args.password;
  login(email, password, res);
});
