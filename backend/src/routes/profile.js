const express = require('express');
const router = express.Router();

const {celebrate, Segments, Joi } = require('celebrate');

const ProfileController = require( '../controller/ProfileController' );

router.get( '/Profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown(),
}), ProfileController.index );

module.exports = router;
