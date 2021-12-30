const itemAccess = require("../../data/item"); 
const getAllItemsFactory = require("./getAllItems"); 
const addItemFactory = require("./addItem"); 

const getAllItems = getAllItemsFactory(itemAccess); 
const addItem = addItemFactory(itemAccess); 

module.exports = { 
    getAllItems, 
    addItem,
}