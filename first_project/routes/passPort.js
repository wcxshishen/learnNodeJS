const express = require("express");
const router = express.Router();

router.get("/passport/xxx", (req,res) => {
    res.send("passport")
});

module.exports = router;