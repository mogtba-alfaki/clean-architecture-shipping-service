const Sequelize = require("sequelize")
const db = require("./db"); 

const Item = db.define("item", { 
    id: {  
        primaryKey: true,
        allowNull: false, 
        type: Sequelize.STRING, 
    }, 

    type: Sequelize.STRING(100), 
}); 

module.exports = Item; 