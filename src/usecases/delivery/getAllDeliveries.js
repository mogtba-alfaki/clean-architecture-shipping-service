function getAllDeliveriesFactory(DeliveryAccess) { 
    return  async function getAllDeliveries() { 
          return await DeliveryAccess.getAllDeliveries(); 
      }
} 

module.exports = getAllDeliveriesFactory; 