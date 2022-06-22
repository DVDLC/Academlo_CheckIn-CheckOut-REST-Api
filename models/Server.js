const express = require('express')
const { db } = require('../db/db.config')
const cors = require('cors')

class Server {

    constructor(){
        this.app = express()
        this.route = '/api/users'
        this.port =8080

        // Connect to db
        this.dbConnection()

        this.middlewares()

        // Llamado a las rutas
        this.routes()
    }

    // Metodos

    middlewares(){

        this.app.use( cors() )

        this.app.use( express.json() )
    }

    routes(){
        this.app.use( this.route, require('../routes/chekIn-out.routes') )
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log( `Server running at port ${ this.port }` )
        })
    }

   // [ force: true ] restablece la base de datos * ten mucho cuidado en modo produccion  *
   async dbConnection(){
        try {
            await Promise.all([
                db.authenticate(),
                db.sync(/* { force: true } */) 
            ])
            console.log( 'DB authenticated and sync' )
        }catch( err ){
            console.log( 'Fail to connect to db', err )
        }
    }
}


module.exports = Server