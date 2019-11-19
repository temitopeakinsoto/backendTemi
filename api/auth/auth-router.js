const router = require('express').Router();
const bcrypt = require("bcryptjs");

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



module.exports = router;
