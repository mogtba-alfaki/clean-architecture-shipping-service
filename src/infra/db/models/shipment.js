const Sequelize = require("sequelize")
const db = require("../db"); 

const Shipment = db.define("shipment", { 
    id: {  
        primaryKey: true,
        allowNull: false, 
        type: Sequelize.STRING, 
    }, 

    shipment_mode: Sequelize.STRING(100), 
    description: Sequelize.STRING,  
    arrival_date: Sequelize.DATE,
    arrived: Sequelize.BOOLEAN, 
    address_lat: Sequelize.STRING(100), 
    address_lng: Sequelize.STRING(100), 
    address: Sequelize.STRING(100)  
    // foreign key for item_id
    
}); 

module.exports = Shipment; 