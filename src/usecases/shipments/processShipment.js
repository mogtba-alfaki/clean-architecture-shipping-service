
function processShipmentFactory({shipmentAccess, addDelivery, shipmentHelper}) { 
    return async function processShipment(Shipment_id) { 
        const ShipmentFound = await shipmentAccess.getShipmentById(Shipment_id);   
            const {id, address, address_lat, address_lng}  = ShipmentFound; 
            const cost = shipmentHelper.calculateDeliveryCost(address_lat, address_lng); 
            const vehicle = shipmentHelper.assignVehicle(cost, address);  
            const delivery = await addDelivery({
                vehicle,
                cost,
                "shipment_id": id, 
                "destination_address": address,
                "destination_lat": address_lat,
                "destination_lng": address_lng,
            })
            return delivery; 
    }
} 

module.exports = processShipmentFactory;