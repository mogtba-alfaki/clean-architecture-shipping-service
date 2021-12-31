function makeShipmentFactory(errorHandler) { 
    return function shipmentFactory({id, item_id, arrival_date, arrived, address }) { 

        return Object.freeze({ 
            id, 
            item_id, 
            arrival_date, 
            arrived, 
            address
        })
    }
} 

module.exports = makeShipmentFactory; 