function getItemFactory(itemAccess) { 
    return async function getItem(itemId) { 
        const itemFound = await itemAccess.getItemById(itemId);  
        return itemFound; 
    }
} 

module.exports = getItemFactory;