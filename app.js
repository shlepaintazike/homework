const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');

const gamesRouter = require('./routes/games');
const mainRouter = require('./routes/main');
const cors = require('./middlewares/cors');

const app = express();
const PORT = 3000;

app.use(
    cors,
    bodyParser.json(),
    express.static(path.join(__dirname, 'public')),
    mainRouter,
    gamesRouter);

app.listen(PORT, () => {
    console.log(`Приложение запущено тут: http://localhost:${PORT}`);
});