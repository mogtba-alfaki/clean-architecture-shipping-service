
exports.calculateDeliveryCost = (lat, lng) => { 
        // any custom logic to calculate the cost ..
        return 31.22 + Math.floor(Math.random() * 5)
} 

exports.assignVehicle = (cost, address) => {
        // any custom logic to assign a vehcile; 
        const avaliableVehciles = ["1231", "1321", "43223", "123213", "4241"]; 
        const random = Math.floor(Math.random() * avaliableVehciles.length)
        return avaliableVehciles[random].toString(); 
}