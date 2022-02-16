const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');


router.get('/', (req, res) => {
    let content = fs.readFileSync(path.join(__dirname, '../views', 'index.html'), 'utf-8');
    res.send(content);
})

module.exports = router;