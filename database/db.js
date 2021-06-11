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

const reviewSchema = new mongoose.Schema({
  userid: String, 
  rating: Number, 
  comment: String,
  date: { 
    type: Date, 
    default: Date.now 
  }
});

const replySchema = new mongoose.Schema({
  userid: String, 
  comment: String, 
  date: { 
    type: Date, 
    default: Date.now 
  }
});

const commentSchema = new mongoose.Schema({
  userid: String, 
  comment: String, 
  subComments: [replySchema], 
  date: { 
    type: Date, 
    default: Date.now 
  }
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
  reviews: [reviewSchema],
  comments: [commentSchema],
});

const Users = mongoose.model("Users", userSchema);
const Games = mongoose.model("Games", gameSchema);
const Comments = mongoose.model("Comments", commentSchema);

module.exports = {Users, Games, Comments};