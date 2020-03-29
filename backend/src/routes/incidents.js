const express = require('express');
const router = express.Router();

const {celebrate, Segments, Joi} = require('celebrate');

const IncidentController = require('../controller/IncidentController');

router.post('/incidents',
    celebrate({
        [Segments.HEADERS]: Joi.object({
            authorization: Joi.string().required()
        }).unknown()
    }),
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            title: Joi.string().required(),
            description: Joi.string().required(),
            value: Joi.number().required(),
        })
    }), IncidentController.create);

router.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.index);

router.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentController.delete);

module.exports = router;
