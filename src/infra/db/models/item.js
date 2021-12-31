const Sequelize = require("sequelize")
const db = require("../db"); 

const Item = db.define("item", { 
    id: {  
        primaryKey: true,
        allowNull: false, 
        type: Sequelize.STRING, 
    }, 

    type: Sequelize.STRING(100), 
    description: Sequelize.STRING,  
    breakable: Sequelize.BOOLEAN, 
    address_lat: Sequelize.STRING, 
    address_lng: Sequelize.STRING, 
    address: Sequelize.STRING 
}); 

module.exports = Item; 