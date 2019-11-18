const router = require('express').Router();
const Users = require('./users-model.js');

router.get('/', (req, res) => {
  res.json({ api: 'Yaay! our api is working' });
});



module.exports = router;
