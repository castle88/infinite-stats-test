const infiniteAPI = require("../utils/infiniteAPI");
const User = require("../model/User");

const postRegister = async (req, res, next) => {
  // change to receive input from clientside form
  const { email, gamertag, password } = req.body;
  if (!email || !gamertag || !password) {
    return next(new Error("Please provide all fields"));
  }
  try {
    const emailIsTaken = await User.findOne({ email });
    if (emailIsTaken) return next(new Error("Email is already registered"));

    const gamertagIsTaken = await User.findOne({ gamertag });
    if (gamertagIsTaken) {
      return next(new Error("gamertag is already registered"));
    }

    const user = await User.create({
      email,
      gamertag,
      password,
    });

    const token = await user.getSignedToken();

    res.status(200).json({
      success: true,
      message: `Welcome to Infinite Stats ${gamertag}`,
      token,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const postLogin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) return next(new Error("please fill in all fields"));
  try {
    const user = await User.findOne({ email });
    if (!user) return next(new Error("Incorrect email, please try again"));

    const isMatch = await user.matchPassword(password);
    if (!isMatch) return next(new Error("password incorrect"));

    const token = user.getSignedToken();

    res.status(200).json({
      success: true,
      message: `Successfully logged in ${user.gamertag}`,
      token,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = { postRegister, postLogin };
