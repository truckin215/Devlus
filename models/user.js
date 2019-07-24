// creating our task model
// set it to export because our index.js file is expecting an 
// export of a model
module.exports = function(sequelize, DataTypes){
    var user = sequelize.define("user", {
        username: {
            type: DataTypes.STRING,
            unique:true
        },
        password: {
            type:DataTypes.STRING,
            allowNull: false
        },
        dob: {
            type:DataTypes.INTEGER
        },
        firstname: {
            type:DataTypes.STRING
        },
        lastname: {
            type:DataTypes.STRING
        },
        location: {
            type:DataTypes.STRING
        },
        age: {
            type:DataTypes.INTEGER
        },
        github: {
            type:DataTypes.STRING,
            unique:true
        },
        avatar:{
            type:DataTypes.STRING
        },
        role: {
            type:DataTypes.INTEGER
        }
    });

    return user
}
