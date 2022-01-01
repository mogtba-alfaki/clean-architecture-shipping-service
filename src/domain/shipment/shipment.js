function makeShipmentFactory(errorHandler) { 
    return function shipmentFactory( 
        { 
            id, 
            item_id, 
            arrival_date = null,
            arrived = false, 
            address,     
            address_lat, 
            address_lng,
            shipment_mode,
        })  { 
        if(!id) { 
            errorHandler.createAndThrowError("id is required", 404);  
        } 
        if(!item_id) { 
            errorHandler.createAndThrowError("item id is required", 404);  
        } 

        if(!address) { 
            errorHandler.createAndThrowError("address is required", 404);  
        }  

        if(!address_lat) { 
            errorHandler.createAndThrowError("address_lat is required", 404);  
        }  

        if(!address_lng) { 
            errorHandler.createAndThrowError("address_lng is required", 404);  
        } 

        if(!shipment_mode) { 
            shipment_mode = "regular"; 
        }

        
        return Object.freeze({ 
            id, 
            item_id, 
            arrival_date, 
            arrived, 
            address, 
            address_lat, 
            address_lng, 
            shipment_mode
        })
    }
} 

module.exports = makeShipmentFactory; 