const getAllShipmentsFactory = require("./getAllShipments"); 
const getShipmentFactory = require("./getShipment"); 
const addShipmentFactory = require("./addShipment"); 
const markReadyForDeliveryFactory = require("./markReady"); 
const updateShipmentFactory = require("./updateShipment"); 
const deleteShipmentFactory = require("./deleteShipment"); 
const processShipmentFactory = require("./processShipment"); 


const shipmentAccess = require("../../data/shipment"); 
const shipmentHelper = require("./shipmentHelper"); 
const {addDelivery} = require("../delivery")

const getAllShipments = getAllShipmentsFactory(shipmentAccess); 
const getShipment = getShipmentFactory(shipmentAccess); 
const addShipment = addShipmentFactory(shipmentAccess); 
const updateShipment = updateShipmentFactory(shipmentAccess); 
const markReadyForDelivery = markReadyForDeliveryFactory(shipmentAccess);  
const processShipment = processShipmentFactory({shipmentAccess, shipmentHelper, addDelivery})
const deleteShipment = deleteShipmentFactory(shipmentAccess); 


module.exports = { 
    getAllShipments,
    getShipment, 
    addShipment, 
    updateShipment,
    deleteShipment, 
    markReadyForDelivery, 
    processShipment,
}