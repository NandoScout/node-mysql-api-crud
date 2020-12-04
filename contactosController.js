//DATOS DE CONTACTO
let sql = require("./contactosModel");

function getAllContacts(req, res) {
  sql.conn.connect(function RA(){
    // let q = "SELECT * FROM `empleado`"
    let q = "SELECT e.`id`, e.`nombre`, e.`apellido`, e.`idsector`, s.`nombre` sector, e.`telefono` FROM `empleado` e INNER JOIN `sector` s ON (s.`id` = e.`idsector`)"
    sql.conn.query(q, function (error, results, fields) {
      if (error) throw error;
      res.json(results);
    });
  })
  /*res.status(200).json(data);*/
}
function getOneContact(req, res) {
  sql.conn.connect(function RO() {
    // let q = "SELECT * FROM empleado WHERE id=?"
    let q = "SELECT e.`id`, e.`nombre`, e.`apellido`, e.`idsector`, s.`nombre` sector, e.`telefono` FROM `empleado` e LEFT JOIN `sector` s ON (s.`id` = e.`idsector`)  WHERE e.id=?"
    sql.conn.query(
      q,
      [req.params.id],
      function (error, results, fields) {
        if (error) throw error;

        if (results.length == 0) {
          res.status(404).json("contacto inexistente:"+req.params.id);
        } else {
          res.json(results[0]);
        }
      }
    );
  })
 /* let producto = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });

  if (producto) {
    res.status(200).json(producto);
  } else {
    res.status(404).json("No se encontró producto");
  }*/
}

function addContact(req, res) {
  sql.conn.connect( function C(){

    let params = req.body;
    console.log(params);
  
    sql.conn.query('INSERT INTO `empleado` SET ?', params, function (error, results, fields) {
      //if (error) throw error;
      console.log(error)
      if (error)
        res.status(404).json("contacto no insertado ("+error.sqlMessage+")")
      else
      if (results.affectedRows > 0) {
        res.status(201).json("contacto insertado:"+results.insertId)
      } else {
        res.status(404).json("contacto no insertado "+results.message)
      }
      //res.status(201).json(results);
    });
  })

  /*let itemIds = data.map(item => item.id);
  let nuevoId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1;

  let nuevoContacto = {
    id: nuevoId,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    telefono: req.body.telefono,
    idsector: req.body.idsector
  }

  data.push(nuevoContacto);

  res.status(201).json(nuevoContacto);*/
}

function modifyContact(req, res) {
  sql.conn.connect(function U(){
    //let q = 'UPDATE `empleado` SET nombre=?, apellido=?, idsector=?, telefono=? WHERE id=?'
    let q =`UPDATE empleado SET ? WHERE id = ${req.params.id}`

    
    let params = req.body;
    console.log(params);
    // sql.conn.query(q, [req.body.nombre, req.body.apellido, req.body.idsector, req.body.telefono, req.params.id], function (error, results, fields) {})
    sql.conn.query(q, params, function (error, results, fields) {
      if (error) throw error;
      if (results.affectedRows > 0) {
        res.json(results.changedRow + " registro/s actualizado/s")
      } else {
        res.status(404).json("contacto inexistente:"+req.params.id)
      }
      //res.json(results); 
    })
  })
  /*let producto = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });

  if (producto) {

    let modificarContacto = {
      id: req.params.id, //req.body.id,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      telefono: req.body.telefono,
      idsector: req.body.idsector
    }

    let encontrado = data.indexOf(producto)

    data.splice(encontrado, 1, modificarContacto)

    res.status(200).json("producto modificado");

  } else {
    res.status(404).json("No existe producto");
  }*/

}

function deleteContact(req, res) {
  sql.conn.connect(function D(){
    sql.conn.query(
      "DELETE FROM `empleado` WHERE id=?",
      [req.params.id],
      function (error, results, fields) {
        if (error) throw error;
  
        if (results.affectedRows > 0) {
          res.json(results.changedRow + " registro/s actualizado/s")
        } else {
          res.status(404).json("contacto inexistente:"+req.params.id)
        }
        //res.json(results);
      }
    );
  })
  /*let producto = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });

  if (producto) {

    let encontrado = data.indexOf(producto)

    data.splice(encontrado, 1)

    res.status(200).json("producto Eliminado");

  } else {
    res.status(404).json("No existe producto");
  }*/
}

module.exports = {
  getAllContacts,
  getOneContact,
  modifyContact,
  addContact,
  deleteContact
}



/*
//TRAE UN SOLO PRODUCTO -> GET -> ID Por paramentro.
app.get("/productos/:id", function (req, res) {
  let producto = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });

  if (producto) {
    res.status(200).json(producto);
  } else {
    res.status(404).json("No se encontró producto");
  }
});

//CREAR PRODUCTO -> POST -> POR BODY(id, nombre, precio, stock)
app.post("/productos/nuevo", function (req, res) {
  let itemIds = data.map((item) => item.id);
  let nuevoId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1;

  let nuevoContacto = {
    id: nuevoId,
    nombre: req.body.nombre,
    precio: req.body.precio,
    stock: req.body.stock,
  };

  data.push(nuevoContacto);

  res.status(201).json(nuevoContacto);
});

//MODIFICAR PRODUCTO -> PUT -> POR BODY(nombre, precio, cantidad) -> POR PARAMETRO(id)
app.put("/productos/modificar/:id", function (req, res) {
  let producto = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });

  if (producto) {
    let modificarContacto = {
      id: req.body.id,
      nombre: req.body.nombre,
      precio: req.body.precio,
      stock: req.body.stock,
    };

    let encontrado = data.indexOf(producto);

    data.splice(encontrado, 1, modificarContacto);

    res.status(200).json("producto modificado");
  } else {
    res.status(404).json("No existe producto");
  }
});

//BORRAR PRODUCTO -> DELETE -> POR PARAMETRO(id)
app.delete("/productos/eliminar/:id", function (req, res) {
  let producto = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });

  if (producto) {
    let encontrado = data.indexOf(producto);

    data.splice(encontrado, 1);

    res.status(200).json("producto Eliminado");
  } else {
    res.status(404).json("No existe producto");
  }
});

*/

