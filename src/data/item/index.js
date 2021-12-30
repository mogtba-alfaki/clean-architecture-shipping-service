const itemData = require("./item.data");   
const itemModel = require("../../infra/db/item"); 
const errorHandler = require("../../util/errorHandler")

module.exports = itemData(itemModel, errorHandler); 