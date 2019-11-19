const router = require("express").Router();
const Projects = require("./projects-model");

router.get("/", (req, res) => {
    Projects.find()
      .then(projects => {
        res.status(200).json(projects);
      })
      .catch(error => {
        res.status(500).json({
          message: `Error retrieving the list of all projects: ${error.message}`
        });
      });
  });

  module.exports = router;