const express = require("express"); 
const router = express.Router(); 
const itemController = require("../controllers/item.controller"); 

router.get("/allItems", itemController.getAllItems); 
router.post("/item", itemController.addItem); 
router.get("/item/:id", itemController.getItem);  
router.patch("/item/:id", itemController.updateItem); 
router.patch("/item/:id/breakable", itemController.markBreakable); 
router.delete("/delete/:id", itemController.deleteItem);  

module.exports = router;
