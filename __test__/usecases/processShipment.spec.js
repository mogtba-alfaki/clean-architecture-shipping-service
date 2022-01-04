const processShipmentFactory = require("../../src/usecases/shipments/processShipment"); 

const mockShipmentAccess = { 
    getShipmentById: jest.fn((id) => { 
        return { 
            id: "1234", 
            "shipment_id": "123", 
            "address": "address",
            "address_lat": "address_lat",
            "address_lng": "address_lng",
        }
    }),
}  
const mockAddDelivery = jest.fn((shipment) => { 
    return { 
        vehicle: shipment.vehicle,
        cost:  shipment.cost,
        "shipment_id": shipment.id, 
        "destination_address": shipment.address,
        "destination_lat": shipment.address_lat,
        "destination_lng": shipment.address_lng,
    }
})
const mockSihpmentHeloper = {
    calculateDeliveryCost: jest.fn(() => { 
        return 13.44;
    }), 
    assignVehicle: jest.fn(() => { 
        return "some vehicle"
    }),
} 

let processShipment;
beforeAll(() => { 
    processShipment = processShipmentFactory({ 
        shipmentAccess: mockShipmentAccess, 
        addDelivery:  mockAddDelivery, 
        shipmentHelper: mockSihpmentHeloper 
    })
}); 

describe("process shipment usecase tests", () => { 

    it("should call add delivery to prisist it", async() => { 
        await processShipment("123"); 
        expect(mockAddDelivery).toHaveBeenCalled(); 
    })  

    it("should call get shipment by id with the passed id to check if it exists", async () => { 
        await processShipment("123");
        expect(mockShipmentAccess.getShipmentById).toHaveBeenCalledWith("123"); 
    }); 


    it("should set delivery cost property after calculating it", async() => { 
        const result = await processShipment("123");  
        expect(result).toHaveProperty("cost", 13.44); 
    }); 

    it("should set delivery vehicle property on the returned object", async() => { 
        const result = await processShipment("123"); 
        expect(result).toHaveProperty("vehicle", "some vehicle"); 
    })
})