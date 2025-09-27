const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/loginApp");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});
const User = mongoose.model("User", userSchema);

async function findUserByUsername(username) {
  return await User.findOne({ username });
}

async function findUserForLogin(username, password) {
  return await User.findOne({ username, password });
}

async function createNewUser(username, password) {
  const newUser = new User({ username, password });
  await newUser.save();
}

module.exports = {
  findUserByUsername,
  findUserForLogin,
  createNewUser,
};
