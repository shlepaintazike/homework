
const sendAllGames = async (req, res) => {
    res.send(req.games);
};

const sendUpdatesGames = async (req, res) => {
    res.send({
        games: req.games,
        updated: req.game
    })
};

module.exports = {
    sendAllGames,
    sendUpdatesGames,
}