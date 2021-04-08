require('dotenv').config();

const express = require("express");
const path = require("path");
const axios = require("axios")
const bcrypt = require("bcrypt");
const session = require('express-session');
var uid = require('uid-safe');
const db = require('./database/db.js');
const { Users, Games, Comments} = db;

const { Console } = require('console');
// const { updateOne, db } = require('./database/db.js');
// const { nextTick } = require('process');
const app = express();

const {PORT, SECRET} = process.env;

const saltNumber = Number(process.env.SALT);
app.use(express.static(path.join(__dirname, "./public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {}
}));



app.post('/', function(req, res) {
  if(req.session.user) {
    res.send(true);
  } else {
    res.send(false);
  }
});

app.post('/login', (req, res) => {
  const email = req.body.email;
  const pass = req.body.password;

  Users.find({email: email}, (err, found) => {
    if (found.length === 1) {
      if (bcrypt.compareSync(pass, found[0].password)) {
        req.session.user = found[0].id;                   // We are only storing the objects id, all info still comes from database.
        res.send('Success').status(200);
      }
    }
     else {
      res.send('Failed Login').status(401);
    }
  })
});

app.post('/register', (req, res) => {
   let password_hash =  bcrypt.hashSync(req.body.password, saltNumber, function(err, hash) {
    return hash;
  });

  const new_user = new Users({
    name: req.body.displayname,
    password: password_hash,
    email: req.body.email,
    image: './images/avatars/default.jpg',
    biography: '',
    comments: [],
  });

  Users.find({email: req.body.email}, (err, found) => {
    if (found.length === 0) {
      new_user.save(function (err) {
        if (err) return console.error(err);
        req.session.user = new_user.id;
        console.log("New user registered");
        res.end();
      });
    } else {
      res.send('Email already in use');
    }
      
  })
});

app.get('/profile', function(req, res) {
  const userID = req.session.user;
  Users.find({_id: userID}, (err, found) => {
    try {
      res.send([found[0].name, found[0].email, found[0].image, found[0].biography]);
      res.end();
    } catch (err) {
      res.sendStatus(401);
    }
  });
});

app.post('/settings', function(req, res) {
  if (req.session.user) {
    const userID = req.session.user;
    const verify_password = req.body.verify_password;

    Users.find({_id: userID}, (err, found) => {
        if (bcrypt.compareSync(verify_password, found[0].password)) {
          const query = { "_id": userID };
          const update = { "$set": { "name": req.body.displayname, "email": req.body.email, "image": req.body.image, "biography": req.body.biography } };
          if (req.body.password.length > 0) {
            let password_hash =  bcrypt.hashSync(req.body.password, saltNumber, function(err, hash) {
              return hash;
            });
            update.password = password_hash;
          }
          const options = { "upsert": false };

          Users.updateOne(query, update, options)
          .then(result => {
          })
          .catch(err => console.error(`Failed to update user: ${err}`));
          res.end();
      } else {
        res.sendStatus(404);
      }
    });
  } else {
    res.sendStatus(404);
  }
});

app.get('/logout', function(req, res) {
  req.session.destroy(function() {
    console.log('user logged out of account');
  });
});

app.post('/review', function(req, res) {
  Games.find({gameTitle: req.body.game_title}, (err, found) => {
    Games.updateOne(
      {"_id": found[0].id},
      {$push: {reviews: {userid: req.session.user, rating: parseInt(req.body.rating), comment: req.body.comment}}},
    ).then(result => {
      
    }).catch(error => {
      console.log(error);
      res.end();
    });
  });
  res.sendStatus(200);
});

app.get('/review', function(req, res) {
  const game_title = (req.headers.referer).split('=').pop();
  let reviews;
  Games.find({key: game_title}, (err, found) => {
    try {
      const storage = [];
      reviews = found[0].reviews;
      console.log(reviews);
      for (let i = 0; i < reviews.length; i += 1) {
        let review = reviews[i];
        let copy = review.toObject();
        const { userid } = review;
        let username;
        Users.find({_id: userid}, (err, docs) => {
          const seshId = req.session.user;
          let edit = false;
          if (userid === seshId) {
            edit = true;
          }
          username = docs[0].name;
          avatar = docs[0].image;
          copy.userName = username;
          copy.avatar = avatar;
          copy.edit = edit;
          storage.push(copy);
        })
          .then(() => {
            if (i + 1 === reviews.length) {
              res.status(200).send(storage);
            }
          });
      }
    } catch(err) {
      res.status(500).send(err);
    }
  })
    .catch(error => {
      res.status(500).send(error)
    });
});

app.get('/games', function(req, res) {
  Games.find({}, function(err, found) {
    if (!err) {
      res.status(200).send(found);
    } else {
      res.status(500).send(err);
    }
  });
});

app.get('/comments' ,function(req, res) {
  const game_title = (req.headers.referer).split('=').pop();
  let comments; 
  Games.find({key: game_title}, (err, found) => {
    try {
      const storage = [];
      comments = found[0].comments;
      for (let i = 0; i < comments.length; i += 1) {
        let comment = comments[i];
        let copy = comment.toObject();
        const { userid } = comment;
        let username;
        Users.find({_id: userid}, (err, docs) => {
          const seshId = req.session.user;
          let edit = false;
          if (userid === seshId) {
            edit = true;
          }
          username = docs[0].name;
          avatar = docs[0].image;
          copy.userName = username;
          copy.avatar = avatar;
          copy.edit = edit
          storage.push(copy);
        })
          .then (() => {
            if (i + 1 === comments.length) {
              res.status(200).send(storage);
            }
          });
      }
    } catch(err) {
      res.status(500).send(err);
    }
  }).catch(error => 
    console.error(error));
});

app.post('/comments', function(req, res) {
  const game_title = (req.headers.referer).split('=').pop();
  Games.find({key: game_title}, (err, found) => {
    let game = found[0];
    if (req.body.edit === undefined) {
      game.comments.push({userid: req.session.user, comment: req.body.comment});
      game.save();
    } else {
      const { id, edit } = req.body;
      for (comment in game.comments) {
        if (game.comments[comment]._id == id) {
          game.comments[comment].comment = edit;
        }
      }
      game.save();
    };
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
