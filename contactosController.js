//DATOS DE CONTACTO
let data = require("./contactosModel");

function getAllContacts(req, res){
  res.status(200).json(data);
}
function getOneContact(req, res) {
  let producto = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });

  if (producto) {
    res.status(200).json(producto);
  } else {
    res.status(404).json("No se encontró producto");
  }
}

function addContact(req, res) {
     
  let itemIds = data.map(item => item.id);
  let nuevoId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1;

    let nuevoContacto = {
        id: nuevoId,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        idsector: req.body.idsector
    }
  
    data.push(nuevoContacto);

    res.status(201).json(nuevoContacto);
}

function modifyContact(req, res) {
  
  let producto = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });

  if(producto){
   
    let modificarContacto = {
        id: req.params.id, //req.body.id,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        idsector: req.body.idsector
    }
  
    let encontrado = data.indexOf(producto)

    data.splice(encontrado, 1, modificarContacto )

    res.status(200).json("producto modificado");

  }else{
      res.status(404).json("No existe producto");
  }

}

function deleteContact(req, res) {
  let producto = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });

  if(producto){
   
    let encontrado = data.indexOf(producto)

    data.splice(encontrado, 1 )

    res.status(200).json("producto Eliminado");

  }else{
      res.status(404).json("No existe producto");
  }
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

