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



app.use(3000, function() {
    console.log('Server up');
})