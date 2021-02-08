const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const Users = require("./database/db.js");
const axios = require("axios")

const bcrypt = require("bcrypt");
const saltNumber = 15;

app.use(express.static(path.join(__dirname, "./public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/login", (req, res) => {
  const email = req.query.email;
  const pass = req.query.password;
  
  Users.find({email: email}, (err, found) => {
    if (bcrypt.compareSync(pass, found[0].password)) {
      res.send('Success').status(200);
    } else {
      res.send('Failed Login').status(401);
    }
  })
});


app.post('/register', (req, res) => {
   let password_hash =  bcrypt.hashSync(req.body.password, saltNumber, function(err, hash) {
    console.log(hash);
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
