function updateItemFactory(itemAccess) { 
    return async function updateItem(id, data) {  
        const result = await itemAccess.updateItem(id, data); 
        return result; 
    }
} 

module.exports = updateItemFactory; 