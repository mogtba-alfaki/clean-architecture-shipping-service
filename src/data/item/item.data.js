function itemData(itemModel, errorHandler) {  
    
        return Object.create({ 
            getAllItems, 
            addItem, 
            getItemById, 
            deleteItem,
            updateItem, 
            markBreakable,
        }); 
        
        async function getAllItems() { 
            const result = await itemModel.findAll(); 
            return result;
        } 

        async function addItem(item) { 
                const result = await itemModel.create(item);  
                return result; 
        } 

        async function getItemById(itemId) { 
            const result = await itemModel.findOne({where: {"id": itemId}}) 
            if(!result) { 
                errorHandler.createAndThrowError("no item found", 404);
            } 
            return result; 
        } 
        
        async function updateItem(itemId, data) { 
            const itemFound = await getItemById(itemId); 
            return  await itemFound.update(data); 
        }

        async function deleteItem(itemId) { 
            await getItemById(itemId); 
            await itemModel.destroy({where: {"id": itemId}});  
            return;
        } 

        async function markBreakable(itemId) { 
            return await updateItem(itemId, {"breakable": true}); 
        }

} 
module.exports = itemData; 