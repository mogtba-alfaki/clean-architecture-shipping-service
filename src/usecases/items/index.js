const itemAccess = require("../../data/item"); 
const getAllItemsFactory = require("./getAllItems"); 
const addItemFactory = require("./addItem"); 
const getItemFactory = require("./getItem"); 
const deleteItemFactory = require("./deleteItem"); 
const updateItemFactory = require("./updateItem"); 

const getAllItems = getAllItemsFactory(itemAccess); 
const addItem = addItemFactory(itemAccess); 
const getItem = getItemFactory(itemAccess);  
const deleteItem = deleteItemFactory(itemAccess); 
const updateItem = updateItemFactory(itemAccess); 

module.exports = { 
    getAllItems, 
    addItem,
    getItem, 
    deleteItem,
    updateItem, 
}