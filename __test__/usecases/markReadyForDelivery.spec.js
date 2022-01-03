const markReadyForDeliveryFactory = require("../../src/usecases/shipments/markReady"); 

const mockShipmentAccess = { 
    getShipmentById: jest.fn((id) => { 
        return { 
            id: "1234",
        }
    }),
    updateShipment: jest.fn((id, data) => { 
        return { 
            ready_for_delivery: true, 
        }
    })
} 

describe("mark shipment ready for delivery usecase test",  () => { 
    it("should call the access items with the id and data passed from the arguments", async () => { 
            const markReadyForDelivery = markReadyForDeliveryFactory(mockShipmentAccess); 
            await markReadyForDelivery("1234") 
            expect(mockShipmentAccess.updateShipment).toHaveBeenCalledWith("1234",{"ready_for_delivery": true})

    }) 

    it("should return an object with marked for delivery set to true", async () =>  { 
        const makrReadyForDelivery = markReadyForDeliveryFactory(mockShipmentAccess); 
        await makrReadyForDelivery("1234") 
        expect(mockShipmentAccess.updateShipment).toHaveReturnedWith({"ready_for_delivery": true})

    })
})