const { readFilePromise, writeFilePromise } = require("../helpers/fileHelper");
const path = require('path');
const { v4 } = require("uuid");

const databaseFile = path.join(__dirname, '..', 'data', 'users.json');

const login = async (req, res) => {
    const user = await findUser(req.body);
    if (user) {
        return res.status(200).json({id: user.id, email: user.email});
    }

    res.status(404).json({message: "Wrong login or password"})
}

const addUser = async (req,res) => {
    const newUser = {...req.body, id: v4()};
    const users = await readFilePromise(databaseFile);
    users.push(newUser);

    await writeFilePromise(databaseFile, users)
        .then(() => {
            res.status(201).json(newUser);
        })
        .catch(err => {
            res.status(500).json({message: 'Error when storing user data:', err})
        });
}

const removeUser = async (req,res) => {
    const users = await readFilePromise(databaseFile);
    const index = users.findIndex(user => user.id === req.body.id);
    users.splice(index, 1);

    await writeFilePromise(databaseFile, users)
        .then(() => {
            res.status(200).json({message: 'User deleted successfully!'});
        })
        .catch(err => {
            res.status(500).json({message: 'Error when deleting user data:', err})
        });
}

const findUser = async (user) => {
    const users = await readFilePromise(databaseFile)
    return users.find(item => item.email === user.email && item.password == user.password);
}

module.exports = { login, addUser, removeUser, databaseFile }