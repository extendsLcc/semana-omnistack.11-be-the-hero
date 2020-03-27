const express = require('express');
const router = require('./routes/index');
const cors = require('cors');

const ongs = require('./routes/ongs');
const incidents = require('./routes/incidents');
const profile = require('./routes/profile');
const session = require('./routes/sessions');

const app = express();
app.use(express.json());
app.use(router);

app.use(cors());

app.use(ongs);
app.use(incidents);
app.use(profile);
app.use(session);

app.listen(3333);
