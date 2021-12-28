function makeItemFactory() { 
    return function itemFactory({id, type, createdAt, updatedAt, sender_id}) {  
        // validation rules can be appiled here 

        return Object.freeze({ 
            type, 
            sender_id,  

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