const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("Connected to the database");
});

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: {type: String, unique: true},
  image: String,
  biography: String,
  comments: [String],
  date: { type: Date, default: Date.now },
});

const reviewSchema = new mongoose.Schema({
  reviews: [Object, Number, String]
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
