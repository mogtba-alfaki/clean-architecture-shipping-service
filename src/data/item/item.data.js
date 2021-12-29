function itemData(itemModel) {  
    
        return Object.create({ 
            getAllItems,
        })
        
        async function getAllItems() { 
            const result = await itemModel.findAll(); 
            return result;
        }
} 
module.exports = itemData; 