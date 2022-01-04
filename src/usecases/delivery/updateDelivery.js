function updateDeliveryFactory(deliveryAccess) { 
    return async function updateDelivery(id, data) {  
        const result = await deliveryAccess.updateDelivery(id, data); 
        return result; 
    }
} 

module.exports = updateDeliveryFactory; 