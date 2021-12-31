function updateShipmentFactory(shipmentAccess) { 
    return async function updateShipment(id, data) { 
        const result = await shipmentAccess.updateShipment(id, data); 
        return result; 
    }
} 

module.exports = updateShipmentFactory; 