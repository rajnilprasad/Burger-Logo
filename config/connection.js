var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "e11wl4mksauxgu1w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "rxpryw1pppuispo1",
  password: "u9cbkrnpulg4kyph",
  database: "ve6ufkfrki8ydrg3"
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;

