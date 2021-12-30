function makeItemFactory(errorHandler) { 
    return function itemFactory({id, type, description, breakable, address_lat, address_lng, address, sender_id}) {  
        // validation rules can be appiled here 
        if(!description) { 
            errorHandler.createAndThrowError("description is required", 400);  
        } 
        if(!address_lng || !address_lat) { 
            errorHandler.createAndThrowError("address coordinates (lat, lng) are required", 400);  
        } 

        if(!address) { 
            errorHandler.createAndThrowError("address is required", 400);           
        }
        return Object.freeze({ 
            id,
            type, 
            sender_id,   
            description, 
            address,  
            address_lat, 
            address_lng,
            breakable,
            getType: () => { 
                return type; 
            }, 
            getItemSender: () => { 
                return sender_id;  
            } 
        }); 
    } 
} 

module.exports = makeItemFactory;  