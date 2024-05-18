const fs = require('fs')

function readFilePromise(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(JSON.parse(data))
            }
        })
    })
}

function writeFilePromise(file, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, JSON.stringify(content), err => {
            if (err) {
                reject(err);
            } else {
                resolve(content);
            }
        })
    });
}

module.exports = { readFilePromise, writeFilePromise }