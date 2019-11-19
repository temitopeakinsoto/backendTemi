const router = require("express").Router();
const Users = require("./messages-model");

router.get("/", (req, res) => {
  Users.find()
    .then(students => {
      res.status(200).json(students);
    })
    .catch(error => {
      res.status(500).json({
        message: `Error retrieving the list of all users: ${error.message}`
      });
    });
});

module.exports = router;
