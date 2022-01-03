const Sequelize = require("sequelize")
const db = require("../db"); 

const Delivery = db.define("delivery", { 
    id: {  
        primaryKey: true,
        allowNull: false, 
        type: Sequelize.STRING, 
    }, 
    vehicle: Sequelize.STRING, 
    destination_address: Sequelize.STRING, 
    destination_lat: Sequelize.STRING, 
    destination_lng: Sequelize.STRING,
    cost: Sequelize.DECIMAL(5,2), 
    state : Sequelize.STRING(100), 
    // foreign key for shipment_id
}); 

module.exports = Delivery; 