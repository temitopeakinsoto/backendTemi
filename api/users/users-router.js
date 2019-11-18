const router = require("express").Router();
const Users = require("./users-model.js");

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

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Users.findById(id)
    .then(student => {
      if (student) {
        res.status(200).json(student);
      } else {
        res
          .status(401)
          .json({ message: "There is no user with the specified id" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: `Error retrieving the list of all users: ${error.message}`
      });
    });
});

module.exports = router;
