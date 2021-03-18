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

const gameSchema = new mongoose.Schema({
  key: String,
  gameKeywords: [String],
  gameEmbed: String,
  gameTitle: String,
  gameBackground: String,
  gameCover: String,
  gameThumb1: String,
  gameThumb2: String,
  gamePlayer: String,
  gameDescription: String,
  gamePublishedBy: String,
  gameAbout: String,
  gameProgammedBy: String,
  reviews: [{userid: String, rating: Number, comment: String}],
});

const Users = mongoose.model("Users", userSchema);
const Games = mongoose.model("Games", gameSchema);

/*const testGame = new Games({
  gameTitle:        "Vesta",
  reviews:  [{userid: "VeniVidiVici", rating: 2, comment: "HATE"}],
});*/

module.exports = Users;
module.exports = Games;



/*
// LOAD DB BELOW
testGame.save(function (err) {
  if (err) return console.error(err);
  console.log("DB saved");
});*/
