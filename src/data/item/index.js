const itemData = require("./item.data");  
const itemModel = require("../../infra/db/item"); 

module.exports = itemData(itemModel); 