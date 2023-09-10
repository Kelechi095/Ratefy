const User = require("../models/userModel")

const registerUser = async(req, res) => {
    try {
        res.status(400).json({msg: "Register working!!!"})
    } catch(error) {
        console.log(error)
    }
}

module.exports = {registerUser}