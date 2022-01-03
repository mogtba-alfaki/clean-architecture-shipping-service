function getDeliveryFactory(deliveryAccess) { 
    return async function getdelivery(deliveryId) { 
        const deliveryFound = await deliveryAccess.getDeliveryById(deliveryId);  
        return deliveryFound; 
    }
} 

module.exports = getDeliveryFactory;