// creating our task model
// set it to export because our index.js file is expecting an 
// export of a model
module.exports = function(sequelize, DataTypes){
    var Projects = sequelize.define("Projects", {
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
            type:DataTypes.BOOLEAN
        },
        length: {
            type:DataTypes.STRING,
        },
        image:{
            type:DataTypes.TEXT
        },
        startdate: {
            type:DataTypes.STRING
        },
        close: {
            type:DataTypes.BOOLEAN
        }
    });

    return Projects
}
