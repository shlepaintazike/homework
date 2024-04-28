const { sendAllGames, sendUpdatesGames } = require('../controllers/games');
const { getAllGames, checkIsTitleinArray, updateGamesArray, updateGamesFile, findGameById, deleteGame } = require('../middlewares/games');

const gamesRouter = require('express').Router();

gamesRouter.get('/games', getAllGames, sendAllGames);
gamesRouter.delete('/games/:id', getAllGames,findGameById, deleteGame, updateGamesFile, sendUpdatesGames);
gamesRouter.post('/games', getAllGames, checkIsTitleinArray, updateGamesArray, updateGamesFile, sendUpdatesGames);

module.exports = gamesRouter;