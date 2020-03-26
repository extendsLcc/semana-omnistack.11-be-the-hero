const express = require('express');
const router = express.Router();

const IncidentController = require( '../controller/IncidentController' );

router.post( '/incidents', IncidentController.create );
router.get( '/incidents', IncidentController.index );
router.delete( '/incidents/:id', IncidentController.delete );

module.exports = router;
