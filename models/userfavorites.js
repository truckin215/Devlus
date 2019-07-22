// creating our task model
// set it to export because our index.js file is expecting an 
// export of a model
module.exports = function(sequelize, DataTypes){
    var userFavorites = sequelize.define("userFavorites", {
        DevID: {
            type: DataTypes.INTEGER, 
            allowNull: false  
        },
        hold: {
            type: DataTypes.INTEGER,
        },
        UserID: {
            type:DataTypes.INTEGER,
            allowNull: false
        }
    });

    return userFavorites
}
