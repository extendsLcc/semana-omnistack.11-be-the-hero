const express = require('express');
const router = express.Router();
const cors = require('cors');
const {errors} = require('celebrate');

const ongs = require('./routes/ongs');
const incidents = require('./routes/incidents');
const profile = require('./routes/profile');
const session = require('./routes/sessions');

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);


app.use(ongs);
app.use(incidents);
app.use(profile);
app.use(session);

app.use(errors());

app.listen(3333);
