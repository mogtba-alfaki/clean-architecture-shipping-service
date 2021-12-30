const itemsUseCases = require("../../../usecases/items"); 

exports.getAllItems = async(req, res, next) => { 
    try {
        const allItems = await itemsUseCases.getAllItems(); 
        return res.status(200).json({ 
            message: "items fetched", 
            status: 1, 
            data: allItems,
        })
    } catch (err) {
        throw err; 
    }
} 

exports.addItem = async(req, res, next) => { 
    try {
        console.log(req.body)
        const addedItem = await itemsUseCases.addItem(req.body); 
        return res.status(200).json({ 
            message: "item added", 
            status: 1, 
            data: addedItem,
        })        
    } catch (err) {
        throw err;
    }
}