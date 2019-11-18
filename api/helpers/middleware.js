module.exports = {
    validateStudent
  };

function validateStudent(req, res, next) {
  let student = req.body;
  if (!student) {
    res.status(400).json({ message: "missing student data" });
  } else if (!student.name) {
    res
      .status(400)
      .json({ message: "missing required name field for student record" });
  } else {
    req.student = student;
    next();
  }
}
