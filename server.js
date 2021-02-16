require('dotenv').config();

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const Users = require("./database/db.js");
const axios = require("axios")
const bcrypt = require("bcrypt");
const session = require('express-session');
var uid = require('uid-safe')
const app = express();

const {PORT, SECRET} = process.env;

const saltNumber = Number(process.env.SALT);
app.use(express.static(path.join(__dirname, "./public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  secret: SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {}
}))



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
        req.session.user = found[0];
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
    comments: [],
  });

  Users.find({email: req.body.email}, (err, found) => {
    if (found.length === 0) {
      new_user.save(function (err) {
        if (err) return console.error(err);
       console.log("DB saved");
       res.end();
      });
    } else {
      res.send('Email already in use');
    }
  })
});

app.post('/profile', function(req, res) {
  if(req.session.user) {
    let user = req.session.user;
    user[0].name = req.body.displayname;  // Need to actually update the DB with this info.
  } else {
    res.sendStatus(404);
  }
});

app.get('/logout', function(req, res) {
  req.session.destroy(function() {
    console.log('user logged out of account');
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
