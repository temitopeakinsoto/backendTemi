const router = require('express').Router();
const bcrypt = require("bcryptjs");
const Users = require('../users/users-model');
const mw = require('../helpers/middleware');
const generateToken = require('../helpers/tokenise');

router.post('/register', mw.validateNewUser, (req, res) => {
  const { username, password } = req.user;
  const hash = bcrypt.hashSync(password.toString(), 10);  

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
      if (user && bcrypt.compareSync(password.toString(), user.password)) {
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


module.exports = router;
