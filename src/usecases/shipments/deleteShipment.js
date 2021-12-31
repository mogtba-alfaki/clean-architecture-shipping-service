function deleteShipmentFactory(shipmentAccess) { 
    return async function deleteShipment(shipmentId) { 
        return await shipmentAccess.deleteShipment(shipmentId); 
    }
} 

module.exports = deleteShipmentFactory;