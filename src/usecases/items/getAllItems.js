function getAllItemsFactory(itemModel) { 
      return  async function getAllItems() { 
            return await itemModel.getAllItems(); 
        }
} 

module.exports = getAllItemsFactory; 