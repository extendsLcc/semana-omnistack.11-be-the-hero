const express = require('express');
const router = express.Router();

const {celebrate, Segments, Joi } = require('celebrate');

const SessionController = require('../controller/SessionController');

router.post('/sessions',
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            title: Joi.string().required(),
            description: Joi.string().required(),
            value: Joi.number().required(),
        })
    }), SessionController.create);

module.exports = router;
