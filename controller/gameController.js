const { readFilePromise, writeFilePromise } = require("../helpers/fileHelper");
const path = require('path');
const { v4 } = require("uuid");

const databaseFile = path.join(__dirname, '..', 'data', 'games.json');

const getGames = async (req, res) => {
    await readFilePromise(databaseFile)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({message: 'Error reading the file:', err})
        });
}

const addGame = async (req,res) => {
    const newGame = {...req.body, id: v4()};
    const games = await readFilePromise(databaseFile);
    games.push(newGame);

    await writeFilePromise(databaseFile, games)
        .then(() => {
            res.status(201).json(newGame);
        })
        .catch(err => {
            res.status(500).json({message: 'Error when storing game data:', err})
        });
}

const removeGame = async (req,res) => {
    const games = await readFilePromise(databaseFile);
    const index = games.findIndex(game => game.id === req.params.id);
    games.splice(index, 1);

    await writeFilePromise(databaseFile, games)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({message: 'Error when deleting game data:', err})
        });
}

module.exports = { getGames,addGame,removeGame }