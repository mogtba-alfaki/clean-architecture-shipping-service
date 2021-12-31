const { urlencoded } = require("express");
const express = require("express"); 
const app = express(); 
const db = require("./infra/db/db"); 

app.use(express.json(urlencoded({extended: false})));


const itemsRoutes = require("./interfaces/web/routes/item.routes"); 
const shipmentsRoutes = require("./interfaces/web/routes/shipment.routes"); 

app.use("/items", itemsRoutes);  
app.use("/shipments", shipmentsRoutes); 

app.use("/", (req, res, next) => { 
    res.json({ 
        message: "wellcome !", 
        status: 1, 
        data: null,
    })
}) 

app.use((error, req, res, next) => { 
    console.log("         ||   GLOBAL ERROR HANDLER ||      "); 
    console.log(error);  
    return res.status(error.status).json({ 
        message: error.message,  
        success: 0, 
    }); 
}); 


db 
.sync() 
// .sync({  force: true}) 
.then(() => { 
app.listen(5000, () => {  
    console.log(`
    Connected to the database ....
    server is running on port 5000 ..... 
    ` 
    ); 
 })
}).catch(err => {   
    console.log(err); 
    console.log("Error while connecting to the database"); 
}); 
