// the router to handle income requests
const { Router } = require("express");
const { getAllNodes } = require("../controllers/nodeController");

const router = Router();

router.get("/", getAllNodes);

module.exports = router;
