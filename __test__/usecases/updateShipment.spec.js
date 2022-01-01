const updateShipmentFactory = require("../../src/usecases/shipments/updateShipment"); 


describe("update shipment  usecase tests", () => { 
    const mockShipmentAccess = { 
        updateShipment: jest.fn(),
    } 
    const dataToUpdate = {
        type: "urgent"
    } 
    const updateShipment = updateShipmentFactory(mockShipmentAccess); 
    it("should call update shipment with the argument passed in to it", () => { 
            updateShipment("id", dataToUpdate);
            expect(mockShipmentAccess.updateShipment).toHaveBeenCalledWith("id", dataToUpdate)
    })
})