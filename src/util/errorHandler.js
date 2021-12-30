

function createAndThrowError(message, status) { 
    const error = new Error(message); 
    error.status = status; 
    throw error; 
} 


function handleError(error) { 
    if(!error.status) { 
        error.status = 500; 
    } 
    return error;
} 


module.exports = { 
    createAndThrowError, 
    handleError,
}