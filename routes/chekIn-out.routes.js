
const { Router } = require('express')
const { param, check } = require('express-validator')
const { getAllUsers, getUserByID, createNewUser, updateUser, deleteUser } = require('../controllers/record.controllers')
const { validateExistID } = require('../middlewares/db.middlewares')
const validateConfig = require('../middlewares/db.validators.config')

const routes = Router()

routes.get( '/', getAllUsers)

routes.get( '/:id', [
    check( 'id' ).custom( validateExistID ),
    validateConfig
], getUserByID)

routes.post( '/', createNewUser)

routes.patch( '/:id', [
    check( 'id' ).custom( validateExistID ),
    validateConfig
], updateUser)

routes.delete('/:id', [
    check( 'id' ).custom( validateExistID ),
    validateConfig
], deleteUser)

module.exports = routes