function getShipmentFactory(shipmentAccess) { 
    return async function getShipment(shipmentId) { 
        const shipmentFound = await shipmentAccess.getShipmentById(shipmentId);  
        return shipmentFound; 
    }
} 

module.exports = getShipmentFactory;