const deliverysUseCases = require("../../../usecases/delivery") 
const errorHandler = require("../../../util/errorHandler")
exports.getAllDeliveries = async(req, res, next) => { 
    try {
        const allDeliveries = await deliverysUseCases.getAllDeliveries(); 
        return res.status(200).json({ 
            message: "deliveries fetched", 
            status: 1, 
            data: allDeliveries,
        })
    } catch (err) {
       const error = errorHandler.handleError(err); 
       next(error);  
    }
} 

exports.addDelivery = async(req, res, next) => { 
    try {
        const addedDelivery = await deliverysUseCases.addDelivery(req.body); 
        return res.status(200).json({ 
            message: "delivery added", 
            status: 1, 
            data: addedDelivery,
        })        
    } catch (err) {
       const error = errorHandler.handleError(err); 
       next(error); 
    }
} 

exports.getDelivery = async(req, res, next) => { 
    try {
        const id = req.params.id;  
        const deliveryFound = await deliverysUseCases.getDelivery(id); 
        return res.status(200).json({ 
            message: "delivery fetched", 
            status: 1, 
            data: deliveryFound,
        })    
    } catch (err) {
       const error = errorHandler.handleError(err); 
       next(error);  
    }
}   

exports.updateDelivery = async(req, res, next) => { 
    try {
        const id = req.params.id; 
        const updatedDelivery = await deliverysUseCases.updateDelivery(id, req.body); 
        return res.status(200).json({ 
            message: "delivery updated", 
            status: 1, 
            data: updatedDelivery,
        })  
    } catch (err) {
       const error = errorHandler.handleError(err); 
       next(error);  
    }
}

exports.deleteDelivery = async(req, res, next) => { 
    try {  
        const deliveryId = req.params.id; 
        await deliverysUseCases.deleteDelivery(deliveryId);
        return res.status(200).json({ 
            message: "delivery deleted ", 
            status: 1, 
            data: null,
        })    
    } catch (err) {
       const error = errorHandler.handleError(err); 
       next(error);  
    }
} 