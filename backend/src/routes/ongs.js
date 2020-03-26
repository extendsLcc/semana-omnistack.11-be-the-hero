const express = require('express');
const router = express.Router();

const OngController = require( '../controller/OngControler' );

router.post( '/ongs', OngController.create );
router.get( '/ongs', OngController.index );

module.exports = router;
