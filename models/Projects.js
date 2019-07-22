// creating our task model
// set it to export because our index.js file is expecting an 
// export of a model
module.exports = function(sequelize, DataTypes){
    var Profile = sequelize.define("Profile", {
        UserID: {
            type: DataTypes.INTEGER, 
            allowNull: false  
        },
        projectName: {
            type: DataTypes.STRING,
            unique:true
        },
        description: {
            type:DataTypes.STRING,
            allowNull: false
        },
        devCount: {
            type:DataTypes.INTEGER
        },
        location: {
            type:DataTypes.STRING
        },
        payment: {
            type:DataTypes.INTEGER
        },
        length: {
            type:DataTypes.INTEGER,
        },
        image:{
            type:DataTypes.STRING
        },
        startdate: {
            type:DataTypes.STRING
        }
    });

    return Profile
}
