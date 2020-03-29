const express = require('express');
const router = express.Router();

const {celebrate, Segments, Joi } = require('celebrate');

const OngController = require('../controller/OngControler');

router.get('/ongs', OngController.index);
router.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length( 2 ),
    })
}), OngController.create);

module.exports = router;
