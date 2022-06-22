const { db, DataTypes } = require("../db/db.config");

const Records = db.define('Record', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    entranceTime:{
        type: DataTypes.DATE,
        allowNull: false
    },
    exitTime:{
        type: DataTypes.DATE
        // allowNull: true
    },
    status:{
        type: DataTypes.ENUM( 'working', 'out', 'cancelled' ),
        defaultValue: 'out',
        allowNull: false
    }

}, { 
    /* Other model options go here */ 
    timestamps: false
});


module.exports = Records