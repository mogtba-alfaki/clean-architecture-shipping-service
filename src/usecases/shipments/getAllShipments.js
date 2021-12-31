function getAllShipmentsFactory(shipmentAccess) { 
    return  async function getAllShipments() { 
          return await shipmentAccess.getAllShipments(); 
      }
} 

module.exports = getAllShipmentsFactory; 