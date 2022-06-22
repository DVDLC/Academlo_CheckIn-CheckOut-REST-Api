const Records = require("../models/Records.model")

const validateExistID = async( id ) => {
    
    const RecordExists = await Records.findOne({ raw: true, where: { id } })
    if( !RecordExists ) throw new Error( `${ id } is not exist in db` )
}


module.exports = {
    validateExistID
}