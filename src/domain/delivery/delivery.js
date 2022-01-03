function makeDeliveryFactory(errorHandler) { 
    return function devliveryFactory({ 
        id, vehicle, destination_address, destination_lat, destination_lng,
        cost, state, shipment_id,
    }) { 
        if(!id) { 
            errorHandler.createAndThrowError("id is required", 400); 
        }
        if(!destination_address) { 
            errorHandler.createAndThrowError("destination address is required", 400); 
        } 

        if(!destination_lat || !destination_lng) { 
            errorHandler.createAndThrowError("destination coordinates are required", 400);    
        } 

        if(!vehicle) { 
            errorHandler.createAndThrowError("vehicle is required", 400); 
        } 

        if(!cost) { 
            errorHandler.createAndThrowError("delivery cost is required", 400); 
        } 

        if(!state) { 
            state = "hanged"; 
        } 
        if(!shipment_id) { 
            errorHandler.createAndThrowError("shipment_id is required", 400); 
        }
        return Object.freeze({
            id,
            vehicle,
            destination_address,
            destination_lat,
            destination_lng, 
            cost, 
            state,  
            shipment_id
        })
    }
}