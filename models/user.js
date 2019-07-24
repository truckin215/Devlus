const bcrypt = require('bcryptjs'); 

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

    // create custome method for our user model.
    // this will handle if an unhashed password the user is providing 
    // is equal to the hash pasword in our database
    user.prototype.validPassword = function(password){
        return bcrypt.compareSync(password, this.password)
    }

    // Hooks are variouse methods that run during our model lifecycle
    // in this case , before a user is created, we will automatically 
    // encrypt password coming in.
    user.addHook("beforeCreate", function(user){ 
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null )
    });

    return user;
}