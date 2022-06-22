const { response } = require("express")
const Records = require("../models/Records.model")

// TODO: Me esta dando un error

const getAllUsers = async( req, res = response ) => {

    const { offset, limit } = req.query
    const query = { status: "working" }
    const records = await Records.findAll({ where: query })

    res.status( 200 ).json({
        status: 'ok',
        records
    })
}

const getUserByID = async( req, res = response ) => {

    const { id } = req.params
    const record = await Records.findOne({ raw: true, where: { id } })

    res.status( 200 ).json({
        record
    })
}

const createNewUser = async( req, res = response ) => {
    
    let { entranceTime, status } = req.body

    entranceTime = new Date().toUTCString()

    const newRecord = Records.build({ entranceTime, status })
    newRecord.save()

    res.status( 200 ).json({
        newRecord
    })
} 

const updateUser = async( req, res = response ) => {

    const { id } = req.params
    const { status } = req.body

    const exitTime = new Date().toUTCString()

    await Records.update( 
        { status, exitTime },
        { raw: true, where: { id } }
    )

    res.status( 200 ).json({
        ok: 'true',
        msg: `User with id: ${ id } succesfully updated`
    })
}

const deleteUser = async( req, res = response ) => {
    const { id } = req.params
    const { status } = req.body

    await Records.update( { status }, { raw: true, where: { id } })

    res.status( 200 ).json({
        ok: 'true',
        msg: ` User with id: ${ id } succesfully deleted`
    })
}

module.exports = {
    getAllUsers,
    getUserByID,
    createNewUser,
    updateUser,
    deleteUser
}