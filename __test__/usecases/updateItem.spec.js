const updateItemFactory = require("../../src/usecases/items/updateItem"); 


describe("update item usecase tests", () => { 
    const mockItemAccess = { 
        updateItem: jest.fn(),
    } 
    const dataToUpdate = {
        type: "urgent"
    } 
    const updateItem = updateItemFactory(mockItemAccess); 
    it("should call update item with the argument passed in to it", () => { 
            updateItem("id", dataToUpdate);
            expect(mockItemAccess.updateItem).toHaveBeenCalledWith("id", dataToUpdate)
    })
})