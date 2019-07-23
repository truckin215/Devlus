// creating our task model
// set it to export because our index.js file is expecting an 
// export of a model
module.exports = function(sequelize, DataTypes){
    var devProfile = sequelize.define("devProfile", {
        projectID: {
            type: DataTypes.INTEGER, 
            allowNull: false
            
        },
        devID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        hold: {
            type:DataTypes.INTEGER,
            allowNull: false
        },
        UserID: {
            type:DataTypes.INTEGER,
            allowNull:false
        }
    });

    return devProfile
}
