const itemFactory = require("../../domain/item"); 

function addItemFactory(itemAccess) { 
    return async function addItem(itemInfo) { 
        try {
            itemInfo.id = Date.now().toString();    
            const item = itemFactory(itemInfo); 
            const saveItem = await itemAccess.addItem(item);   
            return saveItem;
        } catch (err) {
            throw err; 
        }
    }
} 


module.exports = addItemFactory;