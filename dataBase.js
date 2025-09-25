const mongoose = require("mongoose");

mongoose.set('strictQuery' ,false)
mongoose.connect("mongodb://127.0.0.1:27017/loginApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});
const User = mongoose.model("User", userSchema);

module.exports = User;