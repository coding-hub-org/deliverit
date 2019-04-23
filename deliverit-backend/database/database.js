var mysql = require("mysql");
var credentials = require("../config/database");

class Database {
  constructor(credentials) {
    this.connection = mysql.createConnection(credentials);
    this.runQuery = this.runQuery.bind(this);
  }

  runQuery(queryString) {
    return new Promise((resolve, reject) => {
      this.connection.query(queryString, function(error, results, fields) {
        if (error) {
          reject(error);
        } else {
          resolve(JSON.parse(JSON.stringify(results)));
        }
      });
    });
  }
}

let database = new Database(credentials);

module.exports = database;
