function getAllItemsFactory(itemAccess) { 
      return  async function getAllItems() { 
            return await itemAccess.getAllItems(); 
        }
} 

module.exports = getAllItemsFactory; 