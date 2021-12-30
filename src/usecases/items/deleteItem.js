function deleteItemFactory(itemAccess) { 
    return async function deleteItem(itemId) { 
        return await itemAccess.deleteItem(itemId); 
    }
} 

module.exports = deleteItemFactory;