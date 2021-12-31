const itemData = require("./item.data");   
const itemModel = require("../../infra/db/models/item"); 
const errorHandler = require("../../util/errorHandler")

module.exports = itemData(itemModel, errorHandler); 