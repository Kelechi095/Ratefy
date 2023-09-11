const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ msg: "Value required" });
    }

    const isUser = await User.findOne({ email });

    if (isUser) {
      return res.status(400).json({ msg: "Email already used" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    generateToken(res, user._id);

    user.password = undefined;

    res.status(200).json({ user });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ msg: "Value required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid email or password" });
    }

    generateToken(res, user._id);

    user.password = undefined;
    res.status(200).json({ user });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

const getUserInfo = async (req, res) => {
  try {
    const user = await User.findOne({_id: req.user._id})
    user.password = undefined
    res.status(200).json({user});
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

const logoutUser = async (req, res) => {
  try {
    res.cookie("jwt", "", {
      httpOnly: true,
      expires: new Date(0),
    });

    res.status(200).json({ msg: "User logged out" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};


module.exports = {
  registerUser,
  loginUser,
  getUserInfo,
  logoutUser,
};
