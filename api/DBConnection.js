const express = require("express");
const mysql = require("mysql2");
const dbConnect = {
  host: "localhost",
  port: "3306",
  user: "root",
  password: "Moni_1892",
  //password: "root-password",
  database: "meal_planner",
};

class DBConnector {
  connectToDB() {
    console.log("Starting DB connection");
    this.connection = mysql.createConnection(dbConnect);
    setTimeout(
      () =>
        this.connection.connect(function (err) {
          if (err) {
            return console.error("error: " + err.message);
          }
          console.log("Connected to the MySQL server.");
        }),

    );
    console.log(this.connection.state);
  }

  constructor() {
    this.connectToDB();
  }

  endConnection() {
    this.connection.end(function (err) {
      if (err) {
        return console.log("error: " + err.message);
      }
      console.log("Close the database connection.");
    });
  }

  submitBasicQuery(sql, onDone) {
    this.connection.query(sql, [true], (error, results) => {
      //testing stuff
      console.log(error);
      console.log("results below");
      console.log(">> results: ", results);
      onDone(results);
    });
  }
}

var DB = new DBConnector();
module.exports = DB;
