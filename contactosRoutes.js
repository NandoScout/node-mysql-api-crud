 
const express = require('express');
const router = express.Router();
const contactosController = require('./contactosController');

// app.use("/contactoss",router);
router.get("/", contactosController.getAllContacts );
router.get("/:id", contactosController.getOneContact );
router.post("/nuevo", contactosController.addContact );
router.put("/modificar/:id", contactosController.modifyContact );
router.delete("/eliminar/:id", contactosController.deleteContact );
 
module.exports = router;