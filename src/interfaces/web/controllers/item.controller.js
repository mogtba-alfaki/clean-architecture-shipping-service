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