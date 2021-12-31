const makeShipmentFactory = require("./shipment"); 
const errorHandler = require("../../util/errorHandler"); 


const shipmentFactory = makeShipmentFactory(errorHandler); 


module.exports = shipmentFactory; 