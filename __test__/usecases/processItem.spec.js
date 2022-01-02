const processItemFactory = require("../../src/usecases/items/processItem"); 

describe("process item usecase tests", () => { 
    const mockItemAccess = { 
        getItemById: jest.fn((id) => { 
            if(id == "123") { 
                return { 
                    id: "123", 
                    address: "12341", 
                    address_lat: "2343", 
                    address_lng: "324",  
                    descirption: "description", 
                    type: "1312",
                    breakable: true, 
                } 
            } 
        }), 
    } 
    const mockAddShipment = jest.fn((itemToProcess => { 
        return itemToProcess; 
    })); 
    const mockCalculateArrivalDate = jest.fn(); 
    let processItem; 
    beforeAll(() => { 
        processItem = processItemFactory({ 
            itemAccess : mockItemAccess, 
            addShipment: mockAddShipment, 
            calculateArrivalDate: mockCalculateArrivalDate 
        }); 
    }) 

    it("should try to find the item with the id passed to it", async () => { 
       await processItem("123"); 
       expect(mockItemAccess.getItemById).toHaveBeenCalledWith("123")
    }); 

    it("should set shipment_mode to 'soft' if the item is breakable", async() => { 
            const processedItem = await processItem("123"); 
            expect(processedItem).toHaveProperty("shipment_mode","soft"); 
    }); 

    it("should set a new arrival date on the shipment", async () => { 
        const processedItem = await processItem("123"); 
        expect(processedItem).toHaveProperty("arrival_date"); 
    })
})