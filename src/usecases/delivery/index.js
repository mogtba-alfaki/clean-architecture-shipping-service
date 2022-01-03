const deliveryAccess = require("../../data/delivery"); 
const getAllDeliveriesFactory = require("./getAllDeliveries"); 
const addDeliveryFactory = require("./addDelivery"); 
const getDeliveryFactory = require("./getDelivery"); 
const deleteDeliveryFactory = require("./deleteDelivery"); 
const updateDeliveryFactory = require("./updateDelivery"); 


const getAllDeliveries = getAllDeliveriesFactory(deliveryAccess); 
const addDelivery = addDeliveryFactory(deliveryAccess); 
const getDelivery = getDeliveryFactory(deliveryAccess);  
const deleteDelivery = deleteDeliveryFactory(deliveryAccess); 
const updateDelivery = updateDeliveryFactory(deliveryAccess); 


module.exports = { 
    getAllDeliveries, 
    addDelivery,
    getDelivery, 
    deleteDelivery,
    updateDelivery, 
}