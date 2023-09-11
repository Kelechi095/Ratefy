const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const authenticateUser = async(req, res, next) => {
    let token;

  token = req.cookies.jwt
  if(token) {

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.user = await User.findById(decoded.userId).select('-password')
      next()

    } catch (error) {
      return res.status(401).json({ msg: 'Not authorized, Invalid token'});
    }
  } else {
    res.status(401).json({msg: 'Not authorized'})
  }
}


module.exports = {authenticateUser}