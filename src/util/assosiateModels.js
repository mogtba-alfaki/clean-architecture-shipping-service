const shipmentModel = require("../infra/db/models/shipment") 
const itemModel = require("../infra/db/models/item"); 


function assosiateModels() { 
    shipmentModel.belongsTo(itemModel, { 
        foreignKey: "item_id", 
    })
} 

module.exports = assosiateModels; 