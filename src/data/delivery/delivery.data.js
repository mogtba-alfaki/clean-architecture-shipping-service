function deliveryData(deliveryModel, errorHandler) { 

    return Object.create({ 
        getAllDeliveries, 
        addDelivery, 
        getDeliveryById, 
        deleteDelivery,
        updateDelivery, 
    }); 
    
    async function getAllDeliveries() { 
        const result = await deliveryModel.findAll(); 
        return result;
    } 

    async function addDelivery(delivery) { 
            const result = await deliveryModel.create(delivery);  
            return result; 
    } 

    async function getDeliveryById(deliveryId) {  
        const result = await deliveryModel.findOne({where: {"id": deliveryId}}) 
        if(!result) { 
            errorHandler.createAndThrowError("no delivery found", 404);
        } 
        return result; 
    } 
    
    async function updateDelivery(deliveryId, data) { 
        const deliveryFound = await getDeliveryById(deliveryId); 
        return  await deliveryFound.update(data); 
    }

    async function deleteDelivery(deliveryId) { 
        await getDeliveryById(deliveryId); 
        await deliveryModel.destroy({where: {"id": deliveryId}});  
        return;
    } 

}