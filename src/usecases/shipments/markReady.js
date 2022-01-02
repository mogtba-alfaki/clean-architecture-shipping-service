function markReadyForDeliveryFactory(shipmentAccess) { 
    return async function makrReadyForDelivery(shipmentId) { 
        // thought: lookup should it be refactored to make a markReady method on shipmentAccess?
        const shipmentFound = await shipmentAccess.getShipmentById(shipmentId); 
        return await shipmentAccess.updateShipment(shipmentFound.id, {"ready_for_delivery": true}); 
    } 
}

module.exports = markReadyForDeliveryFactory;