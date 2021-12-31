const shipmentAccess = require("../../data/shipment"); 
const getAllShipmentsFactory = require("./getAllShipments"); 
const getShipmentFactory = require("./getShipment"); 
const addShipmentFactory = require("./addShipment"); 
const updateShipmentFactory = require("./updateShipment"); 
const deleteShipmentFactory = require("./deleteShipment"); 

const getAllShipments = getAllShipmentsFactory(shipmentAccess); 
const getShipment = getShipmentFactory(shipmentAccess); 
const addShipment = addShipmentFactory(shipmentAccess); 
const updateShipment = updateShipmentFactory(shipmentAccess); 
const deleteShipment = deleteShipmentFactory(shipmentAccess); 


module.exports = { 
    getAllShipments,
    getShipment, 
    addShipment, 
    updateShipment,
    deleteShipment
}