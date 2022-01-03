const deliveryFactory = require("../../domain/delivery"); 

function addDeliveryFactory(deliveryAccess) { 
    return async function addDelivery(deliveryInfo) { 
        try {
            deliveryInfo.id = Date.now().toString();    
            const delivery = deliveryFactory(deliveryInfo); 
            const savedDelivery = await deliveryAccess.addDelivery(delivery);   
            return savedDelivery;
        } catch (err) {
            throw err; 
        }
    }
} 


module.exports = addDeliveryFactory;