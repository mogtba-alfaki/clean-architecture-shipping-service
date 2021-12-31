const shipmentFactory = require("../../domain/shipment"); 
 
function addShipmentFactory(shipmentAccess) { 
    return  async function addShipment(shipmentInfo) { 
            shipmentInfo.id = Date.now().toString(); 
            const shipment = shipmentFactory(shipmentInfo); 
          return await shipmentAccess.addShipment(shipment); 
      }
} 

module.exports = addShipmentFactory; 