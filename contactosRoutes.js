 
const express = require('express');
const router = express.Router();
const contactosController = require('./contactosController');

// app.use("/contactoss",router);
router.get("/", contactosController.getAllContacts );   // GET http://fbroqua.sytes.net/contacts
router.get("/:id", contactosController.getOneContact ); // GET http://fbroqua.sytes.net/contacts/11
router.post("/", contactosController.addContact );      // POST http://fbroqua.sytes.net/contacts
router.put("/:id", contactosController.modifyContact ); // PUT http://fbroqua.sytes.net/contacts/11
router.patch("/:id", contactosController.modifyContact ); // PATCH http://fbroqua.sytes.net/contacts/11
router.delete("/:id", contactosController.deleteContact ); // DELETE http://fbroqua.sytes.net/contacts/11

router.post("/agregar", contactosController.addContact ); // POST http://fbroqua.sytes.net/contacts/agregar
router.put("/modificar/:id", contactosController.modifyContact );  // PUT http://fbroqua.sytes.net/contacts/modificar/11
router.delete("/eliminar/:id", contactosController.deleteContact ); // DELETE http://fbroqua.sytes.net/contacts/eliminar/11
 
module.exports = router;