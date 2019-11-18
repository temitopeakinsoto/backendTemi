const router = require("express").Router();
const mw = require('../helpers/middleware');
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

router.post("/", mw.validateStudent, (req, res) => {
    const { name }  = req.body;
    const user = { name }
    Users.add(user)
    .then(saved => {
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json({
          error: `An error was encountered while creating this user: ${error.message}`
        });
      });
  });

  router.delete("/:id", (req, res) => {
    const id = req.params.id;
    Users
      .remove(id)
      .then(() => {
        res.status(200).json({ message: "This student has been deleted" });
      })
      .catch(error => {
        res.status(500).json({
          message: `Error deleting the student: ${error.message}`
        });
      });
  });

module.exports = router;
