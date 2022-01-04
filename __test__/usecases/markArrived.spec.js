const markArrivedFactory = require("../../src/usecases/delivery/markArrived"); 

const mockDeliveryAccess = { 
    getDeliveryById: jest.fn((id) => { 
        return { 
            id: "1234",
        }
    }),
    updateDelivery: jest.fn((id, data) => { 
        if(id = "123") { 
            return data;
        }
    })
}  

describe("mark shipment delivery arrived usecase tests", () => { 
    const markArrived = markArrivedFactory(mockDeliveryAccess); 
    
    it("should call the updateDelivery method with the argument passed", async() => { 
        await markArrived("123"); 
        expect(mockDeliveryAccess.updateDelivery).toHaveBeenCalledWith("123", {"state": "arrived"}); 
    }); 

    it("should return delivery object marked arrived", async() => { 
        const result = await markArrived("123") 
        expect(result).toHaveProperty("state", "arrived"); 
    })
})