const addShipmentFactory = require("../../src/usecases/shipments/addShipment"); 

describe("add shipment usecases tests", () => { 
    const mockShipmentAccess  = { 
        addShipment: jest.fn(), 
    }  
    let addShipment; 
    beforeAll(() => { 
     addShipment = addShipmentFactory(mockShipmentAccess); 
    }) 

    it("should throw an error when it dont pass validation checks", async() => { 
        const mockShipment = { 
            item_id : "required", 
            address: "required",     
            address_lat: "required", 
            // address_lng: "required",
        }  
        try { 
           await  addShipment(mockShipment); 
        } catch (err) {  
            expect(err).toHaveProperty("status", 404); 
        }
    }); 

    it("should call addShipment to save it to the db when the validation checks", async() => { 
        const mockShipment = { 
            item_id : "required", 
            address: "required",     
            address_lat: "required", 
            address_lng: "required", 
            arrival_date: Date.now(), 
            arrived: false,  
            shipment_mode: "regular", 
            ready_for_delivery: false,
        }    
        await addShipment(mockShipment); 
        expect(mockShipmentAccess.addShipment).toHaveBeenCalledWith(mockShipment); 
    }) 

    it("should set the shipment mode to other mode than regular if the shipment mode is given", async() => { 
        const mockShipment = { 
            item_id : "required", 
            address: "required",     
            address_lat: "required", 
            address_lng: "required",  
            arrival_date: null,
            arrived: false, 
            shipment_mode: "other", 
            ready_for_delivery: false,
        }  
        await addShipment(mockShipment); 
        expect(mockShipmentAccess.addShipment).toHaveBeenCalledWith(mockShipment); 
        ;  
    })
})