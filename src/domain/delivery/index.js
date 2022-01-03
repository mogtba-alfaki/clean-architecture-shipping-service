const makeDeliveryFactory = require("./delivery"); 
const errorHandler = require("../../util/errorHandler"); 


const delivery = makeDeliveryFactory(errorHandler); 

module.exports = delivery;
