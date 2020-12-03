 
const express = require('express');
const router = express.Router();
const contactosController = require('./contactosController');

// app.use("/contactoss",router);
router.get("/", contactosController.getAllProducts );
router.get("/:id", contactosController.getOneProduct );
router.post("/nuevo", contactosController.addProduct );
router.put("/modificar/:id", contactosController.modifyProduct );
router.delete("/eliminar/:id", contactosController.deleteProduct );
 
module.exports = router;