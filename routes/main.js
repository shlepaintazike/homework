const mainRouter = require("express").Router();
const fs = require("fs").promises;

mainRouter.get('/', (req, res) => {
    fs.readFile('./public/index.html', 'utf-8').then((data) => {
        res.header('Content-Type', 'text/html');
        res.send(data);
    })
});

module.exports = mainRouter;