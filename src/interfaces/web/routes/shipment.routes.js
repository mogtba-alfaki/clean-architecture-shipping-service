const express = require("express"); 
const router = express.Router(); 
const shipmentController = require("../controllers/shipment.controller"); 

router.get("/allShipments", shipmentController.getAllShipments); 
router.post("/shipment", shipmentController.addShipment); 
router.get("/shipment/:id", shipmentController.getShipment);  
router.patch("/shipment/:id", shipmentController.updateShipment); 
router.patch("/shipment/:id/delivery", shipmentController.markReadyForDelivery); 
router.delete("/delete/:id", shipmentController.deleteShipment);  

module.exports = router;