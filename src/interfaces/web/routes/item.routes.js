const express = require("express"); 
const router = express.Router(); 
const itemController = require("../controllers/item.controller"); 

router.get("/allItems", itemController.getAllItems); 
router.post("/addItem", itemController.addItem); 

module.exports = router;
