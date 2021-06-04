const {
  getPeople,
  createPerson,
  updatePerson,
  deletePerson,
} = require("../controller/people");
const express = require("express");

const router = express.Router();

router.get("/", getPeople);
router.post("/", createPerson);
router.put("/:id", updatePerson);
router.delete(`/:id`, deletePerson);

module.exports = router;
