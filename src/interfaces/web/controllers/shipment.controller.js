const shipmentUseCases = require("../../../usecases/shipments"); 
const errorHandler = require("../../../util/errorHandler");

exports.getAllShipments = async(req, res, next) => { 
    try {
        const allShipmets = await shipmentUseCases.getAllShipments(); 
        return res.status(200).json({
            message: "shipments fetched", 
            status: 1, 
            data: allShipmets,
        })
    } catch (err) {
        const error = errorHandler.handleError(err); 
        next(error);
    }
} 



exports.addShipment = async(req, res, next) => { 
    try {
        const addedShipment = await shipmentUseCases.addShipment(req.body); 
        return res.status(200).json({ 
            message: "shipment added", 
            status: 1, 
            data: addedShipment,
        })        
    } catch (err) {
       const error = errorHandler.handleError(err); 
       next(error); 
    }
} 

exports.getShipment = async(req, res, next) => { 
    try {
        const id = req.params.id;  
        const ShipmentFound = await shipmentUseCases.getShipment(id); 
        return res.status(200).json({ 
            message: "Shipment fetched", 
            status: 1, 
            data: ShipmentFound,
        })    
    } catch (err) {
       const error = errorHandler.handleError(err); 
       next(error);  
    }
}   

exports.updateShipment = async(req, res, next) => { 
    try {
        const id = req.params.id; 
        const updatedShipment = await shipmentUseCases.updateShipment(id, req.body); 
        return res.status(200).json({ 
            message: "Shipment updated", 
            status: 1, 
            data: updatedShipment,
        })  
    } catch (err) {
       const error = errorHandler.handleError(err); 
       next(error);  
    }
} 

exports.markReadyForDelivery = async (req, res, next) => { 
    try {
        const id = req.params.id; 
        const markedShipment = await shipmentUseCases.markReadyForDelivery(id); 
        return res.status(200).json({ 
            message: "Shipment marked ready for delivery", 
            status: 1, 
            data: markedShipment,
        })  
    } catch (err) {
        const error = errorHandler.handleError(err); 
        next(error);  
    }
}

exports.processShipment = async (req, res, next) => { 
    try {  
        const shipmentId = req.params.id; 
        const processedShipment = await shipmentUseCases.processShipment(shipmentId); 
        return res.status(200).json({ 
            message: "shipment processed", 
            status: 1, 
            data: processedShipment,
        })   
    } catch (err) {
        const error = errorHandler.handleError(err); 
        next(error);     
    }
}

exports.deleteShipment = async(req, res, next) => { 
    try {  
        const shipmentId = req.params.id; 
        await shipmentUseCases.deleteShipment(shipmentId);
        return res.status(200).json({ 
            message: "shipment deleted ", 
            status: 1, 
            data: null,
        })    
    } catch (err) {
       const error = errorHandler.handleError(err); 
       next(error);  
    }
}
