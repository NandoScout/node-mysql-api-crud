// INIT EXPRESS
const xp = require("express");
const app = xp.express();
// INIT BODY-PARSER
const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
// SET ROUTES
const routes = require("contactosRoutes");
app.use("/contactos", routes);
// MYSQL CONNECTION
const mysql = require("mysql")
var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ads"
})
conn.connect(function(err) {
    if (err) { throw err }
    console.log("DB connected")
})


app.use(3000, function() {
    console.log('Server up');
})