const express = require('express');
const router = express.Router();

const ProfileController = require( '../controller/ProfileController' );

router.get( '/profile', ProfileController.index );

module.exports = router;
