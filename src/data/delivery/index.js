const deliveryModel = require("../../infra/db/models/delivery"); 
const deliveryData = require("./delivery.data");  
const errorHandler = require("../../util/errorHandler"); 





module.exports = deliveryData(deliveryModel, errorHandler)