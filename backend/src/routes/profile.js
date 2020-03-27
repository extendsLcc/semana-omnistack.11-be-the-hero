const express = require('express');
const router = express.Router();

const ProfileController = require( '../controller/ProfileController' );

router.get( '/Profile', ProfileController.index );

module.exports = router;
