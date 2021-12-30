function itemData(itemModel) {  
    
        return Object.create({ 
            getAllItems, 
            addItem
        })
        
        async function getAllItems() { 
            const result = await itemModel.findAll(); 
            return result;
        } 

        async function addItem(item) { 
                const result = await itemModel.create(item);  
                return result; 
        }
} 
module.exports = itemData; 