function markBreakableFactory(itemAccess) { 
    return async function markBreakable(itemId) { 
            return await itemAccess.markBreakable(itemId); 
    }
} 

module.exports = markBreakableFactory;