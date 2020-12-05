 
const express = require('express');
const router = express.Router();
const contactosController = require('./contactosController');

// app.use("/contactoss",router);
router.get("/", contactosController.getAllContacts );
router.get("/:id", contactosController.getOneContact );
router.post("/", contactosController.addContact );
router.put("/:id", contactosController.modifyContact );
router.patch("/:id", contactosController.modifyContact );
router.delete("/:id", contactosController.deleteContact );

router.post("/agregar", contactosController.addContact );
router.put("/modificar/:id", contactosController.modifyContact );
router.delete("/eliminar/:id", contactosController.deleteContact );
 
module.exports = router;