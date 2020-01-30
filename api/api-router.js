const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { jwtSecret } = require("../config/secrets.js");

const Users = require("../users/users-model.js");

//for endpoints beginnings with /api
router.post("/register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 3);
  user.password = hash;

  Users.add(user)
    .then(newUser => {
      res.status(201).json(newUser);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "There was an error" });
    });
});

router.post("/login", (req, res) => {
  let { userName, password } = req.body;
  //console.log(password, "password line 27");
  Users.findByUser(userName)
    .first()
    .then(user => {
      //console.log(user, "user line 31");
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = signToken(user);

        res.status(200).json({ token });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "There was an error" });
    });
});

function signToken(user) {
  const payload = {
    id: user.id,
    name: user.userName,
    department: user.department
  };

  const options = {
    expiresIn: "8h"
  };
  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
