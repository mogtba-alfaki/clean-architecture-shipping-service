function deleteDeliveryFactory(deliveryAccess) { 
    return async function deleteDelivery(deliveryId) { 
        return await deliveryAccess.deleteDelivery(deliveryId); 
    }
} 

module.exports = deleteDeliveryFactory;