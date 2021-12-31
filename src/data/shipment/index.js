const shimpentModel = require("../../infra/db/models/shipment"); 
const erorrHandler = require("../../util/errorHandler"); 
const shipmentData = require("./shipment.data"); 


module.exports = shipmentData(shimpentModel, erorrHandler); 