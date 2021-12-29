const itemAccess = require("../../data/item"); 
const getAllItemsFactory = require("./getAllItems"); 


const getAllItems = getAllItemsFactory(itemAccess); 


module.exports = { 
    getAllItems,
}