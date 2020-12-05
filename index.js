// based on https://github.com/adriancanog/api-crud-mysql.git


// INIT EXPRESS
const express = require("express");
const app = express();
// INIT BODY-PARSER
const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
// SET ROUTES
const routes = require("./contactosRoutes");
app.use(["/contactos","/contacts","/employees"], routes); // accesible from multiple entries
//MODEL - conectar con datos
var sql = require('./contactosModel')
sql.connect();


const serverport = 3000
app.listen(serverport, function() {
    console.log('Server is up on port '+ serverport);
})