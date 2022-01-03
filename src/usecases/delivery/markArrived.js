function markDeliveryArrivedFactory(deliveryAccess) { 
    return async function markDeliveryArrived(id) {  
        const result = await deliveryAccess.updateDelivery(id, {"state": "arrived"}); 
        return result; 
    }
} 

module.exports = markDeliveryArrivedFactory; 