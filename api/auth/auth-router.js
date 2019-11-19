const router = require('express').Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require('../users/users-model');
const mw = require('../helpers/middleware');

router.post('/register', mw.validateNewUser, (req, res) => {
  const { username, password } = req.user;
  const hash = bcrypt.hashSync(password, 10);  

  const userTobeRegistered = {
    username, 
    password: hash
  }

  Users.add(userTobeRegistered)
  .then(savedUser => {
    res.status(201).json(savedUser)
  })
  .catch(err => {
    res.status(500).json({message: "There was an error while trying to register this user: " + err.message})
  })
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;
  
  Users.findByUsername(username)
  .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({
          message: `Welcome ${user.username}!`,
          token
        });
      } else {
        res.status(401).json({ message: "Invalid Credentials"  });
      }
    })
    .catch(error => {
      res.status(500).json({message: `There was an error with this operation: ${error.message}`});
    });
});

function generateToken(user) {
  const payload = {
    subject: user.id,
  };
  const options = {
    expiresIn: "1d"
  };

  const result = jwt.sign(payload, process.env.JWT_SECRET, options);

  return result;
}

module.exports = router;
