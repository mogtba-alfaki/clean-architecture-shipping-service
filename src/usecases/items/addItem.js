const itemFactory = require("../../domain/item"); 

function addItemFactory(itemAccess) { 
    return async function addItem(itemInfo) { 
        itemInfo.id = Date.now().toString();  
        const item = itemFactory(itemInfo);   
        const saveItem = await itemAccess.addItem(item);  
        return saveItem;

    }
} 


module.exports = addItemFactory;