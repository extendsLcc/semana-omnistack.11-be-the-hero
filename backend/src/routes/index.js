const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  return res.json({
    test: "valor"
  });
});

module.exports = router;
