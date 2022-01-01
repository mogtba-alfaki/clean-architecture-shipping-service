const addItemFactory = require("../../src/usecases/items/addItem"); 

describe("add item usecase tests",  () =>  { 
    const mockItemAccess = { 
        addItem:  jest.fn()
    }
    let mockItem = { 
        id: "", 
        address: "test", 
        address_lat: "test", 
        address_lng: "test", 
        // description: "required !",
    }
    const addItem =  addItemFactory(mockItemAccess);   

    it("should throw an error if one of the required attributes are null", async () => { 
        try {
            await addItem(mockItem); 
        } catch (error) {
            expect(error).toEqual(new Error("description is required"))
        }
    });  

    it("should save the item with addItem method when passing the validation", async () => { 
        mockItem = { 
            id: "", 
            address: "test", 
            address_lat: "test", 
            address_lng: "test", 
            description: "required !",
        } 
      
        await addItem(mockItem)
        expect(mockItemAccess.addItem).toHaveBeenCalled(); 
    })

}) 
