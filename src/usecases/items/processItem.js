function processItemFactory({itemAccess, addShipment, calculateArrivalDate}) { 
    return async function processItem(item_id) { 
            const itemFound = await itemAccess.getItemById(item_id);  
            const {id, address, address_lat, address_lng, descirption, type, breakable}  = itemFound; 
            let shipment_mode = breakable? "soft": "regular";  
            let arrival_date = calculateArrivalDate({address, address_lng, address_lat}); 
            const shipment = await addShipment({
                item_id: id,
                address_lat, 
                address_lng,
                address,
                descirption,
                type,
                breakable,  
                arrival_date, 
                shipment_mode,
            })
            return shipment; 
    }
} 

module.exports = processItemFactory;