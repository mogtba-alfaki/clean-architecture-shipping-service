function itemDataFactory(itemModel) { 
    async function findAll() { 
        const db = await dbFactory(); 
        const result = await itemModel.findAll(); 
    }
}