
// MYSQL CONNECTION
const mysql = require("mysql")
var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ads"
})

function connect(fn) {
    if(conn.state === 'disconnected'){
        conn.connect(function(err) {
            if (err) { throw err }
            console.log("DB connected")
            if (fn !== undefined) {
                console.log("DB run function "+fn.name)
                fn()
            }
        })
    } else {
        if (fn !== undefined) {
            console.log("DB run function "+fn.name)
            fn()
        }
    }
}

function getAll() {
    conn.query("", function() {})
}

function findOne() {
    conn.query("", function() {})
}

function assign() {
    conn.query("", function() {})
}

function remove() {
    conn.query("", function() {})
}


//DATOS DE CONTACTOS

// var fw = requir)e('./local_modules/filewrite');

let data = [{ id: 1, nombre: "Heladera", precio: 50000, stock: 20 }];

function save(obj) {
    // fw.writeLine();
}
module.exports = {
    connect,
    getAll,
    findOne,
    assign,
    remove,
    data,
    conn
}
