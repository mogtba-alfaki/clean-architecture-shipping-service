const itemAccess = require("../../data/item"); 
const {addShipment} = require("../shipments");  
const getAllItemsFactory = require("./getAllItems"); 
const addItemFactory = require("./addItem"); 
const getItemFactory = require("./getItem"); 
const deleteItemFactory = require("./deleteItem"); 
const updateItemFactory = require("./updateItem"); 
const markBreakableFactory = require("./markBreakable"); 
const processItemFactory = require("./processItem"); 

const {calculateArrivalDate} = require("./itemHelpers")

const getAllItems = getAllItemsFactory(itemAccess); 
const addItem = addItemFactory(itemAccess); 
const getItem = getItemFactory(itemAccess);  
const deleteItem = deleteItemFactory(itemAccess); 
const updateItem = updateItemFactory(itemAccess); 
const markBreakable = markBreakableFactory(itemAccess); 

const processItem = processItemFactory({itemAccess, addShipment, calculateArrivalDate})

module.exports = { 
    getAllItems, 
    addItem,
    getItem, 
    deleteItem,
    updateItem, 
    markBreakable,
    processItem
}