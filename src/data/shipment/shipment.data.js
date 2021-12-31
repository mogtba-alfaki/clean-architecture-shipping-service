function shipmentData(shipmentModel, errorHandler) {  
    
    return Object.create({ 
        getAllShipments, 
        addShipment, 
        getShipmentById, 
        deleteShipment,
        updateShipment
    }); 
    
    async function getAllShipments() { 
        const result = await shipmentModel.findAll(); 
        return result;
    } 

    async function addShipment(shipment) { 
            const result = await shipmentModel.create(shipment);  
            return result; 
    } 

    async function getShipmentById(shipmentId) { 
        const result = await shipmentModel.findOne({where: {"id": shipmentId}}) 
        if(!result) { 
            errorHandler.createAndThrowError("no shipment found", 404);
        } 
        return result; 
    } 
    
    async function updateShipment(shipmentId, data) { 
        const shipmentFound = await getshipmentById(shipmentId); 
        return  await shipmentFound.update(data); 
    }

    async function deleteShipment(shipmentId) { 
        await getshipmentById(shipmentId); 
        await shipmentModel.destroy({where: {"id": shipmentId}});  
        return;
    }

} 
module.exports = shipmentData; 