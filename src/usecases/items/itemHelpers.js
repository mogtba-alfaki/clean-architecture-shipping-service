
function calculateArrivalDate({address, address_lat, address_lng}) { 
    // establish logic to calculate shipping date based on location coordinates, 
    // will return a future date (5 days later)  
    let currentDate = new Date();
    let  arrivalDate = new Date(currentDate.setDate(currentDate.getDate() + 5));
    let formatedDate = formatDate(arrivalDate); 
    return formatedDate; 
} 

function formatDate(date) {  
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}  


module.exports = { 
    calculateArrivalDate,

} 

