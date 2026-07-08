const express = require("express");
const {createLog,getLogs} = require("../controllers/logController");

const router = express.Router();

console.log("LogRoute loaded");

router.post("/",createLog);
router.get("/",getLogs);

module.exports = router;