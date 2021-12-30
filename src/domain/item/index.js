const makeItemFactory = require("./item"); 
const errorHandler = require("../../util/errorHandler"); 

const item = makeItemFactory(errorHandler); 



module.exports = item; 