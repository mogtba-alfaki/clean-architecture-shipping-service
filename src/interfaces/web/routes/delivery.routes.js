const express = require("express"); 
const router = express.Router(); 
const deliveryController = require("../controllers/delivery.controller"); 

router.get("/allDeliveries", deliveryController.getAllDeliveries); 
router.post("/delivery", deliveryController.addDelivery); 
router.get("/delivery/:id", deliveryController.getDelivery);  
router.patch("/delivery/:id", deliveryController.updateDelivery); 
router.delete("/delete/:id", deliveryController.deleteDelivery);  

module.exports = router;
